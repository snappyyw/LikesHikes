import React from 'react';
import { useSelector } from 'react-redux';
import {
    withScriptjs, withGoogleMap,
    GoogleMap, Polyline
  } from "react-google-maps";


function wrappedMap() {
    return (
        <GoogleMap
            defaultZoom={3.5}
            defaultCenter={{lat: 63, lng: 90,}}
            >
        <Polyline
          // path={coords}
          key={1}
          options={{
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35
          }}
        />

        </GoogleMap>
    )  
}


export default withScriptjs(withGoogleMap(wrappedMap));

