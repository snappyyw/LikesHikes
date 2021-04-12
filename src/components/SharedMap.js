import React from 'react'
import { YMaps, Map } from 'react-yandex-maps';


function SharedMap() {

    return(
        <YMaps>
            <Map defaultState={{ center: [62.10388252, 77.51953125], zoom: 3.5,  }} width={1400} height={700} />
        </YMaps>
    )
}

export default SharedMap;