import React from 'react'
import { logout } from '../utils/apiUtils'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import NavMenu from './NavMenu';

const Header = ({ pageTitle }) => {
  const navigate = useNavigate();
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const handleLogoutBtn = () => {
    logout()
    navigate("/login")
  }

  const handleOpenNavMenu = () => {
    setNavMenuOpen(!navMenuOpen)
  }

  return (
    <div className='flex mx-auto text-center bg-yui-900 justify-between items-center mb-[2rem]'>
      <img src="../../public/isologo-bnw-removebg.png" className='w-auto h-[4rem] ml-[2rem] hover:cursor-pointer' alt="YUI ONE logo" onClick={() => navigate("/")} />
      <div>
        <h1 className='text-white font-museo font-semibold text-3xl'>{ pageTitle }</h1>
      </div>
      <div>
        <div className='px-[1rem]'>
          <NavMenu logoutHandler={handleLogoutBtn} />
        </div>
        <i ></i>
      </div>
    </div>
  )
}

export default Header