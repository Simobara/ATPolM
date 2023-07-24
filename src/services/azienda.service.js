import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/views/';

class AziendaService {

    getPublicContent() { 
        return axios.get(API_URL + 'aziende-all');        
    }
}

export default new AziendaService();