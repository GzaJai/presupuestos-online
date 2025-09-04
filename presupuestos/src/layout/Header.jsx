import React from 'react'
import { logout } from '../utils/authUtils'
import { Navigate, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();

  const handleLogoutBtn = () =>{
      logout()
      navigate("/login")
  }


  return (
    <div className='flex mx-auto text-center bg-yui justify-between items-center mb-[2rem]'>
      <img src="../../public/isologo-bnw-removebg.png" className='w-auto h-[4rem] ml-[2rem]' alt="" />
      <div>
        <h1 className='text-white font-museo font-semibold text-3xl'>Presupuestos</h1>
      </div>
      <div>
      <svg  xmlns="http://www.w3.org/2000/svg"   
      fill="#FFFFFF" viewBox="0 0 24 24" className='w-[2.5rem] h-auto mr-[2rem]'>
      {/* <!--Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free--> */}
      <path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"></path>
      </svg>
        <i ></i>
      </div>
    </div>
  )
}

export default Header