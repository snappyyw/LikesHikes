import React from 'react';
import {Polyline, Marker, InfoWindow} from "react-google-maps";
import { useHistory } from 'react-router-dom';
import {useSelector} from 'react-redux';

import {difficultyTranslation, determiningComplexity} from '../utils/helpFuncion';

function PolylineAndMarker({сoordinates, date}) {
    const [selectedRoute, setSelectedRoute] = React.useState(null);
    const user = useSelector(state => state.user);
    const isAdmin = useSelector(state => state.user.isAdmin);
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
                            user.userName &&
                            date.userHas &&
                            <button className="info-window__button" onClick={() => console.log()}
                            >
                                Добавить
                            </button>
                        }
                        {
                            isAdmin &&
                            <button className="info-window__button" onClick={() => console.log()}
                            >
                                Удалить
                            </button>
                        }
                    </div>
                </InfoWindow>
            }
        </>
    )
}

export default PolylineAndMarker;