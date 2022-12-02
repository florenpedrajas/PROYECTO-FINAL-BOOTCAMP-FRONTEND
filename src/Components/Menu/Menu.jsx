import React from 'react'
import NavlinkReutilizable from '../Navlink/Navlink'

const Menu = () => {
    return (
        <div>
            <div>
                <ul>
                    <li><NavlinkReutilizable nav='/users/login' type='linkNav' texto='Login'/></li>
                    <li><NavlinkReutilizable nav='/users/logout' type='linkNav' texto='Registrate'/></li>
                    <li><NavlinkReutilizable nav='/users/logout' type='linkNav' texto='Alquila tu garage'/></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu