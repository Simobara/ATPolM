import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';


export const getAnnunci = async () => {
    try {
        const response = await axios.get(API_URL + 'annunci');
        return response.data;
    } catch (error) {
        console.error('Error while fetching annunci:', error);
    }
};

