import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar 1/Navbar1';
import { getParkings } from '../../redux/Parkings/parkings.function';
import './Home.scss'
import BotonMapa from '../../Components/BotonMapa/BotonMapa';
import Footer from '../../Components/Footer/Footer';
import DatePicker from '../../Components/DatePiker/DatePicker';
import { useState } from 'react';
import { userEdit2 } from '../../redux/auth/auth.funtion';
import Swal from "sweetalert2"
import { postNewBooking } from '../../redux/newBooking/newBooking.functions';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate()
  const [showdates, setShowdates] = useState(false)
  const dispatch = useDispatch([]);
  const { parkings, isLoading, error, parking } = useSelector(
    (state) => state.parkings
  );
  
  const {user, token} = useSelector((state) => state.auth)

  const {bookings} = useSelector((state) => state.booking)

  useEffect(() => {
    dispatch(getParkings('/'));
  }, []);

  const postBooking = (park) => {
    console.log(park);
    Swal.fire("Gracias por tu reserva!")
    dispatch(postNewBooking(park, bookings))
  }
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };




  return (
    
    
    <div className={darkMode ? "darkMode" : ""}>
    
    <Navbar styles="navbar_input dark" darkMode={darkMode} />ç
    
      <div className='body-home'>
      {console.log(parkings)}
      <button className='toggle' onClick={toggleMode}>Toggle Mode</button>
      

      <div className="parkings">
          {isLoading && "Cargando las ofertas"}
          {/* {error && "Error al cargar"} */}
          {parking[0] === 'true' &&
            parkings.map((park) => {
              return (
                <div
                  className={
                    
                    park.size === "caravana"
                      ? "card caravana"
                      : park.size === "moto"
                      ? "card moto"
                      : park.size === "furgoneta"
                      ? "card furgoneta"
                      : park.size === "camion"
                      ? "card camion"
                      : "card turismo"
                  }
                  key={park._id}
                >
                  
                  <img src={park.image} alt={park.adress} />
                  <p className='park-adress' >{park.adress}</p>
                  <p className='park-price'>Cuota por noche: {park.price}€</p>
                  <p className='park-size'>Tamaño apto para {park.size}</p>
                  <p className={
                    park.busy === false
                    ? "park-libre"
                    : "park-ocupado"
                  }><p id='park-p'>Disponibilidad Actual:</p>{park.busy === false
                  ? "DISPONIBLE"
                  : "OCUPADO"}</p>
                  { user && <div className='button' >
                    <button onClick={() => postBooking(park)} >Reserva</button>
                  </div>
                  }
                  
                </div>
              );
            })}
            {parking &&
            parking.map((park) => {
              return (
                <div

                  className={
                    park.size === "caravana"
                      ? "card caravana"
                      : park.size === "moto"
                      ? "card moto"
                      : park.size === "furgoneta"
                      ? "card furgoneta"
                      : park.size === "camion"
                      ? "card camion"
                      : "card turismo"
                  }
                  key={park._id}
                >
                  
                  <img src={park.image} alt={park.adress} />
                  
                  <p>{park.adress}</p>
                  <p className='park-price'>Cuota por noche: {park.price}€</p>
                  <p className='park-size'>Tamaño apto para {park.size}</p>
                  <p className={
                    park.busy === false
                    ? "park-libre"
                    : "park-ocupado"
                  }><p id='park-p'>Disponibilidad Actual:</p>{park.busy === false
                  ? "DISPONIBLE"
                  : "OCUPADO"}</p>
                  { user && <div className='button' >
                    <button onClick={() => postBooking(park, bookings)} >Reserva</button>
                  </div>
                  }
                  
                </div>
              );
            })}
            
        </div>
        <BotonMapa/>
        <Footer  darkMode={darkMode}/>
      </div>
      
    </div>
  )
}

export default Home