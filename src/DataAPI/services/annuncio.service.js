// import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';





const AnnuncioService = () => {
    // const [accessToken, setAccessToken] = useState(null);

    const getAnnunci = async () => {
        try {
            const response = await axios.get(API_URL + 'annunci');
            return response.data;
        } catch (error) {
            console.error('Error while fetching annunci:', error);
        }
    };

    const addAnnuncio = async (titolo, descrizione, quantita, idLocalita, idMateriale, idUnitaDiMisura, currentUserId) => {
        try {
            const response = await axios.post(API_URL + `add-annuncio/${currentUserId}`, {
                titolo,
                descrizione,
                quantita,
                idLocalita,
                idMateriale,
                idUnitaDiMisura,
                currentUserId
            });
            if (response.data.accessToken) {
                localStorage.setItem('annuncio', JSON.stringify(response.data));
                // setAccessToken(response.data.accessToken);
            }
            return response.data;
        } catch (error) {
            console.error('Error while adding annuncio:', error);
        }
    };

    return { getAnnunci, addAnnuncio };
    // return { getAnnunci, addAnnuncio, accessToken };
};

export default AnnuncioService;
