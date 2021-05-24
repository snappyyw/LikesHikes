import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    withScriptjs, withGoogleMap,
    GoogleMap, Polyline
} from "react-google-maps";

import {setCoordinat} from '../action/creatingRoutes';
import {ProfilePolylineAndMarker} from './index'


function MyMap({isCreation, isVisibility}) {
  const coords  = useSelector(state => state.creatingRoutes.coordinates);
  const routes = useSelector(state => state.user.userRoutes);
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
            fillColor: "#ff0000",
            fillOpacity: 0.35
          }}
        />
        {
          isVisibility &&
          routes && 
          routes.map(
            cord => <ProfilePolylineAndMarker сoordinates={cord.coordinates} date={cord} key={cord.id}/>
          )
        }
      </GoogleMap>
    );
}


export default withScriptjs(withGoogleMap(MyMap));
