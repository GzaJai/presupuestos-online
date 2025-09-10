import React, { useState, useEffect } from 'react'
import { api } from '../utils/apiUtils'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

const ListClients = () => {
    const [clients, setClients] = useState([])
    const [loading, setLoading] = useState(true)
    
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

  if (loading) return <Loading />

  return (
    <div className='font-mukta flex flex-col'>
        <h4 className='text-center text-2xl font-black'>MIS CLIENTES</h4>
        <Link to={"/new-client"} className="my-[1rem] mx-auto p-2 w-[14rem] text-white text-center font-medium bg-yui-900 rounded" >Agregar nuevo cliente</Link>

        <div className="p-4 space-y-4">
            {!loading &&
            clients.map((client) => (
            <div
                key={client.id}
                className="border rounded-lg max-w-[50rem] mx-auto p-4 px-[4rem] shadow-custom-external-blur bg-white"
            >
                <h2 className="text-lg text-center font-bold mb-2">{client.name}</h2>
                <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <strong>DNI:</strong>
                    <p>{client.dni}</p>
                </div>
                <div className="flex justify-between">
                    <strong>CUIT:</strong>
                    <p>{client.cuit}</p>
                </div>
                <div className="flex justify-between">
                    <strong>Domicilio:</strong>
                    <p>{client.address}</p>
                </div>
                <div className="flex justify-between">
                    <strong>Categoría:</strong>
                    <p>{client.category}</p>
                </div>
                <div className="flex justify-between">
                    <strong>Teléfono:</strong>
                    <p>{client.phone}</p>
                </div>
                <div className="flex justify-between">
                    <strong>Email:</strong>
                    <p>{client.email}</p>
                </div>
                </div>
            </div>
            ))
            }
            </div>
        </div>
  )
}

export default ListClients