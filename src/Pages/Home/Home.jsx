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

const Home = () => {
  const [showdates, setShowdates] = useState(false)
  const dispatch = useDispatch([]);
  const { parkings, isLoading, error, parking } = useSelector(
    (state) => state.parkings
  );
  
  const {user, token} = useSelector((state) => state.auth)


  useEffect(() => {
    dispatch(getParkings('/'));
  }, []);

  const mostrarAlerta = () => {
    Swal.fire("Gracias por tu reserva!")
    dispatch(userEdit2())
  }
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };




  return (
    
    
    <div className={darkMode ? "darkMode" : ""}>
    <button onClick={toggleMode}>Toggle Mode</button>
    <Navbar styles="navbar_input" darkMode={darkMode} />
      <div className='body-home'>
      {console.log(parkings)}
    

      


        <div>
          <button className='buttonShow' onClick={() =>setShowdates(!showdates)}>
        
            {
              showdates ? "Cerrar" : "Elige tus dias"
            }
          </button>
          {
            showdates &&   <DatePicker/>
        }
        </div>     
      

      <div className="parkings">
          {isLoading && "Cargando las ofertas"}
          {error && "Error al cargar"}
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
                    <button onClick={() => mostrarAlerta()} >Reserva</button>
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
                    <button onClick={() => mostrarAlerta()} >Reserva</button>
                  </div>
                  }
                  
                </div>
              );
            })}
            
        </div>
        <BotonMapa/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default Home