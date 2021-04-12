import React from 'react';
import {useSelector} from 'react-redux'
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

import {MainHeder, MainFooter, MyMap} from '../components';

function ProfilePage() {

    const user = useSelector(state => state.user.currentUser)

    return(
        <>
            <MainHeder/>
            <div className = "profile">
                <div className = "profile__body">
                    <div className = "user-info">
                        <AccountCircleSharpIcon className = "user-info__icon" style = {{ fontSize: 100 }}/>
                        <p className = "user-info__text">Login: {user.login}</p>
                        <p className = "user-info__text">Email: {user.email}</p>
                        <p className = "user-info__text">Кол-во моих маршрутов: {user.routes}</p>
                        <p className = "user-info__text">Кол-во пройденых маршрутов: {user.completed }</p>
                    </div>
                    <div className = "my-routes">
                        <h3 className = "my-routes__title">Мои маршруты</h3>
                        <MyMap />
                    </div>
                </div>
            </div>
            <MainFooter/>
        </>
    )
}

export default ProfilePage;