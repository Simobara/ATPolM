// import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';





const AssociazioneService = () => {
    // const [accessToken, setAccessToken] = useState(null);

    const getAssociazione = async () => {
        try {
            const response = await axios.get(API_URL + 'associazione');
            return response.data;
        } catch (error) {
            console.error('Error while fetching associazione:', error);
        }
    };



    const addAssociazione = async (descrizione) => {
        try {
            const response = await axios.post(API_URL + 'add-associazione', {
                descrizione,
            });
            if (response.data.accessToken) {
                localStorage.setItem('associazione', JSON.stringify(response.data));
                // setAccessToken(response.data.accessToken);
            }
            return response.data;
        } catch (error) {
            console.error('Error while adding associazione:', error);
        }
    };







    const deleteAssociazione = async (id) => {
        try {
            const response = await axios.delete(`${API_URL}associazione/${id}`, {
                id,
            });

            if (response.data.accessToken) {
                localStorage.setItem('associazione', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while deleting associazione:', error);
        }
    };



    return { getAssociazione, addAssociazione, deleteAssociazione };
    // return { getAssociazione, addAssociazione, accessToken };
};

export default AssociazioneService;