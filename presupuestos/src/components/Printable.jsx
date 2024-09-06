import React from 'react'
import Table from './Table'
import { getShortDate, getExpireDate } from '../utils/timeUtils'


const Printable = ({ show }) => {

  return (
    <div className='flex flex-col items-center'>
      {show&&
      <div>
        <div className='flex py-10 items-center gap-[2rem]'>
          <h3 className=' text-2xl font-bold'>Presupuesto Libreria Silver</h3>
          <img src="https://github.com/GzaJai/presupuestos-online/blob/main/presupuestos/public/Imagen1.png" alt="" />
        </div>
        <div className='flex items-center justify-around gap-[2rem]'>
          <h4 className='text-lg font-semibold pb-5'>Fecha: {getShortDate()}</h4>
          <h4 className='text-lg font-semibold pb-5'>Válido hasta: {getExpireDate(15)}</h4>
        </div>
      </div>
      
      }
      <Table done={show}/>
    </div>
  )
}

export default Printable