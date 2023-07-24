import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

class AnnuncioService {

    getAnnunci() { 
        return axios.get(API_URL + 'annunci');        
    }

    addAnnuncio(titolo, descrizione, quantita) {
        return axios.post(API_URL + 'add-annuncio', {
            titolo,
            descrizione,
            quantita
        })
        .then(response => {
            if (response.data.accessToken) {
            localStorage.setItem("annuncio", JSON.stringify(response.data));
            }
            return response.data;
        });

    }
}

export default new AnnuncioService();