import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/views/';

const AziendaService = () => {
    const [aziende, setAziende] = useState([]);

    const getAziende = async () => {
        try {
            const response = await axios.get(API_URL + 'aziende-all');
            return response.data;
        } catch (error) {
            console.error('Error while fetching aziende:', error);
        }
    };



    const addAziende = async (descrizione) => {
        try {
            const response = await axios.post(API_URL + 'add-aziende', {
                descrizione,
            });

            if (response.data.accessToken) {
                localStorage.setItem('aziende', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while adding aziende:', error);
        }
    };

    const deleteAziende = async (id) => {
        try {
            const response = await axios.delete(`${API_URL}aziende/${id}`, {
                id,
            });

            if (response.data.accessToken) {
                localStorage.setItem('aziende', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while deleting aziende:', error);
        }
    };




    return { getAziende, addAziende, deleteAziende };
};

export default AziendaService;