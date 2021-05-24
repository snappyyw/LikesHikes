import React from 'react';
import {Polyline, Marker, InfoWindow} from "react-google-maps";
import { useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {difficultyTranslation, determiningComplexity} from '../utils/helpFuncion';
import {deleteMyRoute, publishMyRoute, completeRoute} from '../action/user';

function ProfilePolylineAndMarker({сoordinates, date}) {
    const [selectedRoute, setSelectedRoute] = React.useState(null);
    const userName = useSelector(state => state.user.userName);
    const dispatch = useDispatch();
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
                            // isAdmin && let date = prop.location.customData
                            date.isPassed &&
                            <button className="info-window__button" onClick={() => history.push({
                                pathname: `/CreatingReport`,
                                customData: date.id,
                            })}
                            >
                                Создать отчет
                            </button>
                        }
                        {
                            !date.isPassed &&
                            <button className="info-window__button" onClick={() => dispatch(completeRoute(date.id))}
                            >
                                Пройти
                            </button>
                        }
                    </div>
                </InfoWindow>
            }
        </>
    )
}

export default ProfilePolylineAndMarker;