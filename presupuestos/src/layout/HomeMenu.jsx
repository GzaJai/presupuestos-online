import React from 'react'
import { Link } from 'react-router-dom'
import { getBudget } from '../utils/apiUtils'

const HomeMenu = () => {
  return (
    <div className='w-[30rem] h-[20rem] p-[2rem] mx-auto shadow-custom-external-blur text-center rounded'>
        <h4 className='font-museo font-medium text-2xl'>¡Bienvenido!</h4>
        <nav className="flex flex-col p-4 mt-5 space-y-4 items-center justify-center">
          <Link to="/budgets" className="flex items-center justify-center w-2/3 h-[2rem] text-white font-medium bg-yui-900 rounded">Presupuestos</Link>
          <Link to="/clients" className="flex items-center justify-center w-2/3 h-[2rem] text-white font-medium bg-yui-900 rounded">Clientes</Link>
        </nav>
    </div>
  )
}

export default HomeMenu