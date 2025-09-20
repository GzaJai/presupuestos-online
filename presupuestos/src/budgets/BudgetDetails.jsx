import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { api, formatBudgetItem } from '../utils/apiUtils';
import Table from '../components/Table';
import { fillForm } from '../utils/pdfUtils';
import EditBudget from './EditBudget';

const BudgetDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [rows, setRows] = useState([])
    const [total, setTotal] = useState()
    const [editing, setEditing] = useState(false)

    const budget = location.state?.budget;
    const client = location.state?.client;

    useEffect(() => {
      setRows(budget.items.map(formatBudgetItem))
    }, [])

    const handleDeleteBudget = async () => {
        try {
            await api.post("budget/delete", budget)
            .then((res) => {
            if (res.status == 200) {
               navigate(-1)
            } else {
            toast.warning("No se pudo eliminar el presupuesto");
            }  
            })
        } catch (err) {
        console.error(err.response?.data || err.message);
        }
    }

    const handlePrintBudget = async () => {
      await fillForm(budget)
    }

    const handleEditBudget = () => {
      setEditing(true)
    }

  if (editing) {
    return (
        <EditBudget previousRows={rows} budgetData={budget} />
    )
  }

  return (
    <div className="w-10/12 mx-auto p-5 pb-10 rounded-lg font-mukta shadow-custom-external-blur border-[1px] border-custom-gray text-black">
        <Table 
            rows={rows}
            total={total}
            totalSetter={setTotal}
            budgetData={budget}
        />
        <div>

        </div>
        <div className='flex justify-center p-[2rem] gap-[1.2rem] text-lg'>
            <button onClick={handleDeleteBudget} className='w-[6rem] btn-custom-confirm bg-yui-900 p-3'>Eliminar</button>
            <button onClick={handlePrintBudget} className='w-[6rem] btn-custom-confirm p-3'>Imprimir</button>
            <button onClick={handleEditBudget} className='w-[6rem] btn-custom-confirm p-3'>Editar</button>
        </div>
    </div>
  )
}

export default BudgetDetails