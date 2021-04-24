import React from 'react';
import {
    withScriptjs, withGoogleMap,
    GoogleMap
} from "react-google-maps";


import {PolylineOrMarker} from './index'

function wrappedMap({routes}) {
    return (
        <GoogleMap
            defaultZoom={3.5}
            defaultCenter={{lat: 63, lng: 90,}}
        >
          {
            routes && 
            routes.map(
              cord => <PolylineOrMarker сoordinates={cord.coordinates} date={cord} key={cord.id}/>
            )
          }
        </GoogleMap>
    )  
}


export default withScriptjs(withGoogleMap(wrappedMap));

