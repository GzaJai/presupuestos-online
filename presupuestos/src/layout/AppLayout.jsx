import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const AppLayout = ({ userData }) => {
  return (
    <>
        <Header userData={userData} pageTitle={"Presupuestos"}/>
        <Outlet />
    </>
  )
}

export default AppLayout