import { useEffect, useState } from "react";
import { getClientById } from "../utils/apiUtils";
import { Link } from "react-router-dom";


function BudgetCard({ budget }) {
  const [client, setClient] = useState("");

  useEffect(() => {
    const fetchName = async () => {
      const name = await getClientById(budget.clientId, setClient);
    };
    fetchName();
  }, [budget.clientId]);

  return (
    <Link to={"/budget-details"} state={{ budget, client }} className='flex justify-between border rounded-lg max-w-[50rem] mx-auto p-4 px-[4rem] shadow-custom-external-blur bg-white'>
      <p>{budget.id}</p>
      <p>{client.name || "Cargando..."}</p>
      <p>{budget.issueDate}</p>
      <p>${budget.total}</p>
    </Link>
  );
}

export default BudgetCard;