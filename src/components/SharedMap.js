import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'


function SharedMap() {
    return(
        <GoogleMap defaultZoom={3.5} defaultCenter={{lat:63, lng:90}}/>
    )
}

const wrappedMap=withScriptjs(withGoogleMap(SharedMap));

export default wrappedMap;