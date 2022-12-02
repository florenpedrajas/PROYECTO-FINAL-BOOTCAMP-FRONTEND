import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getLocation} from "./redux/garaje/garaje.functions"
import './App.scss';

function App() {
  
  const dispatch = useDispatch();

  
  
  useEffect(() => {
    console.log("estoy dentro");
    /* dispatch(getLocation()); */
  }, []);

  

  return (
    <div className="App">
      <h1>Hola</h1>
    </div>
  );
}

export default App;
