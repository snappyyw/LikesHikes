import React from 'react';
import {useSelector} from 'react-redux'
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

import {MainHeder, MainFooter, MyMap} from '../components';

function ProfilePage() {

    const user = useSelector(state => state.user.currentUser)

    return(
        <>
            <MainHeder/>
            <div className="profile">
                <div className="profile__body">
                    <div className="user-info">
                        <AccountCircleSharpIcon className="user-info__icon" style={{ fontSize: 100 }}/>
                        <p className="user-info__text">Login: {user.login}</p>
                        <p className="user-info__text">Email: {user.email}</p>
                        <p className="user-info__text">Кол-во моих маршрутов: {user.routes}</p>
                        <p className="user-info__text">Кол-во пройденых маршрутов: {user.completed }</p>
                    </div>
                    <div className="my-routes">
                        <h3 className="my-routes__title">Мои маршруты</h3>
                        <MyMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,place&key=AIzaSyAEWP0jSVrx6rLjL2W0xKmBXkEvWNs9btA`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `700px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
                </div>
            </div>
            <MainFooter/>
        </>
    )
}

export default ProfilePage;