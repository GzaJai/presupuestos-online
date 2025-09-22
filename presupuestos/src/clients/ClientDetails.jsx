import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { api } from '../utils/apiUtils';
import ClientInfoForm from './ClientInfoForm';
import { toast } from 'sonner';
import { useConfirmationModal } from '../components/modal/ModalProvider';

const ClientDetails = () => {
    const [editing, setEditing] = useState(false)
    const [editedClient, setEditedClient] = useState(null)

    const { showModal } = useConfirmationModal();

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

    const handleDeleteButton = () => {
        showModal({
            title: "Eliminar cliente",
            description: "¿Deseas eliminar este cliente? Esta acción no se puede deshacer.",
            onConfirm: handleDeleteClient
        })
    }
    
    const handleSaveEditedClient = async () => {
        if (editedClient == null) {
            toast.error("No hay cambios")
            return
        }
        try {
            const res = await api.put("client/edit/" + client.id, editedClient);
            if (res.status == 200) {    
                navigate(-1)
                toast.success("Cliente actualizado")
            }
        } catch (err) {
            toast.warning("No se pudo actualizar el cliente")
            console.error(err.response?.data || err.message);
        }
    }

    const handleEditClient = () => {
        setEditing(true)
    }

    if (editing) {
        return (
            <div className='mx-auto rounded w-[40rem] shadow-custom-external-blur'>
                <ClientInfoForm setData={setEditedClient} previousClientData={client} />
                <div className='flex mt-[2rem] justify-center gap-6'>
                    <button onClick={() => navigate(-1)} className='p-2 w-1/4 btn-custom-confirm bg-yui-900'>Cancelar</button>
                    <button onClick={handleSaveEditedClient} className='p-2 w-1/4 btn-custom-confirm'>Guardar</button>
                </div>
            </div>
        )
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
            <div className='flex mt-[2rem] justify-center gap-6'>
                <button onClick={handleDeleteButton} className='p-2 w-1/4 btn-custom-confirm bg-yui-900'>Eliminar</button>
                <button onClick={handleEditClient} className='p-2 w-1/4 btn-custom-confirm'>Editar</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ClientDetails