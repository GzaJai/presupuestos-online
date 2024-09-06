import React, { useRef, useState } from 'react';
import Printable from './Printable';
import { downloadPdf } from '../utils/pdfUtils';
import PrintFooter from './PrintFooter';

function BugdetPrinter() {
    const contentRef = useRef(null);
    const [isReady, setIsReady] = useState(false)

    const handleIsReady = () => {
        setIsReady(!isReady)
    }

    return (
        <div className='w-100 flex flex-col'>
            <div className='self-center flex flex-col'>
                <button 
                className='bg-orange-500 mt-10 p-3 rounded-lg text-white font-bold hover:bg-blue-600 hover:duration-150 '
                onClick={handleIsReady}>
                    {isReady?'Editar Presupuesto':'Presupuesto Listo'}
                </button>
                {isReady&&
                <button 
                className='bg-green-600 self-center mt-10 p-3 rounded-lg text-white font-bold hover:bg-blue-600 hover:duration-150 '
                onClick={()=>downloadPdf(contentRef)}>
                    Descargar Presupuesto
                </button>}
            </div>
            <div ref={contentRef}>
            <Printable show={isReady}/>
            {isReady&&
            <PrintFooter />
            }
            </div>
        </div>
    );
}

export default BugdetPrinter;