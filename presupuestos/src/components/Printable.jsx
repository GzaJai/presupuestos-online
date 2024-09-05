import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Printable( { children } ) {
    const contentRef = useRef(null);

    const handleDownloadPdf = () => {
        if (contentRef.current) {
            html2canvas(contentRef.current).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const imgWidth = 210; // Ancho del papel en mm
                const pageHeight = 295; // Alto del papel en mm
                const imgHeight = canvas.height * imgWidth / canvas.width;
                let heightLeft = imgHeight;
                let position = 0;

                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }

                pdf.save('documento.pdf');
            });
        }
    };

    return (
        <div className='w-100 flex flex-col'>
            <div ref={contentRef}>
            { children }
            </div>
            <button 
            className='bg-slate-600 self-center mt-10 p-3 rounded-lg text-white font-bold hover:bg-blue-600 hover:duration-150 '
            onClick={handleDownloadPdf}>
                Descargar Presupuesto
            </button>
        </div>
    );
}

export default Printable;