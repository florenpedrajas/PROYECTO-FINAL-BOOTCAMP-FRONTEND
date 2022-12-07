import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar 1/Navbar1";
import { getParkings } from "../../redux/Parkings/parkings.function";
import BotonMapa from "../../Components/BotonMapa/BotonMapa";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import Swal from "sweetalert2";
import { postNewBooking } from "../../redux/newBooking/newBooking.functions";
import "./Home.scss";

const Home = () => {
    const dispatch = useDispatch([]);
    const { parkings, filtered, isLoading, isSearching } = useSelector((state) => state.parkings);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getParkings());
    }, [dispatch]);

    useEffect(() => {}, [filtered, isSearching]);

    const postBooking = (park) => {
        Swal.fire("Gracias por tu reserva!");
        dispatch(postNewBooking(park));
    };
    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        setDarkMode(!darkMode);
    };

    const renderParkings = (elements) => {
        return (
            <div className="parkings">
                {elements.map((park) => (
                    <div key={park._id} className={`card ${park.type}`}>
                        <img src={park.image} alt={park.adress} />
                        <p className="park-adress">{park.adress}</p>
                        <p className="park-price">Cuota por noche: {park.price}€</p>
                        <p className="park-size">Tamaño apto para {park.size}</p>
                        <div className={!park.busy ? "park-libre" : "park-ocupado"}>
                            <p id="park-p">Disponibilidad Actual:</p>
                            {!park.busy ? "DISPONIBLE" : "OCUPADO"}
                        </div>
                        {user && (
                            <div className="button">
                                <button onClick={() => postBooking(park)}>Reserva</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className={darkMode ? "darkMode" : ""}>
            <Navbar styles="navbar_input dark" darkMode={darkMode} />
            <div className="body-home">
                <button className="toggle" onClick={toggleMode}>
                    Toggle Mode
                </button>

                {isLoading && <div>Cargando las ofertas</div>}

                {isSearching && !filtered.length && <div>No se encuentran resultados</div>}
                {isSearching && filtered.length > 0 && renderParkings(filtered)}
                {!isSearching && renderParkings(parkings)}
                <BotonMapa />
                <Footer darkMode={darkMode} />
            </div>
        </div>
    );
};

export default Home;
