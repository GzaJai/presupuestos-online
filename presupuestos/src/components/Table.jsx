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
      <p className="text-xl font-medium pb-4">Ingrese los productos del presupuesto</p>
      <div className="w-[90%] mx-auto flex gap-[.2rem] py-[.1rem] text-center">
        <span className="flex-1 p-1 font-bold text-lg">
          Producto
        </span>
        <span className="w-[8rem] p-1 font-bold text-lg">
          Cantidad
        </span>
        <span className="w-[8rem] p-1 font-bold text-lg">
          Precio
        </span>
        <span className="w-[8rem] p-1 font-bold text-lg">Total</span>
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
          className="btn-custom-confirm p-[.75rem]"
          onClick={addRow}
          >
          Agregar fila
        </button>
      </div>
      <div className="w-[90%] mx-auto flex gap-[.2rem] py-[.1rem] text-center justify-end">
        <span className="p-3  font-bold text-2xl">
          Total Presupuesto
        </span>
        <span className="w-[8rem] p-3 text-xl font-bold border-[1.2px] border-custom-gray rounded">
          {total != 0 ? "$" + total : ""}
        </span>
      </div>
    </>
  );
};

export default Table;
