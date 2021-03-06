import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from 'react-redux';

import { logout } from '../action/user';

function ExitOrEntry({userName}) {
    const dispatch = useDispatch();

    if(userName){
        return(
            <div className = "exit-entry">
               <b className = "exit-entry__name">{userName}</b>
               <Link to = "/Authorization" className = "exit-entry__btn" onClick = {() => dispatch(logout())}>Выход</Link>
            </div>
        )
    }
    return(
        <div className = "exit-entry">
            <Link to = "/Authorization" className = "exit-entry__btn">Вход</Link>
            <Link to = "/Registration" className = "exit-entry__btn">Регистрация</Link>
        </div>
    )
}

export default ExitOrEntry;