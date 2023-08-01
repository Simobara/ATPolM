import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/views/';

const AziendaService = () => {
    // const [aziende, setAziende] = useState([]);


    const getAziende = async () => {
        try {
            const response = await axios.get(API_URL + 'aziende-all');
            return (response.data);
        } catch (error) {
            console.error('Error while fetching aziende:', error);
        }
    }


    return { getAziende };
};

export default AziendaService;
