import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';






const FormaGiuridicaService = () => {
    const getFormeGiuridiche = async () => {
        try {
            const response = await axios.get(API_URL + 'forme-giuridiche');
            return response.data;
        } catch (error) {
            console.error('Error while fetching forme-giuridiche:', error);
        }
    };





    const addFormaGiuridica = async (descrizione) => {
        try {
            const response = await axios.post(API_URL + 'add-forma-giuridica', {
                descrizione,
            });

            if (response.data.accessToken) {
                localStorage.setItem('forma-giuridica', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while adding forma-giuridica:', error);
        }
    };






    const deleteFormaGiuridica = async (id) => {
        try {
            const response = await axios.delete(`${API_URL}forma-giuridica/${id}`, {
                id,
            });

            if (response.data.accessToken) {
                localStorage.setItem('forma-giuridica', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while deleting forma-giuridica:', error);
        }
    };

    return { getFormeGiuridiche, addFormaGiuridica, deleteFormaGiuridica };
};

export default FormaGiuridicaService;