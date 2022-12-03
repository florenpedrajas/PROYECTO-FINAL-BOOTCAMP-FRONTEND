import React, { useEffect, useState ,createContext} from 'react'
import Map from "../Components/map/map"
import { Link } from 'react-router-dom'

const FormLogIn = () => {

  const [state,setState] = useState({
    longitude:54.8,
    latitude:45.6
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

  let long = state.longitude
  let lat = state.latitude

  return (
    
    <div>
    <h1>longitud{long}</h1>
    <h1>latitud{lat}</h1>
    {/* <Map long={long.toString()} lat={lat.toString()}/> */}
    <Link to={{
      pathname:"/map",
      }}
      state
      
    >See my location</Link>
    </div>
    
    
  )
}

export default FormLogIn