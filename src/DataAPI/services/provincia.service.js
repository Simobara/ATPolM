import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';






const ProvinciaService = () => {
    const getProvince = async () => {
        try {
            const response = await axios.get(API_URL + 'province');
            return response.data;
        } catch (error) {
            console.error('Error while fetching province:', error);
        }
    };





    const addProvincia = async (id, codice, idRegione) => {
        try {
            const response = await axios.post(API_URL + 'add-provincia', {
                id,
                codice,
                idRegione,
            });

            if (response.data.accessToken) {
                localStorage.setItem('provincia', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while adding provincia:', error);
        }
    };






    const deleteProvincia = async (id) => {
        try {
            const response = await axios.delete(`${API_URL}provincia/${id}`, {
                id,
            });

            if (response.data.accessToken) {
                localStorage.setItem('provincia', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while deleting provincia:', error);
        }
    };

    return { getProvince, addProvincia, deleteProvincia };
};

export default ProvinciaService;
