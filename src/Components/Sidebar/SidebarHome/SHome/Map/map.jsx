import React, { useState, useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './map.css'
import Spinner from '../../../../Global/Spinner/spinner';

/* 
REM: Aggiorna index html con lo script google api 
REM: AggiornA .env con la chiave google

PASSI:
-   fai la chiave google, 
-   impostala nel .env
-   sistema script nel index.html
-

*/
// https://stackoverflow.com/questions/34517900/i-need-help-looping-fake-locations-on-google-maps-api
// var locations = [{
//     "name": "Uluru",
//     "description": "Also known as Ayers rock",
//     "lat": "33.745990",
//     "lon": "-116.315722"
// }, {
//     "name": "Mt. Everest", 
//     "description": "Located in the himalayas",
//     "lat": "33.745990",
//     "lon": "-116.315722"   
// }];
const InitMap = ({ lat, lng, zoom = 10 }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });
    const center = useMemo(() => ({ lat: lat || 41.902782, lng: lng || 12.496366 }), [lat, lng]);


    const [isImgLoaded, setIsImageLoaded] = useState(true)

    const handleClickNoClick = () => {
        setIsImageLoaded(!isImgLoaded)
    }


    return (
        <>
            {
                (isLoaded && isImgLoaded) ? (
                    <div onClick={handleClickNoClick}>
                        <GoogleMap zoom={zoom} center={center} mapContainerClassName='map-container' >
                            < Marker position={center} />
                        </GoogleMap >
                    </div>
                ) :
                    (
                        <div onClick={handleClickNoClick} style={{ border: '2px solid black' }}>
                            Loading MAP PAGE...
                            <Spinner />
                        </div>
                    )

            }
        </>
    )
}



export default InitMap;
