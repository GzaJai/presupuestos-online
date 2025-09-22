import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'
import ModalProvider from '../components/modal/ModalProvider'

const AppLayout = ({ userData }) => {
  return (
    <>
        <Header userData={userData} pageTitle={"Presupuestos"}/>
        <ModalProvider>
          <Outlet />
        </ModalProvider>
        <Toaster />
    </>
  )
}

export default AppLayout