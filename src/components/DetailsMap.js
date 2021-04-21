import React from 'react';
import {
    withScriptjs, withGoogleMap,
    GoogleMap, Marker,
    Polyline, InfoWindow
} from "react-google-maps";

function DetailsMap({routers}) {
    const [selectedRouter, setSelectedRouter] = React.useState(null);

    function determiningComplexity(complexity) {
        if (complexity === "Средний"){
            return "#ffa500";
        }
        else if(complexity === "Сложный"){
            return "#ff0000";
        }
        return "#008000";
    }

    function stringReduction(str, num) {
        let res = "";
    
        if(str.length > num){
    
            for(let i=0; i<num; i++){
                res += str[i];
            }
        }
        else{
            res=str;
        }
    
        return res + "...";
    }

    return (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={routers.coordinates[0]}
        >
            <Polyline
            path={routers.coordinates}
            key={1}
            options={{
                strokeColor: determiningComplexity(routers.complexity),
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35
            }}
            />
            <Marker 
                position={routers.coordinates[0]}
                onClick={() => setSelectedRouter(routers)}
                icon={{
                    url: '/marker.png',
                    scaledSize: new window.google.maps.Size(30, 30)
                }}

            />
            {
                selectedRouter &&
                <InfoWindow
                    position={routers.coordinates[0]}
                    onCloseClick={() => setSelectedRouter(null)}
                >
                    <div className="info-window">
                        <h2 className="info-window__title">{routers.name}</h2>
                        <p className="info-window__text">{stringReduction(routers.discription, 100)}</p>
                        <p className="info-window__complexity">Сложность: {routers.complexity}</p>
                    </div>
                </InfoWindow>
            }
        </GoogleMap>
    )  
}


export default withScriptjs(withGoogleMap(DetailsMap));
