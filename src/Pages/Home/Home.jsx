import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar 1/Navbar1';
import { getParkings } from '../../redux/Parkings/parkings.function';
import './Home.scss'
import BotonMapa from '../../Components/BotonMapa/BotonMapa';
import Footer from '../../Components/Footer/Footer';
const Home = () => {
  const dispatch = useDispatch([]);
  const { parkings, isLoading, error, parking } = useSelector(
    (state) => state.parkings
  );

  useEffect(() => {
    dispatch(getParkings('/'));
  }, []);

  return (
    <div  >
      <Navbar styles='navbar_input'/>
      <div className='body-home'>
      {console.log(parkings)}
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