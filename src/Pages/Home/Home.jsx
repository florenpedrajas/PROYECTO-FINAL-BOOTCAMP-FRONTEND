import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar1 from '../../Components/Navbar 1/Navbar1';
import { getParkings } from '../../redux/Parkings/parkings.function';
import './Home.scss'
import BotonMapa from '../../Components/BotonMapa/BotonMapa';
const Home = () => {
  const dispatch = useDispatch([]);
  const { parkings, isLoading, error } = useSelector(
    (state) => state.parkings
  );

  useEffect(() => {
    dispatch(getParkings('/'));
  }, []);

  return (
    <div>
      <Navbar1 styles='navbar_input'/>
      <div className='body-home'>
      {console.log(parkings)}
      <div className="parkings">
          {isLoading && "Cargando las ofertas"}
          {error && "Error al cargar"}
          {parkings &&
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
      </div>
      
    </div>
  )
}

export default Home