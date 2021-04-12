import React from 'react'
import { YMaps, Map } from 'react-yandex-maps';


function MyMap() {

    return(
        <YMaps >
            <Map defaultState={{ center: [62.10388252, 77.51953125], zoom: 3.5,  }} width={1200} height={600} />
        </YMaps>
    )
}


export default MyMap;