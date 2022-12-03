import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from 'react-router-dom';
import {getLocation} from "./redux/garaje/garaje.functions"
import './App.scss';
import Home from "./Pages/Home/Home";
import FormRent from "./Pages/FormRent";
import Map from "./Components/map/map";
import FormLogIn from "./Pages/LogIn/FormLogIn";
function App() {
  
  

  
  
  
  

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
