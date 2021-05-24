import React from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux';

import {ExitOrEntry} from './index';

function MainHeder() {
    const userName = useSelector(state => state.user.userName);
    
    return(
        <header className = "header">
            <div className = "header__body">
                <a className = "logo" alt = "Логотип"/>
                <ul className = "menu">
                    <li>
                        <NavLink exact 
                            activeStyle = {{color: "white", padding: "5px", backgroundColor: "rgb(28, 148, 64)", borderRadius: "10px", textDecoration: "none"}}
                            className = "menu__elemen" to = '/'
                        >
                        Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            activeStyle = {{color: "white", padding: "5px", backgroundColor: "rgb(28, 148, 64)", borderRadius: "10px", textDecoration: "none"}} 
                            className = "menu__elemen" to = '/Routes'
                        >
                        Маршруты
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            activeStyle = {{color: "white", padding: "5px", backgroundColor: "rgb(28, 148, 64)", borderRadius: "10px", textDecoration: "none"}} 
                            className = "menu__elemen" to = '/Blog'
                        >
                        Блог
                        </NavLink>
                    </li>
                    {
                        userName &&
                        <li>
                            <NavLink 
                                activeStyle = {{color: "white", padding: "5px", backgroundColor: "rgb(28, 148, 64)", borderRadius: "10px", textDecoration: "none"}} 
                                className = "menu__elemen" to = '/Profile'
                            >
                            Профиль
                            </NavLink>
                        </li>
                    }

                </ul>
                <ExitOrEntry userName = {userName}/>
            </div>
        </header>
    )
}

export default MainHeder;