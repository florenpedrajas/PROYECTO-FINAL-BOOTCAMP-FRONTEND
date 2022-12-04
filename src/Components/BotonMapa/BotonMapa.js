import React from 'react'
import { useNavigate } from "react-router-dom";
import "./BotonMapa.scss"
const BotonMapa = () => {
    const navigate= useNavigate();
  return (
    <button className='buttonMapa'  onClick={() => navigate('/map')} >Mostrar Mapa</button>
  )
}

export default BotonMapa