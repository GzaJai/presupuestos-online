import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import Table from "../components/Table";
import SelectClientForm from "./SelectClientForm";
import { formatRow, saveBudget, saveEditedBudget } from "../utils/apiUtils";

function EditBudget({ budgetData, previousRows }) {
  const [rows, setRows] = useState([{ id: 0 }]);
  const [total, setTotal] = useState(0);
  const [clientData, setClientData] = useState();
  const [done, setDone] = useState(false);
  
  useEffect (()=>{
    if(previousRows) {
      setRows(previousRows)
    }
  },[])

  const checkRowsFilled = () => {
    rows.map((row) => {
      if (!row.filled) {
        return false;
      }
    });
    return true;
  };

  const handleDone = () => {
    const filled = checkRowsFilled();
    if (!filled) {
      toast.warning("Hay filas sin completar.");
    } else {
      setDone(!done);
    }
  };

  const handleSave = async () => {

    const budgetItems = rows.map(formatRow);
    if (clientData == null || clientData == undefined) {
      console.log("No hay datos del cliente");
    }
    
    const newBudgetData = {
      clientId: clientData.id,
      clientName: clientData.name,
      clientCuit: clientData.cuit,
      clientAddress: clientData.address,
      clientIvaCondition: clientData.ivaCondition,
      total: total,
      budgetItems: budgetItems,
    };

    if (previousRows) {
      saveEditedBudget(budgetData.id, newBudgetData)
      return
    }

    saveBudget(newBudgetData)
      .then((res) => {
        if (res.status == 200) {
          toast.success("Se creó el presupuesto");
        } else {
          toast.warning("No se pudo crear el presupuesto");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.warning("No se pudo guardar el presupuesto");
      });
  };

  return (
    <>
      <div className="w-10/12 mx-auto p-5 pb-10 rounded-lg font-mukta shadow-custom-external-blur border-[1px] border-custom-gray text-black">
        {done ? (
          <SelectClientForm setClientData={setClientData} />
        ) : (
          <Table
            rows={rows}
            rowsSetter={setRows}
            total={total}
            totalSetter={setTotal}
            editing={true}
            budgetData={budgetData}
          />
        )}
      </div>
      <div className="flex justify-center space-x-10 pt-[2rem]">
        {done ? (
          <>
            <button className="btn-custom-confirm bg-yui-900 p-2" onClick={handleDone}>Volver</button>
            <button className="btn-custom-confirm p-2" onClick={handleSave}>Guardar presupuesto</button>
          </>
        ) : (
        <button className="btn-custom-confirm p-2" onClick={handleDone}>Siguiente</button>
        )}
      </div>
      <Toaster />
    </>
  );
}

export default EditBudget;
