import { useState } from "react";
import { toast, Toaster } from "sonner";
import Table from "../components/Table";
import SelectClientForm from "./SelectClientForm";
import { formatRow, saveBudget } from "../utils/apiUtils";

function EditBudget() {
  const [rows, setRows] = useState([{ id: 0 }]);
  const [total, setTotal] = useState(0);
  const [clientId, setClientId] = useState({});
  const [done, setDone] = useState(false);

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
    
    const budgetData = {
      clientId: clientId,
      total: total,
      budgetItems: budgetItems,
    };

    saveBudget(budgetData)
      .then((res) => {
        console.log(res.data);
        
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
          <SelectClientForm setClientData={setClientId} />
        ) : (
          <Table
            rows={rows}
            rowsSetter={setRows}
            total={total}
            totalSetter={setTotal}
            editing={true}
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
