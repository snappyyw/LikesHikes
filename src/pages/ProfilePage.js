import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

import {MainHeder, MainFooter, MyMap} from '../components';
import {removeCoordinat} from '../action/creatingRoutes';

function ProfilePage() {
    const user = useSelector(state => state.user.currentUser);
    const coords  = useSelector(state => state.myRouters.coordinates);
    const dispatch = useDispatch();
    const [creation , setCreation ] = React.useState(false);
    const isCreation = () => {
        setCreation(!creation)
    };

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
                        <div className="my-map">
                            <MyMap 
                                isCreation={creation}
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,place&key=AIzaSyCm18OXr7nUO_hsYpActf9Dwjc0_jmpK9g`}
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `700px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                            />
                        </div>
                        <div className="сontrol-buttons">
                            {coords.length > 1 && <button className="сontrol-buttons__button" onClick={()=>{dispatch(removeCoordinat())}}>Удалить</button>}
                            <button className="сontrol-buttons__button" onClick={isCreation}>Создать маршрут</button>
                            {coords.length > 1  && <button className="сontrol-buttons__button" onClick={console.log("ssss")}>Продолжить</button>}
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </>
    )
}

export default ProfilePage;