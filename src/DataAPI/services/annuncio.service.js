import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';






const AnnuncioService = () => {
    const getAnnunci = () => {
        return axios.get(API_URL + 'annunci')
    }
    const addAnnuncio = (titolo, descrizione, quantita, file, dataDiScadenza, idLocalita, idMateriale, idUnitaDiMisura, currentUserId) => {

        console.log("Il file? " + file);

        const dataToSend = {
            'titolo': titolo,
            'descrizione': descrizione,
            'quantita': quantita,
            'dataDiScadenza': dataDiScadenza
        };

        const fotoToSend = {
            'foto': file
        };


        let formData = new FormData();

        console.log("file.name: " + file.name);



        formData.append("data", new Blob([JSON.stringify(dataToSend)],
            {
                type: "application/json"
            }));




        formData.append("foto", new Blob([JSON.stringify(file)]));

        console.log("Foto to send: " + fotoToSend);
        console.log("FORM DATA: " + formData);

        console.log("quantita2: " + quantita);

        return axios({
            method: 'post',
            url: API_URL + `add-annuncio/${idLocalita}/${idMateriale}/${idUnitaDiMisura}/${currentUserId}`,
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
    }
    return { addAnnuncio, getAnnunci };
};

export default AnnuncioService;