import React, { useState } from 'react'
import ClientInfoForm from './ClientInfoForm'
import { api } from '../utils/apiUtils'
import { toast, Toaster } from 'sonner'

const NewClient = () => {
  const [clientData, setClientData] = useState()

  const handleNewClient = async () => {
    try {
      const res = await api.post("client/add", clientData);
      if (res.data.statusCodeValue == 200) {
        toast.success("Cliente agregado exitosamente")
      } else if (res.data.statusCodeValue == 409) {
        toast.warning("El cliente ya esta registrado")
      }

      
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  }

  return (
    <div className='mx-auto rounded w-[40rem] shadow-custom-external-blur'>
      <ClientInfoForm setData={setClientData} />
      <div className='w-full flex flex-col items-center'>
        <button onClick={handleNewClient} className='btn-custom-confirm p-2'>Agregar cliente</button>
      </div>
      <Toaster />
    </div>

  )
}

export default NewClient