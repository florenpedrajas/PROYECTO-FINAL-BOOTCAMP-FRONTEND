import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from 'react-router-dom';
import {getLocation} from "./redux/garaje/garaje.functions"
import './App.scss';
import Home from "./Pages/Home/Home";
import FormRent from "./Pages/FormRent";
import FormLogIn from "./Pages/FormLogIn";

function App() {
  
  const dispatch = useDispatch();

  
  
  useEffect(() => {
    /* console.log("estoy dentro"); */
    /* dispatch(getLocation()); */
  }, []);

  

  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/usuario/login' element={<FormLogIn/>}/>
        <Route path='/usuario/createbooking' element={<FormRent/>}/>
      </Routes>
    </div>
  );
}

export default App;
