import React from 'react'

const Register = () => {
  return (
    <div className='flex mt-4 justify-center gap-[6rem]'>
        <div className='flex flex-col items-center w-[25rem] p-7 pb-10 bg-white shadow-custom-external-blur rounded-lg'>
            <h3 className='text-center mb-5 font-bold text-black text-3xl font-museo'>Crea tu cuenta</h3>
            <div className='flex flex-col w-3/4 mx-auto my-12'>
                <label className=' font-bold text-lg font-museo pb-2'>Nombre</label>
                <input type="text" className='rounded-lg py-1 px-2 shadow-custom-internal-blur' placeholder='Juan Diaz'/>
            </div>
            <div className='flex flex-col w-3/4 mx-auto mb-12'>
                <label className='font-bold text-lg font-museo pb-2'>Email</label>
                <input type="text" className='rounded-lg py-1 px-2 shadow-custom-internal-blur' placeholder='juandiaz@mail.com'/>
            </div>
            <div className='py-1 pb-3 hidden'>
                <p className='font-mukta font-black text-yui'>¡La cuenta o la contraseña no coindicen!</p>
            </div>
            <button className='mt-5 p-2 w-[10rem] bg-yui rounded-lg font-bold font-museo text-xl text-white hover:text-black hover:duration-150 cursor-pointer'>
                Ingresar
            </button>
        </div>
        <div className='flex flex-col items-center w-[25rem] p-7 pb-10 bg-white shadow-custom-external-blur rounded-lg border-yui border-[.4rem] justify-center gap-[4rem]'>
            <p>
                Con <span className='font-museo font-semibold'>YUI ONE</span> podés simplificar todo en un solo lugar. Es una plataforma pensada para dueños de negocios como vos, que buscan ordenar su gestión sin complicaciones. Más simple, más claro y con la tranquilidad de tener todo bajo control.
            </p>
            <p>
                👉 Registrate hoy y empezá a gestionar tu negocio de una manera más organizada y eficiente.
            </p>
        </div>
    </div>
  )
}

export default Register