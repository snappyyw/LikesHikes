import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import { NavLink } from 'react-router-dom';

import {MainHeder, MainFooter, MyMap} from '../components';
import {removeCoordinat} from '../action/creatingRoutes';
import {GetUserRoute} from '../action/user';


function ProfilePage() {
    const user = useSelector(state => state.user);
    const coords  = useSelector(state => state.creatingRoutes.coordinates);
    const dispatch = useDispatch();
    const [creation , setCreation ] = React.useState(false);
    const [visibility , setVisibility ] = React.useState(true);
    const isCreation = () => {
        setCreation(!creation);
    };
    const isVisibility = () => {
        setVisibility(!visibility);
    };

    React.useEffect(() => {
        dispatch(GetUserRoute());
    }, [])

    return(
        <>
            <MainHeder/>
            <div className = "profile">
                <div className = "profile__body">
                    <div className = "user-info">
                        <AccountCircleSharpIcon className = "user-info__icon" style = {{ fontSize: 100 }}/>
                        <p className = "user-info__text">Login: {user.userName}</p>
                        <p className = "user-info__text">Email: {user.email}</p>
                        <p className = "user-info__text">Кол-во моих маршрутов: {user.routesCount}</p>
                        <p className = "user-info__text">Кол-во пройденых маршрутов: {user.passedRoutesCount}</p>
                    </div>
                    <div className = "my-routes">
                        <h3 className = "my-routes__title">Мои маршруты</h3>
                        <div className="my-map">
                            <MyMap 
                                isVisibility={visibility}
                                isCreation={creation}
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,place&key=AIzaSyBW4xq61iVDCqDE6IxQfC_2baHEIc-vcog`}
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `700px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                            />
                        </div>
                        <div className="сontrol-buttons">
                            {
                                coords.length > 1 && 
                                <button className="сontrol-buttons__button" onClick={()=>{dispatch(removeCoordinat())}}>Удалить</button>
                            }
                            <button className="сontrol-buttons__button" onClick={isCreation}>
                                {
                                    creation ? "Прекратить создание маршрута" : "Создать маршрут"
                                }
                            </button>
                            <button className="сontrol-buttons__button" onClick={isVisibility}>
                                {
                                    visibility ? "Скрыть мои маршуты" : "Показать мои маршруты"
                                }
                            </button>
                            {
                                coords.length > 1  && 
                                <NavLink to="/Profile/Routes" className="сontrol-buttons__button">Продолжить</NavLink>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </>
    )
}

export default ProfilePage;