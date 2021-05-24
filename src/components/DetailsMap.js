import React from 'react';
import {
    withScriptjs, withGoogleMap,
    GoogleMap, Marker,
    Polyline
} from "react-google-maps";

import {determiningComplexity} from '../utils/helpFuncion';

function DetailsMap({routes}) {

    return (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={routes.coordinates[0]}
        >
            <Polyline
            path={routes.coordinates}
            key={1}
            options={{
                strokeColor: determiningComplexity(routes.complexity),
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35
            }}
            />
            <Marker
                position={routes.coordinates[0]}
                icon={{
                    url: '/marker.png',
                    scaledSize: new window.google.maps.Size(30, 30)
                }}
            />
        </GoogleMap>
    )  
}


export default withScriptjs(withGoogleMap(DetailsMap));
