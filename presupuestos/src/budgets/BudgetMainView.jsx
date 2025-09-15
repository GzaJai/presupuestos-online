import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { api, getClientNameById } from '../utils/apiUtils'
import Loading from '../components/Loading'
import BudgetCard from './BudgetCard'

const BudgetMainView = () => {
    const [budgets, setBudgets] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        if (budgets.length == 0) {
            getBudgets();
        }
    }, [])
    
    const getBudgets = async () => {
        try {
            const res = await api.get("budget/all");
            setLoading(false)
            const data = res.data
            setBudgets(data)
        } catch (err) {
            console.error(err.response?.data || err.message);
        }
    }

    if (loading) return <Loading />

  return (
    <div className='font-mukta flex flex-col'>
        <h4 className='text-center text-2xl font-black'>MIS PRESUPUESTOS</h4>
        <Link to={"/new-budget"} className="my-[1rem] mx-auto p-2 w-[14rem] text-white text-center font-medium bg-yui-900 rounded" >Nuevo presupuesto</Link>
        <div className='p-4 space-y-4'>
            <div className='flex justify-between rounded-lg max-w-[50rem] mx-auto p-4 px-[4rem] bg-white font-mukta font-bold text-lg'>
                <p>N°</p>
                <p>Cliente</p>
                <p>Fecha</p>
                <p>Monto</p>
            </div>
            {!loading &&
                budgets.map((budget) => (
                    <BudgetCard key={budget.id} budget={budget}/>
                    )
                )
            }
        </div>
    </div>
  )
}

export default BudgetMainView