import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from 'react-router-dom';
import {getLocation} from "./redux/garaje/garaje.functions"
import './App.scss';
import Home from "./Pages/Home/Home";
import FormRent from "./Pages/FormRent";
import Map from "./Components/map/map";
import Login from "./Pages/LogIn/Login";
import Register from "./Pages/Register";
function App() {
  
  

  
  
  
  

  return (
    <div className="App">
      <Routes>
        <Route path=''  element={<Home/>}/>
        <Route path='/map'  element={<Map/>}/>
        <Route path='/users/login' element={<Login/>}/>
        <Route path='/users/createbooking' element={<FormRent/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="/users/register" element={<Register/>}/>

      </Routes>
    </div>
  );
}

export default App;
