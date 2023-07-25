import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/views/';

const AziendaService = () => {
    const [aziende, setAziende] = useState([]);

    useEffect(() => {
        const fetchAziende = async () => {
            try {
                const response = await axios.get(API_URL + 'aziende-all');
                setAziende(response.data);
            } catch (error) {
                console.error('Error while fetching aziende:', error);
            }
        };

        fetchAziende();
    }, []);

    return aziende;
};

export default AziendaService;