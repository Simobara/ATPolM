import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';






const RegioneService = () => {
    const getRegioni = async () => {
        try {
            const response = await axios.get(API_URL + 'regioni');
            return response.data;
        } catch (error) {
            console.error('Error while fetching regioni:', error);
        }
    };





    const addRegione = async (id, codice, descrizione) => {
        try {
            const response = await axios.post(API_URL + 'add-regione', {
                id,
                codice,
                descrizione,
            });

            if (response.data.accessToken) {
                localStorage.setItem('regione', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while adding regione:', error);
        }
    };



 updateRegione(id, descrizione, codice) {
        return axios.put(API_URL + `update-regione/${id}`, {
            id,
            descrizione,
            codice
        })
        .then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("regione", JSON.stringify(response.data));
            }
            return response.data;
        });
    }


    const deleteRegione = async (id) => {
        try {
            const response = await axios.delete(`${API_URL}regione/${id}`, {
                id,
            });

            if (response.data.accessToken) {
                localStorage.setItem('regione', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while deleting regione:', error);
        }
    };

    return { getRegioni, addRegione, deleteRegione };
};

export default RegioneService;
