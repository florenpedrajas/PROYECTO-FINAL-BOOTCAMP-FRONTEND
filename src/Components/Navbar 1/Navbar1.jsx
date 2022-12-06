import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { filterParkings } from "../../redux/Parkings/parkings.function"
import { NavLink } from 'react-router-dom'
import Menu from '../Menu/Menu';
import './Navbar.scss'

const Navbar = ({ styles, darkMode }) => {
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const [menu, setMenu]= useState(false)

    const { parkings, isLoading, error } = useSelector(
        (state) => state.parkings
    );

    return (
        <>

            <div className='divNavbar'>
            <nav>
                <NavLink to="/" ><img src='../assets/valet_app_logo.png' alt='Logo Valet' onClick={() => navigate('')} className={darkMode ? "darkImgNav" : "imgNav"}
/></NavLink>
                <label> <input type='text' placeholder='Buscar Estacionamiento...' className={styles} onChange={(e) => dispatch(filterParkings(e, parkings))}></input></label>
                <div className='login'  onClick={() => setMenu(!menu)} >
                <img src='../assets/MenuHamburguesa.png' alt='Menu' className={darkMode ? "darkImgNav" : "imgNav"}
/>
                <img className='profile' src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" alt='Profile'></img>
                </div>
            </nav>
            </div>
            {menu === true &&
            <Menu/>}
        </>
    )
}

  
export default Navbar