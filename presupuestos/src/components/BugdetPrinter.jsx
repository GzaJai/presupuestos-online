import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Printable from './Printable';

function BugdetPrinter() {
    const contentRef = useRef(null);
    const [isReady, setIsReady] = useState(false)

    const handleIsReady = () => {
        setIsReady(!isReady)
    }

    const handleDownloadPdf = () => {
        if (contentRef.current) {
            html2canvas(contentRef.current, { scale: 2 }).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const imgWidth = 210;
                const pageHeight = 295;
                const imgHeight = canvas.height * imgWidth / canvas.width;
                const scaleFactor = .7;
    
                const scaledImgWidth = imgWidth / scaleFactor;
                const scaledImgHeight = imgHeight / scaleFactor;
                const scaledPageHeight = pageHeight / scaleFactor;
    
                const xOffset = (imgWidth - scaledImgWidth) / 2;
                let heightLeft = scaledImgHeight;
                let position = 0;
    
                pdf.addImage(imgData, 'PNG', xOffset, position, scaledImgWidth, scaledImgHeight);
                heightLeft -= scaledPageHeight;
    
                while (heightLeft >= 0) {
                    position = heightLeft - scaledImgHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, 'PNG', xOffset, position, scaledImgWidth, scaledImgHeight);
                    heightLeft -= scaledPageHeight;
                }
    
                pdf.save('documento.pdf');
            });
        }
    };
    

    return (
        <div className='w-100 flex flex-col'>
            <div ref={contentRef}>
            <Printable show={isReady}/>
            </div>
            <button 
            className='bg-slate-600 self-center mt-10 p-3 rounded-lg text-white font-bold hover:bg-blue-600 hover:duration-150 '
            onClick={handleIsReady}>
                {isReady?'Editar Presupuesto':'Presupuesto Listo'}
            </button>
            {isReady&&
            <button 
            className='bg-slate-600 self-center mt-10 p-3 rounded-lg text-white font-bold hover:bg-blue-600 hover:duration-150 '
            onClick={handleDownloadPdf}>
                Descargar Presupuesto
            </button>}
        </div>
    );
}

export default BugdetPrinter;