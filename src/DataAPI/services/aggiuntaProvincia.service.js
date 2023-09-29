import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';






const AggiuntaProvinciaService = () => {
    const getAggiunteProvince = async () => {
        try {
            const response = await axios.get(API_URL + 'aggiunte-province');
            return response.data;
        } catch (error) {
            console.error('Error while fetching province:', error);
        }
    };

    const addAggiuntaProvincia = async (codice, idRegione) => {
        try {
            const response = await axios.post(API_URL + `add-aggiunta-provincia/${idRegione}`, {
                codice,
            });

            if (response.headers["segnale-per-admin"]) {
                //Controlla poi che il valore dell'errore sia quello corretto
                if (response.headers["segnale-per-admin"] === "Via libera notifica richiesta aggiunta PROVINCIA per admin") {
                    
                  //Qua andrà il codice che attiva la procedura di notifica all'admin in FE
                  console.log("è quella là")
        
                } else {
                  console.log("NON è l'errore giusto!");
                }
            } else {
                console.log("A monte è sbagliato!")
            };

            if (response.data.accessToken) {
                localStorage.setItem('aggiunta-provincia', JSON.stringify(response.data));
            }
            return response.data;
        } catch (error) {
            console.error('Error while adding provincia:', error);
        }
    };


    const updateAggiuntaProvincia = (id, codice, idRegione) => {
        return axios.put(API_URL + `update-aggiunta-provincia/${id}/${idRegione}`, {
            id,
            codice,
            idRegione
        })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("aggiunta-provincia", JSON.stringify(response.data));
                }
                return response.data;
            });
        //Commentato perché gestiamo l'errore direttamente dalla risposta del metodo "handleSubmit()" su mod-provincia
        /*.catch((error) => {
            console.log("Stringify from provincia.service: " + JSON.stringify(error))

        });*/
    }



    const deleteAggiuntaProvincia = async (id) => {
        try {
            const response = await axios.delete(`${API_URL}aggiunta-provincia/${id}`, {
                id,
            });

            if (response.data.accessToken) {
                localStorage.setItem('aggiunta-provincia', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while deleting provincia:', error);
        }
    };

    return { getAggiunteProvince, addAggiuntaProvincia, deleteAggiuntaProvincia, updateAggiuntaProvincia };
};

export default AggiuntaProvinciaService;
