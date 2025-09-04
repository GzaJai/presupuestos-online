import { useState } from "react"
import Table from "./components/Table"
import ClientInfoForm from "./components/ClientInfoForm"
import { fillForm } from "./utils/pdfUtils";

function App() {
  const [rows, setRows] = useState([{id: 0}]);
  const [total, setTotal] = useState(0);
  const [clientData, setClientData] = useState({});
  const [done, setDone] = useState(false)
  
  const checkRowsFilled = () => {
    rows.map((row) => {
      if(!row.filled){
        alert("Hay filas sin completar.")
        return false
      }
    })
    return true
  }

  const printPdf = () => {
    if(checkRowsFilled){
      fillForm(rows, total, clientData)
    }
  }
  
  const handleDone = () => {
    setDone(!done)
    console.log('done');
    
  }

  return (
    <>
      <div className="w-10/12 mx-auto p-5 pb-10 bg-custom-gray rounded-lg font-mukta">
        {done ? <ClientInfoForm setData={setClientData} /> : <Table rows={rows} rowsSetter={setRows} total={total} totalSetter={setTotal} />}
      </div>
        <div className="flex justify-center space-x-10 pt-[4rem]">
          {
            done && <button className="bg-orange-600 p-5 mb-10 rounded-lg text-white font-bold text-xl hover:bg-blue-600 hover:duration-150" onClick={handleDone}>Volver</button>
          }
          <button className="btn-custom-confirm text-lg p-[1.25rem]" onClick={done ? printPdf : handleDone}>{done ? "Imprimir" : "Siguiente"}</button>
        </div>
      </>
  )
}

export default App
