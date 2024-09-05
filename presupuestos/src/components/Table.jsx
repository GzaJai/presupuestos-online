import { useState } from 'react'
import React from 'react'
import Row from './Row'

const Table = () => {

    const [rowsQ, setRowsQ] = useState(1)

   const addRow = (check) => {
        setRowsQ(prevRowsQ => prevRowsQ + 1)
    }

   let items = []

   for (let i = 1; i <= rowsQ; i++) {
    items.push(<Row key={i} addRow={addRow}></Row>);
  }
    
  return (
    <div className='w-1/2 mx-auto p-5 bg-blue-400'>
        <div className="w-[90%] mx-auto flex gap-[.2rem] py-[.1rem] text-center">
            <span className="flex-1 p-1 text-white font-bold text-xl" type="text">Producto</span>
            <span className="w-[8rem] p-1 text-white font-bold text-xl" type="number">Cantidad</span>
            <span className="w-[8rem] p-1 text-white font-bold text-xl" type="number">Precio</span>
            <span className="w-[8rem] p-1 text-white font-bold text-xl" type="number">Total</span>
        </div>
        {items}
    </div>
  )
}

export default Table