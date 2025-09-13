import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { api, formatBudgetItem } from '../utils/apiUtils';
import Table from '../components/Table';

const BudgetDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [rows, setRows] = useState([])
    const [total, setTotal] = useState()
    const budget = location.state?.budget;

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
            toast.warning("No se pudo crear el presupuesto");
            }  
            })
        } catch (err) {
        console.error(err.response?.data || err.message);
        }
    }

  return (
    <div className="w-10/12 mx-auto p-5 pb-10 rounded-lg font-mukta shadow-custom-external-blur border-[1px] border-custom-gray text-black">
        <Table 
            rows={rows}
            total={total}
            totalSetter={setTotal}
            budgetData={budget}
        />
        <div className='flex justify-center p-[2rem]'>
            <button onClick={handleDeleteBudget} className='btn-custom-confirm bg-yui-900 p-2'>Eliminar presupuesto</button>

        </div>
    </div>
  )
}

export default BudgetDetails