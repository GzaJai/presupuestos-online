import React, { useState, useEffect, useRef } from 'react'
import { api } from '../utils/apiUtils'

const SelectClientForm = ({ setClientData }) => {
    const [loading, setLoading] = useState(true)
    const [clients, setClients] = useState([])
    const [selectedClient, setSelectedClient] = useState()
    const selectRef = useRef(null)

    useEffect(() => {
        if (clients.length == 0) {
            setClients(getClients())
        }
    }, [])
    
    const getClients = async () => {
        try {
            const res = await api.get("client/list");
            setLoading(false)
            setClients(res.data)
        } catch (err) {
            console.error(err.response?.data || err.message);
        }
    }

    const handleOnChange = () => {
        setSelectedClient(clients[selectRef.current.value])        
        setClientData(clients[selectRef.current.value].id)
    }

  return (
    <div className='flex flex-col p-[1rem] '>
        <h4 className='w-full p-2 mb-[2rem] text-xl font-bold font-mukta'>Selecciona el cliente: </h4>
        <select ref={selectRef} onChange={handleOnChange} className='w-1/2 mx-auto p-2 rounded border-[1px] border-custom-gray'>
            {!loading &&
                clients.map((client, i) => (
                    <option key={client.id} value={i}>
                        {client.name} - {client.cuit}
                    </option>
                ))
            }
        </select>
        {selectedClient && 
            <div className='w-[15rem] mx-auto mt-[2rem] p-[1rem]'>
                <p className='text-center font-semibold mb-3'>Datos del cliente</p>
                <div className='flex justify-between'>
                    <p>Nombre:</p>
                    <p> {selectedClient.name}</p>
                </div>
                <div className='flex justify-between'>
                    <p>CUIT:</p>
                    <p>{selectedClient.cuit}</p>
                </div>
                <div className='flex justify-between'>
                    <p>DNI:</p>
                    <p>{selectedClient.dni}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Domicilio:</p>
                    <p>{selectedClient.address}</p>
                </div>
            </div>
            
        }
    </div>
  )
}

export default SelectClientForm