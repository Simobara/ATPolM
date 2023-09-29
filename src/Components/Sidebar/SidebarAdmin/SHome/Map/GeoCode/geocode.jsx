import React from 'react';
import Geocode from 'react-geocode';

// Set your Google Maps API key
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

const AddressToCoordinates = () => {
    const handleGeocode = async () => {
        try {
            const response = await Geocode.fromAddress('Uforia Infotech Solution, Islamabad, Pakistan');
            const { lat, lng } = response.results[0].geometry.location;
            console.log('Latitude:', lat);
            console.log('Longitude:', lng);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <button onClick={handleGeocode}>Convert Address to Coordinates</button>
        </div>
    );
};

export default AddressToCoordinates;
