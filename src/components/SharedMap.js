import React from 'react';
import {
    withScriptjs, withGoogleMap,
    GoogleMap,
  } from "react-google-maps";


function wrappedMap() {

    return (
        <GoogleMap
            defaultZoom={3.5}
            defaultCenter={{lat: 63, lng: 90,}}
            >
        </GoogleMap>
    )  
}


export default withScriptjs(withGoogleMap(wrappedMap));

