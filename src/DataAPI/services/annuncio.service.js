import React from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

const AnnuncioService = () => {

    const getAnnunci = async () => {
        try {
            const response = await axios.get(API_URL + 'annunci');
            // Fai qualcosa con la risposta, ad esempio:
            console.log(response.data);
        } catch (error) {
            console.error("Errore durante la chiamata GET:", error);
        }
    };

    const addAnnuncio = async (titolo, descrizione, quantita, file, dataDiScadenza, idLocalita, idMateriale, idUnitaDiMisura, currentUserId) => {
        try {
            const dataToSend = {
                titolo,
                descrizione,
                quantita,
                dataDiScadenza
            };

            let formData = new FormData();

            formData.append("data", new Blob([JSON.stringify(dataToSend)], {
                type: "application/json"
            }));
            formData.append("foto", new Blob([JSON.stringify(file)]));

            await axios({
                method: 'post',
                url: `${API_URL}add-annuncio/${idLocalita}/${idMateriale}/${idUnitaDiMisura}/${currentUserId}`,
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' }
            });
        } catch (error) {
            console.error("Errore durante la chiamata POST:", error);
        }
    };

    // Utilizzare getAnnunci e addAnnuncio come si desidera qui

    return (
        <div>
            {/* Il tuo UI qui */}
            <button onClick={getAnnunci}>Ottieni Annunci</button>
            <button onClick={() => addAnnuncio(/*parametri qui*/)}>Aggiungi Annuncio</button>
        </div>
    );
};

export default AnnuncioService;