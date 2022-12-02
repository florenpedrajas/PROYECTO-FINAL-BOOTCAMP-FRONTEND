import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import logo from './logo.svg';
import {getLocation} from "../src/redux/garaje/garaje.functions"
import './App.css';

function App() {
  
  const dispatch = useDispatch();

  
  
  useEffect(() => {
    console.log("estoy dentro");
    dispatch(getLocation());
  }, []);

  

  return (
    <div className="App">
      <h1>Hola</h1>
    </div>
  );
}

export default App;
