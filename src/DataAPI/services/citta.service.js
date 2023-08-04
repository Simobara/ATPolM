import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';


//localita == citta




const CittaService = () => {
    const getCitta = async () => {
        try {
            const response = await axios.get(API_URL + 'localita');
            return response.data;
        } catch (error) {
            console.error('Error while fetching localita:', error);
        }
    };





    const addCitta = async (id, cap, descrizione, idProvincia) => {
        try {
            const response = await axios.post(API_URL + 'add-localita', {
                id,
                cap,
                descrizione,
                idProvincia
            });

            if (response.data.accessToken) {
                localStorage.setItem('localita', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while adding localita:', error);
        }
    };






    const deleteCitta = async (id) => {
        try {
            const response = await axios.delete(`${API_URL}localita/${id}`, {
                id,
            });

            if (response.data.accessToken) {
                localStorage.setItem('localita', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while deleting localita:', error);
        }
    };

    return { getCitta, addCitta, deleteCitta };
};

export default CittaService;