import React, { useEffect, useContext } from 'react'
import "leaflet/dist/leaflet.css"
import IconLocation from './IconLocation'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

import { MapContainer, TileLayer, useMap, Marker, Popup  } from 'react-leaflet'



const Map = (prop) => {
    

  const [state,setState] = useState({
    longitude:"",
    latitude:""
  }
  )

  
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      function(position){
        console.log(position);
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        })
      }
    )
  },[])

const pos = [40.458384213400386, -3.694974886507998]

    return (
    <>
    <Navbar/>
    {state.longitude && state.latitude &&(
      <div>
      
     
      
    <MapContainer center={{lat:state.latitude, lng:state.longitude}} zoom={15} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={{lat:state.latitude, lng:state.longitude}}  icon={IconLocation}>
      
    </Marker>
  </MapContainer>,
  </div>)}

    
    </>
  )
}

export default Map