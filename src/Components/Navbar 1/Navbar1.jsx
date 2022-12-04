import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { filterParkings } from "../../redux/Parkings/parkings.function"
import { NavLink } from 'react-router-dom'
import Menu from '../Menu/Menu';
import './Navbar.scss'

const Navbar = (styles) => {
    const dispatch = useDispatch();
/* por que hace falta onClick={() => setMenu(!menu)} */ 
    const navigate= useNavigate();
    const [menu, setMenu]= useState(false)

    const { parkings, isLoading, error } = useSelector(
        (state) => state.parkings
    );

    return (
        <>

            <div className='divNavbar'>
            <nav>
                <NavLink to="/" ><img src='./assets/valet_app_logo.png' alt='Logo Valet' onClick={() => navigate('')} className='imgNav'/></NavLink>
                <label> <input type='text' placeholder='Buscar Estacionamiento...' className={styles} onChange={(e) => dispatch(filterParkings(e, parkings))}></input></label>
                <div className='login'  onClick={() => setMenu(!menu)} >
                <img src='./assets/MenuHamburguesa.png' alt='Menu' className='Hamburguermenu'/>
                <img className='profile' src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" alt='Perfil Photo'></img>
                </div>
            </nav>
            </div>
            {menu === true &&
            <Menu/>}
        </>
    )
}

/* const filter = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const filtered = ALLPOKEMONS.filter((pokemon) => {
      const matchName = pokemon.name.toLowerCase().includes(inputValue);
      const matchId = pokemon.id === Number(inputValue);
  
      return matchName || matchId;
    });
  
    drawPokemon(filtered);
  };
  
  
  
  
  
  const addAllMyEventsListeners = () => {
      document.querySelector(".input-search").addEventListener("input", filter);
      
      
  }; */
  
export default Navbar