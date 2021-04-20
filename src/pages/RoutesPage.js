import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

import {MainHeder, MainFooter, SharedMap} from '../components';
import {getRouter} from '../action/routers'


function RoutesPage() {
    const routers = useSelector(state => state.routers.routers);
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getRouter())
    }, []);

    return(
        <>
            <MainHeder/>
            <div className = "routes">
                <div className = "routes__body">
                    <h2 className = "routes__title">Карта маршрутов</h2>
                    <div className="map">
                        <SharedMap 
                            routers={routers}
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,place&key=AIzaSyCm18OXr7nUO_hsYpActf9Dwjc0_jmpK9g`}  
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

export default RoutesPage;