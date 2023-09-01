import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

const AnnuncioService = () => {
    const getAnnunci = async () => {
        try {
            return await axios.get(API_URL + 'annunci');
        } catch (error) {
            console.error('Error while fetching annunci:', error);
        }
    };

    const addAnnuncio = async (titolo, descrizione, quantita, file, dataDiScadenza, idLocalita, idMateriale, idUnitaDiMisura, currentUserId) => {
        try {
            const dataToSend = {
                'titolo': titolo,
                'descrizione': descrizione,
                'quantita': quantita,
                'dataDiScadenza': dataDiScadenza
            };

            let formData = new FormData();

            formData.append("data", new Blob([JSON.stringify(dataToSend)], {
                type: "application/json"
            }));

            formData.append("foto", new Blob([JSON.stringify(file)]));

            await axios({
                method: 'post',
                url: API_URL + `add-annuncio/${idLocalita}/${idMateriale}/${idUnitaDiMisura}/${currentUserId}`,
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' }
            });

        } catch (error) {
            console.error('Error while adding annuncio:', error);
        }
    };

    return { getAnnunci, addAnnuncio };
};

export default AnnuncioService;