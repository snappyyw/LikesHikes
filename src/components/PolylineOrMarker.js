import React from 'react';
import {Polyline, Marker, InfoWindow} from "react-google-maps";

function PolylineOrMarker({сoordinates, date}) {

    const [selectedRouter, setSelectedRouter] = React.useState(null)

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

    return(
        <>
            <Polyline
            path={сoordinates}
            key={1}
            options={{
                strokeColor: determiningComplexity(date.complexity),
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35
            }}
            />
            <Marker 
                position={сoordinates[0]}
                onClick={() => setSelectedRouter(date)}
                icon={{
                    url: '/marker.png',
                    scaledSize: new window.google.maps.Size(30, 30)
                }}

            />
            {
                selectedRouter &&
                <InfoWindow
                    position={сoordinates[0]}
                    onCloseClick={() => setSelectedRouter(null)}
                >
                    <div className="info-window">
                        <h2 className="info-window__title">{date.name}</h2>
                        <p className="info-window__text">{stringReduction(date.discription, 100)}</p>
                        <p className="info-window__complexity">Сложность: {date.complexity}</p>
                        <button className="info-window__button">Подробнее</button>
                    </div>
                </InfoWindow>
            }
        </>
    )
}

export default PolylineOrMarker;