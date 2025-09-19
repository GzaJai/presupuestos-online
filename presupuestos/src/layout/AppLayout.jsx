import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'

const AppLayout = ({ userData }) => {
  return (
    <>
        <Header userData={userData} pageTitle={"Presupuestos"}/>
        <Outlet />
        <Toaster />
    </>
  )
}

export default AppLayout