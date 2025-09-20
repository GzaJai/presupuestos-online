import { Link } from "react-router-dom";

function BudgetCard({ budget }) {
  return (
    <Link to={"/budget-details"} state={{ budget }} className='flex justify-between border rounded-lg max-w-[50rem] mx-auto p-4 px-[4rem] shadow-custom-external-blur bg-white'>
      <p>{budget.id}</p>
      <p>{budget.clientName}</p>
      <p>{budget.issueDate}</p>
      <p>${budget.total}</p>
    </Link>
  );
}

export default BudgetCard;