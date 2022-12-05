import React from "react";
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from "./Pages/Home/Home";
import FormRent from "./Pages/FormRent/FormRent";
import Map from "./Components/map/map";
import Login from "./Pages/LogIn/Login";
import Register from "./Pages/Registrarse/Register";
import UserProfile from "./Pages/UseProfile/UserProfile";
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
        <Route path="/user/userProfile" element={<UserProfile/>}/>
      </Routes>
    </div>
  );
}

export default App;
