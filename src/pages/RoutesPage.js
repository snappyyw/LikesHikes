import React from 'react'

import {MainHeder, MainFooter, SharedMap} from '../components'


function RoutesPage() {
    return(
        <>
            <MainHeder/>
            <div className="routes">
                <div className="routes__body">
                <h2 className="routes__title">Карта маршрутов</h2>
                <SharedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,place&key=AIzaSyAEWP0jSVrx6rLjL2W0xKmBXkEvWNs9btA`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `700px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                </div>
            </div>
            <MainFooter/>
        </>
    )
}

export default RoutesPage;