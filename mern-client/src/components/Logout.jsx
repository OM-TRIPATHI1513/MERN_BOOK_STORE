import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import {
    Link, useLocation, useNavigate
  } from "react-router-dom";

const Logout = () => {

    const location = useLocation();
    const navigate = useNavigate();
  
    const from = location.state?.from?.pathname  || "/";


    const {logOut}  = useContext(AuthContext);
    const handleLogout = () => {
       logOut().then(() => {
        // Sign-out successful.
        alert("Log-out successful");
        navigate(from, {replace: true});
      }).catch((error) => {
        // An error happened.
      });
    }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
      <button className='bg-red-700 text-white px-8 py-2 rounded' onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Logout
