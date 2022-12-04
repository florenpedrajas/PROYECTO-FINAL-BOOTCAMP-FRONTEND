import React from 'react'
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postNewParking } from '../redux/newParking/newParking.functions';
const FormRent = () => {

  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const envioFormulario = (datosFormulario) => {

    const formData = new FormData();
    formData.append("adress", datosFormulario.adress);
    formData.append("price", datosFormulario.price);
    
    formData.append("imagen", datosFormulario.imagen[0]);
    dispatch(postNewParking(formData,navigate))
    console.log(datosFormulario);
  };


 


  return (
    <form onSubmit={handleSubmit(envioFormulario)}>
    <label>
      Adress
      <input type="text" {...register("adress", { required: true })} />
    </label>
    <label>
      Price
      <input
        type="text"
        {...register("price", {
          required: true,
         
        })}
      />
    </label>
    <label>
      Image
      <input type="file" {...register("imagen", { required: false })} />
    </label>
    
    <button>Enviar</button>
  </form>
  )
}

export default FormRent;

