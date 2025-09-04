import React, { useRef } from 'react'
import { login } from '../utils/authUtils'
import { useNavigate } from 'react-router-dom'

const Login = ({ loginSetter, showLoggedIn }) => {
    const usernameInput = useRef(null)
    const passwordInput = useRef(null)
    const navigate = useNavigate();

    const handleLogin = async () => {

        const username = usernameInput.current.value
        const password = passwordInput.current.value
        
        console.log(login(username, password));
        
        if (await login(username, password)) {
            
        }
        navigate("/")

    }

  return (
    <div className='flex flex-col items-center w-[30rem] mx-auto mt-12 p-7 pb-10 bg-white shadow-custom-external-blur rounded-lg'>
        <h3 className='text-center mb-5 font-bold text-black text-3xl font-museo'>¡Bienvenido!</h3>
        <div className='flex flex-col w-3/4 mx-auto my-12'>
            <label className=' font-bold text-lg font-museo pb-2'>Cuenta</label>
            <input ref={usernameInput} type="text" className='rounded-lg py-1 px-2 shadow-custom-internal-blur' placeholder='tuemail@email.com'/>
        </div>
        <div className='flex flex-col w-3/4 mx-auto mb-12'>
            <label className='font-bold text-lg font-museo pb-2'>Contraseña</label>
            <input ref={passwordInput} type="password" className='rounded-lg py-1 px-2 shadow-custom-internal-blur' placeholder='********'/>
        </div>
        <div className='py-1 pb-3 hidden'>
            <p className='font-mukta font-black text-yui'>¡La cuenta o la contraseña no coindicen!</p>
        </div>
        <button onClick={handleLogin} className='mt-5 p-2 w-[10rem] bg-yui rounded-lg font-bold font-museo text-xl text-white hover:text-black hover:duration-150 cursor-pointer'>
            Ingresar
        </button>
    </div>
  )
}

export default Login