import React from "react";
import { logout } from "../utils/apiUtils";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavMenu from "./NavMenu";

const Header = ({ pageTitle, userData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  

  const handleLogoutBtn = () => {
    logout();
    navigate("/login");
  };

  const handlePrevPage = () => {
    navigate(-1);
  };

  return (
    <div className="flex mx-auto text-center bg-yui-900 justify-between items-center mb-[2rem]">
      <div className="flex items-center gap-[4rem]">
      <img
        src="../../public/isologo-bnw-removebg.png"
        className="w-auto h-[4rem] ml-[2rem] hover:cursor-pointer"
        alt="YUI ONE logo"
        onClick={() => navigate("/")}
      />
        <h1 className="text-white font-museo font-semibold text-3xl">
          {pageTitle}
        </h1>
      </div>
      <div className="flex items-center gap-[2rem]">
        <p className="text-white font-mukta font-semibold text-lg">
          {userData.name} {userData.lastname}
        </p>
        <div className="px-[1rem]">
          <NavMenu logoutHandler={handleLogoutBtn} />
        </div>
        {location.pathname != "/" &&
          <button
          className="absolute top-20 left-4 bg-yui-600 text-white p-1 rounded shadow"
          onClick={handlePrevPage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              fill="#FFFFFF"
              viewBox="0 0 24 24"
              >
              {/* <!--Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free--> */}
              <path d="M14.29 6.29 8.59 12l5.7 5.71 1.42-1.42-4.3-4.29 4.3-4.29z"></path>
            </svg>
          </button>
        }
      </div>
    </div>
  );
};

export default Header;
