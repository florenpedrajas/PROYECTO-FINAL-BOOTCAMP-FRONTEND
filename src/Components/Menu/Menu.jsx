import React from 'react'
import ButtonLogout from '../ButtonLogout/ButtonLogout';
import NavlinkReutilizable from '../Navlink/Navlink'
import './Menu.scss';



const Menu = () => {
    return (
        <div>
            <div className='container-Dropdown'>
                <ul className='Dropdown'>
                    <li><NavlinkReutilizable nav='/users/register' type='linkNav' texto='Registrate'/></li>
                    <li><NavlinkReutilizable nav='/users/login' type='linkNav' texto='Login'/></li>
                    <li><NavlinkReutilizable nav='/users/createbooking' type='linkNav' texto='Alquila tu garage'/></li> 
                    <li><ButtonLogout /></li>
                    

                    
                </ul>
            </div>
        </div>
    )
}

export default Menu