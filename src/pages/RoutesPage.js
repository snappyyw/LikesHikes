import React from 'react'

import {MainHeder, MainFooter, SharedMap} from '../components'


function RoutesPage() {
    
    return(
        <>
            <MainHeder/>
            <div className = "routes">
                <div className = "routes__body">
                <h2 className = "routes__title">Карта маршрутов</h2>
                <SharedMap />
                </div>
            </div>
            <MainFooter/>
        </>
    )
}

export default RoutesPage;