import { useState } from "react";

const NavMenu = ({ logoutHandler }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
        <svg  xmlns="http://www.w3.org/2000/svg" onClick={() => setOpen(true)}
          fill="#FFFFFF" viewBox="0 0 24 24" className='w-[2.5rem] h-auto mr-[2rem] hover:cursor-pointer'>
          {/* <!--Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free--> */}
          <path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"></path>
        </svg>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">Menu</h2>
          <svg  xmlns="http://www.w3.org/2000/svg" width="512" height="512" onClick={() => setOpen(false)}
            fill="#FF3838" viewBox="0 0 24 24" className='w-[2.5rem] h-auto mr-[2rem] hover:cursor-pointer'>
            {/* <!--Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free--> */}
            <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
        </svg>
        </div>
        <ul className="p-4 space-y-4">
          <li><a href="/" className="text-custom-darkgray">Inicio</a></li>
          <li><a href="/profile" className="text-custom-darkgray">Profile</a></li>
          <li className="mt-[10rem]"><p onClick={() => logoutHandler()} className="text-yui hover:cursor-pointer">Cerrar Sesión</p></li>
        </ul>
      </div>
    </div>
  );
}

export default NavMenu