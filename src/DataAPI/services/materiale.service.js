import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';






const MaterialeService = () => {
    const getMateriali = async () => {
        try {
            const response = await axios.get(API_URL + 'materiali');
            return response.data;
        } catch (error) {
            console.error('Error while fetching materiali:', error);
        }
    };





    const addMateriale = async (descrizione) => {
        try {
            const response = await axios.post(API_URL + 'add-materiale', {
                descrizione,
            });

            if (response.data.accessToken) {
                localStorage.setItem('materiale', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while adding materiale:', error);
        }
    };


    const  updateMaterial=(id, descrizione)=> {
        return axios.put(API_URL + `update-materiale/${id}`, {
            
            descrizione

        })             //Commentato perché gestiamo l'errore direttamente dalla risposta del metodo "handleSubmit()" su mod-provincia
        /*.catch((error) => {
            console.log("Stringify from provincia.service: " + JSON.stringify(error))

        });*/
    }



    const deleteMateriale = async (id) => {
        try {
            const response = await axios.delete( API_URL + `materiale/${id}`, {
                id,
            });

            if (response.data.accessToken) {
                localStorage.setItem('materiale', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while deleting materiale:', error);
        }
    };

    return { getMateriali, addMateriale, deleteMateriale,updateMaterial };
};

export default MaterialeService;
