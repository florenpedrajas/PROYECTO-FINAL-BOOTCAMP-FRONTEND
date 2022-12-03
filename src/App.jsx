import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from 'react-router-dom';
import {getLocation} from "./redux/garaje/garaje.functions"
import './App.scss';
import Home from "./Pages/Home";
import FormRent from "./Pages/FormRent";
import FormLogIn from "./Pages/FormLogIn";
import Map from "./Components/map/map";
function App() {
  
  const dispatch = useDispatch();

  
  
  useEffect(() => {
    /* console.log("estoy dentro"); */
    /* dispatch(getLocation()); */
  }, []);

  

  return (
    <div className="App">
      <Routes>
        <Route path=''  element={<Home/>}/>
        <Route path='/map'  element={<Map/>}/>
        <Route path='/users/login' element={<FormLogIn/>}/>
        <Route path='/users/createbooking' element={<FormRent/>}/>
      </Routes>
    </div>
  );
}

export default App;
