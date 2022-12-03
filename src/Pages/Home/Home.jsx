import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar'
import { getParkings } from '../../redux/Parkings/parkings.function';
import './Home.scss'

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
      <Navbar/>
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
                      ? "card-caravana"
                      : park.size === "moto"
                      ? "card-moto"
                      : park.size === "furgoneta"
                      ? "card-furgoneta"
                      : park.size === "camion"
                      ? "card-camion"
                      : "card-turismo"
                  }
                  key={park._id}
                >
                  <h2>{park.adress}</h2>
                  <img src={park.image} alt={park.adress} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  )
}

export default Home