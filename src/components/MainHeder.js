import React from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector} from 'react-redux'

import {ExitOrEntry} from './index'

function MainHeder() {

    const user = useSelector(state => state.user.currentUser)
    
    return(
        <header className="header">
            <div className="header__body">
                <a className="logo" alt="Логотип"></a>
                <ul className="menu">
                    <li><NavLink exact activeStyle={{color: "white", padding: "5px", backgroundColor: "rgb(28, 148, 64)", borderRadius: "10px"}} className="menu__elemen" to='/'>Главная</NavLink></li>
                    <li><NavLink activeStyle={{color: "white", padding: "5px", backgroundColor: "rgb(28, 148, 64)", borderRadius: "10px"}} className="menu__elemen" to='/Routes'>Маршруты</NavLink></li>
                    <li><NavLink activeStyle={{color: "white", padding: "5px", backgroundColor: "rgb(28, 148, 64)", borderRadius: "10px"}} className="menu__elemen" to='/Blog'>Блог</NavLink></li>
                    {user &&<li><NavLink activeStyle={{color: "white", padding: "5px", backgroundColor: "rgb(28, 148, 64)", borderRadius: "10px"}} className="menu__elemen" to='/Profile'>Профиль</NavLink></li>}
                </ul>
                <ExitOrEntry user={user}/>
            </div>
        </header>
    )
}

export default MainHeder;