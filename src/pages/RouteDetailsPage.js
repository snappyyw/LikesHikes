import React from 'react';
import {useSelector} from 'react-redux'

import {MainHeder, MainFooter, DetailsMap} from '../components'

function RouteDetailsPage(prop) {
    let date = prop.location.customData
    const routers = useSelector(state => state.routers.routers);

    if(!date){
        const id = prop.location.pathname.split('/')[2]
        date = routers.find(rout => rout.id === +id)
    }

    return(
        <>
            <MainHeder/>
                <div className = "route-details">
                    <div className="route-details__body">
                        <DetailsMap 
                                routers={date}
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,place&key=AIzaSyCm18OXr7nUO_hsYpActf9Dwjc0_jmpK9g`}  
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `400px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                        />
                        <h2 className="route-details__title">{date.name}</h2>
                        <p className="route-details__subtitle">Продолжительность маршрута: {date.duration}</p>
                        <p className="route-details__subtitle">Сложность: {date.complexity}</p>
                        <p className="route-details__subtitle">Описание:<br/>{date.discription}</p>
                        <p className="route-details__subtitle">Регион: {date.region}</p>
                    </div>
                </div>
                <MainFooter/>
        </>
    )
}

export default RouteDetailsPage;