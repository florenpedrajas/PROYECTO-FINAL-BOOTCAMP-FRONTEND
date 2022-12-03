import React, { useEffect, useState ,createContext} from 'react'
import Map from "../../Components/map/map"
import './Map.scss'

const MapPage = () => {

  const [state,setState] = useState({
    longitude:0,
    latitude:0
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

  

  return (
    
    <div>
    <h1>longitud{state.longitude}</h1>
    <h1>latitud{state.latitude}</h1>
    <Map latitude={state.latitude} longitud={state.longitude}/>
    {/* <Link to={{
      pathname:"/map",
      state
      }}> 
      See my location
    </Link> */}
    </div>
    
    
  )
}

export default MapPage