import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'


function MyMap() {
    return(
        <GoogleMap defaultZoom={3.5} defaultCenter={{lat:63, lng:90}}/>
    )
}

const wrappedMap=withScriptjs(withGoogleMap(MyMap));

export default wrappedMap;