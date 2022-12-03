import React, { useEffect, useContext } from 'react'
import "leaflet/dist/leaflet.css"
import IconLocation from './IconLocation'
import { useState } from 'react'

import { MapContainer, TileLayer, useMap, Marker, Popup  } from 'react-leaflet'


  function getPosition() {
    // Simple wrapper
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
    });
}

async function main() {
    var position = await getPosition();  // wait for getPosition to complete
    
    if (position) {
      return position.coords.longitude
     }
}
async function main2() {
  var position2 = await getPosition();  // wait for getPosition to complete
  
 if (position2) {
  return position2.coords.latitude
 }
  
}



let res = main()
let res2 = main2()

const Map = (latitude,longitude) => {
    const pos = [38.540149339442124, -0.10809151801191483]

    const [state,setState] = useState({
      longitude:0,
      latitude:0
    }
    )
    
    

    return (
    <>
    <MapContainer center={{lat:latitude, lng:longitude}} zoom={15} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={{lat:latitude, lng:longitude}}  icon={IconLocation}>
      
    </Marker>
  </MapContainer>,
    </>
  )
}

export default Map