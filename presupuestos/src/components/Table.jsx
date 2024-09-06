import { useState, useEffect, useRef } from 'react';
import Row from './Row';

const Table = ({ done }) => {
  const [rowsQ, setRowsQ] = useState(1);
  const [rows, setRows] = useState([{ id: 1 }]);
  const [rowsValues, setRowsValues] = useState([])
  const [total, setTotal] = useState(0)

  const initialDone = useRef(done);

  const addRow = () => {
    setRowsQ(prevRowsQ => prevRowsQ + 1);
    setRows(prevRows => [...prevRows, { id: rowsQ + 1 }]);
  };

  const removeRow = (rowId) => {
    if(rowId!=1){
      setRows(prevRows => prevRows.filter((row) => row.id !== rowId));
    }
  };

  const getTotal = (rowId, rowTotal) => {
    console.log(rowsValues);
  
    const rowIndex = rowsValues.findIndex(r => r.id === rowId);
  
    if (rowIndex !== -1) {
      rowsValues[rowIndex].value = rowTotal;
    } else {
      rowsValues.push({ 'id': rowId, 'value': rowTotal });
    }

    let totalSum = rowsValues.reduce((sum, row) => sum + row.value, 0);
  
    setTotal(totalSum)
  };

  useEffect(() => {
    if (initialDone.current === done) {
      return;
    }
    
    initialDone.current = done;

    if (done) {
      setRowsQ(prevRowsQ => Math.max(prevRowsQ - 1, 1));
      setRows(prevRows => prevRows.slice(0, -1));
    } else {
      setRowsQ(prevRowsQ => prevRowsQ + 1);
      setRows(prevRows => [...prevRows, { id: rowsQ + 1 }]);
    }
  }, [done, rowsQ]);

  return (
    <div 
      className={`w-1/2 mx-auto p-5 pb-10 bg-blue-400 rounded-lg ${done ? 'cursor-not-allowed' : ''}`}
      onClick={done ? (e) => e.stopPropagation() : null}
    >
      <div className="w-[90%] mx-auto flex gap-[.2rem] py-[.1rem] text-center">
        <span className="flex-1 p-1 text-white font-bold text-xl">Producto</span>
        <span className="w-[8rem] p-1 text-white font-bold text-xl">Cantidad</span>
        <span className="w-[8rem] p-1 text-white font-bold text-xl">Precio</span>
        <span className="w-[8rem] p-1 text-white font-bold text-xl">Total</span>
      </div>

      {rows.map((row) => (
        <Row 
          key={row.id}
          rowId={row.id}
          addRow={addRow} 
          removeRow={() => removeRow(row.id)}
          done={done}
          getTableTotal={getTotal}
        />
      ))}
      <div className="w-[90%] mx-auto flex gap-[.2rem] py-[.1rem] text-center">
        <span className="flex-1 p-3 text-white font-bold text-2xl">Total Presupuesto</span>
        <span className="w-[8rem] p-3 text-xl font-bold bg-white rounded">{total!=0?'$'+total:''}</span>
      </div>
    </div>
  );
};

export default Table;