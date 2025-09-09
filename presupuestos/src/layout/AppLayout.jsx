import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
        <Header pageTitle={"Presupuestos"}/>
        <Outlet />
    </>
  )
}

export default AppLayout