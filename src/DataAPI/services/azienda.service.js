// import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/views/';





const AziendaService = () => {
    // const [aziende, setAziende] = useState([]);

    const getAziende = async () => {
        try {
            const response = await axios.get(API_URL + 'aziende');
            return (response.data);
        } catch (error) {
            console.error('Error while fetching aziende:', error);
        }
    }


    const addAzienda = async (email, indirizzo, ragioneSociale, telefono1) => {
        try {
            const response = await axios.post(API_URL + 'add-azienda', {
                email,
                indirizzo,
                ragioneSociale,
                telefono1,
            });
            if (response.data.accessToken) {
                localStorage.setItem('azienda', JSON.stringify(response.data));
                // setAccessToken(response.data.accessToken);
            }
            return response.data;
        } catch (error) {
            console.error('Error while adding azienda:', error);
        }
    };


    return { getAziende, addAzienda };
};

export default AziendaService;
