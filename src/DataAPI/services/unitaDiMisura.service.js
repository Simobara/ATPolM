import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';






const UnitaDiMisuraService = () => {
    const getUnitaDiMisura = async () => {
        try {
            const response = await axios.get(API_URL + 'unita-di-misura');
            return response.data;
        } catch (error) {
            console.error('Error while fetching unita-di-misura:', error);
        }
    };






    const addUnitaDiMisura = async (descrizione) => {
        try {
            const response = await axios.post(API_URL + 'add-unita-di-misura', {
                descrizione,
            });

            if (response.data.accessToken) {
                localStorage.setItem('unita-di-misura', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while adding unita-di-misura:', error);
        }
    };

    const updatemisura = (id, descrizione
    ) => {
        return axios.put(API_URL + `update-unita-di-misura/${id}`, {
            descrizione

        })
    }


    const deleteUnitaDiMisura = async (id) => {
        try {
            const response = await axios.delete(API_URL + `unita-di-misura/${id}`, {
                id,
            });

            if (response.data.accessToken) {
                localStorage.setItem('unita-di-misura', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while deleting unita-di-misura:', error);
        }
    };

    return { getUnitaDiMisura, addUnitaDiMisura, deleteUnitaDiMisura, updatemisura };
};

export default UnitaDiMisuraService;
