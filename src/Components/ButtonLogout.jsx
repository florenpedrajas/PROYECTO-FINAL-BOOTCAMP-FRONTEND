import React from "react"
import { useNavigate } from "react-router-dom";


const ButtonLogout = () => {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("token");
        navigate ("/login")
   
    }
  return (
    <button onClick={logOut}>Log Out</button>
  )
}

export default ButtonLogout