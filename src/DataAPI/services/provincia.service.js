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





    const addProvincia = async (codice, idRegione) => {
        try {
            const response = await axios.post(API_URL + `add-provincia/${idRegione}`, {
                codice,
            });

            if (response.data.accessToken) {
                localStorage.setItem('provincia', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while adding provincia:', error);
        }
    };


    const updateProvincia = (id, codice, idRegione) => {
        return axios.put(API_URL + `update-provincia/${id}/${idRegione}`, {
            id,
            codice,
            idRegione
        })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("provincia", JSON.stringify(response.data));
                }
                return response.data;
            });
        //Commentato perché gestiamo l'errore direttamente dalla risposta del metodo "handleSubmit()" su mod-provincia
        /*.catch((error) => {
            console.log("Stringify from provincia.service: " + JSON.stringify(error))

        });*/
    }



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

    return { getProvince, addProvincia, deleteProvincia, updateProvincia };
};

export default ProvinciaService;
