import { useState, useEffect, useRef } from 'react';
import Row from './Row';

const Table = ({ done }) => {
  const [rowsQ, setRowsQ] = useState(1);
  const [rows, setRows] = useState([{ id: 1 }]);
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
        />
      ))}
    </div>
  );
};

export default Table;