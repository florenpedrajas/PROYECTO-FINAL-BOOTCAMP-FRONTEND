import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar 1/Navbar1'
import { getUser } from '../../redux/auth/auth.funtion';
import './UserProfile.scss'

const UserProfile = () => {
    const dispatch = useDispatch([]);
    const { user, isLoading, error } = useSelector(
        (state) => state.auth
    );

    return (
        <>
            <Navbar styles='navbar_input--hidden'/>
            {isLoading && "Cargando las ofertas"}
            {error && "Error al cargar"}
            {user && <>
            <div className='UserProfile__Container'>
                <div className='Info__Container'>
                    <div className='PP__Container'>
                        <img src={user.photo} alt='Foto de Perfil' className='UserProfile_PP'/>
                    </div>
                    <div className='Pinfo_Container'>
                        <p>{user.firstName[0].toUpperCase()}{user.firstName.slice(1)}</p>
                        <p>{user.lastName[0].toUpperCase()}{user.lastName.slice(1)}</p>
                        <p>{user.birthdate}</p>
                        <p>{user.email}</p>
                    </div>
                </div>
                <div className='Bookings__Parkings__Container'>
                    <div className='Bookings__Container'>
                        {user.map((park) => {
                        return (
                            <p>{park.adress}</p>
                    )})}
                    </div>
                    <div className='Parkings__Container'>

                    </div>
                </div>
            </div>
            
            </> }
        </>
    )
}

export default UserProfile