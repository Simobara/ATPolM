
import axios from "axios";

const API_URL = 'http://localhost:8080/api/auth/';

const RuoloService = () => {

    const getRuoli = async () => {
        try {
            const response = await axios.get(API_URL + 'ruoli');
            console.log("Arrivano i ruoli, si? " + JSON.stringify(response.data))
            return response.data;
        } catch (error) {
            console.error('Error while fetching ruoli:', error);
        }
    };

    return { getRuoli };

};

export default RuoloService;