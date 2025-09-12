import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { api } from '../utils/apiUtils';

const ClientDetails = () => {
    const location = useLocation();
    const client = location.state?.client;
    const navigate = useNavigate();

    const handleDeleteClient = async () => {
        try {
            const res = await api.post("client/remove", {id: client.id});
            if (res.data.statusCodeValue == 200) {
                navigate(-1)
            }
        } catch (err) {
      console.error(err.response?.data || err.message);
        }
    }

  return (
    <div className="p-4 space-y-4">
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
        <button onClick={handleDeleteClient} className='p-2 w-1/3 mt-[2rem] mx-auto rounded bg-yui-900 text-white font-bold cursor-pointer'>Eliminar cliente</button>
            </div>
        </div>
    </div>
  )
}

export default ClientDetails