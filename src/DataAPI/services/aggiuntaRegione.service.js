import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';






const AggiuntaRegioneService = () => {
    const getAggiunteRegioni = async () => {
        try {
            const response = await axios.get(API_URL + 'aggiunte-regioni');
            return response.data;
        } catch (error) {
            console.error('Error while fetching regioni:', error);
        }
    };





    const addAggiuntaRegione = async (codice, descrizione) => {
        try {
            const response = await axios.post(API_URL + 'add-aggiunta-regione', {
                // id,
                codice,
                descrizione,
            });

            if (response.headers["segnale-per-admin"]) {
                //Controlla poi che il valore dell'errore sia quello corretto
                if (response.headers["segnale-per-admin"] === "Via libera notifica richiesta aggiunta REGIONE per admin") {
                    
                  //Qua andrà il codice che attiva la procedura di notifica all'admin in FE
                  console.log("è quella là")
        
                } else {
                  console.log("NON è l'errore giusto!");
                }
            } else {
                console.log("A monte è sbagliato!")
            };

            if (response.data.accessToken) {
                localStorage.setItem('aggiunta-regione', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while adding regione:', error);
        }
    };



    const updateAggiuntaRegione = async (id, codice, descrizione) => {
        return axios.put(API_URL + `update-aggiunta-regione/${id}`, {
            id,
            codice,
            descrizione,
        })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("aggiunta-regione", JSON.stringify(response.data));
                }
                return response.data;
            });
    }


    const deleteAggiuntaRegione = async (id) => {
        try {
            const response = await axios.delete(`${API_URL}aggiunta-regione/${id}`, {
                id,
            });

            if (response.data.accessToken) {
                localStorage.setItem('aggiunta-regione', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while deleting regione:', error);
        }
    };

    return { getAggiunteRegioni, addAggiuntaRegione, updateAggiuntaRegione, deleteAggiuntaRegione, };
};

export default AggiuntaRegioneService;
