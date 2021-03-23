import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function SecondHeader() {
    return(
        <header className="header-second">
            <div className="header-second__body">
                    <Link className="header-second__logo" to='/'></Link>
                    <ul>
                        <li><NavLink className="header-second__elemen" activeStyle={{color: "forestgreen"}} to='/Authorization'>Вход</NavLink></li>
                        <li><NavLink className="header-second__elemen" activeStyle={{color: "forestgreen"}} to='/Registration'>Регистрация</NavLink></li>
                    </ul>
            </div>
        </header>
    )
}

export default SecondHeader;