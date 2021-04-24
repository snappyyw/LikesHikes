import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    withScriptjs, withGoogleMap,
    GoogleMap, Polyline
} from "react-google-maps";

import {setCoordinat} from '../action/creatingRoutes';


function MyMap({isCreation}) {
  const coords  = useSelector(state => state.myRoutes.coordinates);
  const dispatch = useDispatch();

  function creation(ev) {
    if(isCreation){
      dispatch(setCoordinat({lat: ev.latLng.lat(), lng: ev.latLng.lng() }))
    }
    return;
  }

    return (
      <GoogleMap
        defaultZoom={3.5}
        defaultCenter={{lat: 63, lng: 90,}}
        onClick={creation}
      >
        <Polyline
          path={coords}
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
    );
}


export default withScriptjs(withGoogleMap(MyMap));
