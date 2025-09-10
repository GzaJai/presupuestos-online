import { useEffect, useState } from "react";
import { getClientNameById } from "../utils/apiUtils";


function BudgetCard({ budget }) {
  const [clientName, setClientName] = useState("");

  useEffect(() => {
    const fetchName = async () => {
      const name = await getClientNameById(budget.clientId);
      setClientName(name);
    };
    fetchName();
  }, [budget.clientId]);

  return (
    <div className='flex justify-between border rounded-lg max-w-[50rem] mx-auto p-4 px-[4rem] shadow-custom-external-blur bg-white'>
      <p>{budget.id}</p>
      <p>{clientName || "Cargando..."}</p>
      <p>{budget.issueDate}</p>
      <p>{budget.total}</p>
    </div>
  );
}

export default BudgetCard;