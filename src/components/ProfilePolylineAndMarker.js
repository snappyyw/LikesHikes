import React from 'react';
import {Polyline, Marker, InfoWindow} from "react-google-maps";
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {difficultyTranslation, determiningComplexity} from '../utils/helpFuncion';
import {deleteMyRoute, publishMyRoute, completeRoute} from '../action/user';
import {Rating} from "semantic-ui-react";
import {setCoordinat} from "../action/creatingRoutes";

function ProfilePolylineAndMarker({сoordinates, date}) {
    const [selectedRoute, setSelectedRoute] = React.useState(null);
    const dispatch = useDispatch();
    const userName = useSelector(store => store.user.userName);
    const history = useHistory();

    return(
        <>
            <Polyline
            path={сoordinates}
            key={1}
            options={{
                strokeColor: determiningComplexity(date.complexity),
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35
            }}
            />
            <Marker 
                position={сoordinates[0]}
                onClick={() => setSelectedRoute(date)}
                icon={{
                    url: '/marker.png',
                    scaledSize: new window.google.maps.Size(30, 30)
                }}

            />
            {
                selectedRoute &&
                <InfoWindow
                    position={сoordinates[0]}
                    onCloseClick={() => setSelectedRoute(null)}
                >
                    <div className="info-window">
                        <h2 className="info-window__title">{date.name}</h2>
                        <p className="info-window__text">{date.description}</p>
                        <p className="info-window__complexity">Сложность: {difficultyTranslation(date.complexity)}</p>
                        <p className="info-window__complexity">Регион: {date.region}</p>
                        <Rating icon='star' defaultRating={date.rating} disabled maxRating={5} />
                        <br/>
                        <button className="info-window__button" onClick={() => history.push({
                            pathname: `/Routes/${date.id}`,
                            })}
                        >
                            Подробнее
                        </button>
                        {
                            !date.isPublished &&
                            <button className="info-window__button" onClick={() => dispatch(publishMyRoute(date.id))}
                            >
                                Опубликовать
                            </button>
                        }
                            <button className="info-window__button" onClick={() => dispatch(deleteMyRoute(date.id))}
                            >
                                Удалить
                            </button>

                        {
                            !date.reportExists &&
                            date.isPassed &&
                            <button className="info-window__button" onClick={() => history.push({
                            pathname: `/Profile/CreateRouteReport/${date.id}`})}
                            >
                                Создать отчет
                            </button>
                        }
                        {
                            !date.reportExists &&
                            !date.isPassed &&
                            <button className="info-window__button" onClick={() => dispatch(completeRoute(date.id))}
                            >
                                Пройти
                            </button>
                        }
                        {
                            date.reportExists &&
                            <button className="info-window__button" onClick={() => history.push({
                            pathname: `/Profile/RouteReport/${date.id}`})}
                            >
                                Посмотреть отчет
                            </button>
                        }
                        {
                            date.authorName === userName &&
                            <button className="info-window__button" onClick={() =>{
                                dispatch(setCoordinat(сoordinates))
                                    history.push({
                                        pathname: `/Profile/Routes`,
                                        data: date,
                                    })}}
                            >
                                Изменить
                            </button>
                        }
                    </div>
                </InfoWindow>
            }
        </>
    )
}

export default ProfilePolylineAndMarker;