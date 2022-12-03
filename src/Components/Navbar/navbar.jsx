import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Menu from '../Menu/Menu';
import './Navbar.scss'

const Navbar = () => {

    const navigate= useNavigate();
    const [menu, setMenu]= useState(false)

    return (
        <>
            
            <div className='divNavbar'>
            <nav>
                <img src='./assets/valet_app_logo.png' alt='Logo Valet' onClick={() => navigate('')} className='imgNav'/>
                <label>Buscar: <input type='text' placeholder='Buscar Estacionamiento...' className='navbar_input'></input></label>
                <img src='./assets/MenuHamburguesa.png' alt='Menu' className='Hamburguermenu' onClick={(e) => setMenu(!menu)}/>
            </nav>
            </div>
            {menu === true &&
            <Menu/>}
        </>
    )
}

export default Navbar