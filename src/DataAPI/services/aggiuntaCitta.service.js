import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';


//localita == citta



const AggiuntaCittaService = () => {
    const getAggiuntaCitta = async () => {
        try {
            const response = await axios.get(API_URL + 'aggiunta-localita');
            return response.data;
        } catch (error) {
            console.error('Error while fetching localita:', error);
        }
    };

    const addAggiuntaCitta = async (descrizione, cap, idProvincia) => {
        try {
            const response = await axios.post(API_URL + `add-aggiunta-localita/${idProvincia}`, {
                descrizione,
                cap,
                idProvincia
            });

            if (response.data.accessToken) {
                localStorage.setItem('aggiunta-localita', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while adding localita:', error);
        }
    };


    const updateAggiuntaCitta = async (id, descrizione, cap, idProvincia) => {
        return axios.put(API_URL + `update-aggiunta-localita/${id}/${idProvincia}`, {
            id,
            descrizione,
            cap,
            idProvincia
        })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("aggiunta-localita", JSON.stringify(response.data));
                }
                return response.data;
            });
    }



    const deleteAggiuntaCitta = async (id) => {
        try {
            const response = await axios.delete(API_URL + `localita/${id}`, {
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

    return { getAggiuntaCitta, addAggiuntaCitta, deleteAggiuntaCitta, updateAggiuntaCitta };
};

export default AggiuntaCittaService;
