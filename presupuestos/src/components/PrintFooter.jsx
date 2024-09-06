import React from 'react'

const PrintFooter = () => {

  const handleImageError = (e) => {
    e.target.onerror = null; // Prevenir un bucle infinito si la segunda imagen también falla
    e.target.src = 'https://drive.google.com/file/d/1vO0hvVgMzQAGSUmoUpmg2qjJFCVUkEiS/view?usp=sharing'; // Ruta en línea de la imagen de respaldo
  };

  return (
    <footer className="left-0 w-full text-center py-4 self-center">
        <h6 className='pb-10'>creado por Gonzalo Jaime</h6>
        <img className='mx-auto' src="../../public/portfolio-qr.png" alt="" onError={handleImageError} />
    </footer>
  )
}

export default PrintFooter