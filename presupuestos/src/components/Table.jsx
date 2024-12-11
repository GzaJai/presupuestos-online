import { useState, useEffect, useRef } from "react";
import Row from "./Row";

const Table = ({ rows, rowsSetter, total, totalSetter }) => {
  


  const addRow = () => {    
    rowsSetter((prevRows) => [...prevRows, {id: rows.length}]);
  };

  const saveRow = (id, detail, quantity, price, total, filled) => {    
    rowsSetter((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, detail, quantity, price, total, filled } : row
      )
    );
  }

  const removeRow = (idToRemove) => {
      rowsSetter((prevRows) => prevRows.filter((row) => row.id !== idToRemove));
  };

  const getTableTotal = () => {
    const totalSum = rows.reduce((sum, row) => {
      const rowTotal = parseFloat(row.total) || 0.0;
      return sum + rowTotal;
    }, 0.0);
    totalSetter(totalSum);
  };


  useEffect(() => {
    getTableTotal()
  },[rows])


  return (
    <>
      <div className="w-[90%] mx-auto flex gap-[.2rem] py-[.1rem] text-center">
        <span className="flex-1 p-1 text-white font-bold text-xl">
          Producto
        </span>
        <span className="w-[8rem] p-1 text-white font-bold text-xl">
          Cantidad
        </span>
        <span className="w-[8rem] p-1 text-white font-bold text-xl">
          Precio
        </span>
        <span className="w-[8rem] p-1 text-white font-bold text-xl">Total</span>
      </div>

      {rows.map((row) =>(
        <Row
        key={row.id}
        rowId={row.id}
        saveRow={saveRow}
        removeRow={() => removeRow(row.id)}
        getTableTotal={getTableTotal}
        />
      ))}
      <div className="flex justify-center p-6">
        <button
          className="bg-green-600 p-3 rounded-lg text-white font-bold hover:bg-blue-600 hover:duration-150"
          onClick={addRow}
          >
          Agregar fila
        </button>
      </div>
      <div className="w-[90%] mx-auto flex gap-[.2rem] py-[.1rem] text-center">
        <span className="flex-1 p-3 text-white font-bold text-2xl">
          Total Presupuesto
        </span>
        <span className="w-[8rem] p-3 text-xl font-bold bg-white rounded">
          {total != 0 ? "$" + total : ""}
        </span>
      </div>
    </>
  );
};

export default Table;
