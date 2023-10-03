// import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';





const AziendaService = () => {
    // const [aziende, setAziende] = useState([]);

    const getAziende = async () => {
        try {
            const response = await axios.get(API_URL + 'aziende');
            return (response.data);
        } catch (error) {
            console.error('Error while fetching aziende:', error);
        }
    }


    const addAzienda = async (id, email, fax, password, indirizzo, ragioneSociale, rappresentanteLegale, telefono1, telefono2,
        descrizioneTelefoni, pec, idFormaGiuridica, idAssociazione, idLocalità, idCategoria, idAttivitaPrincipale,
        idAttivitaSecondaria, idRuolo) => {
        try {
            const response = await axios.post(`${API_URL}add-azienda/${id}/${idLocalità}/${idCategoria}
            /${idAttivitaPrincipale}/${idAttivitaSecondaria}/${idAssociazione}/${idFormaGiuridica}/${idRuolo}`, {
                id,
                email,
                fax,
                password,
                indirizzo,
                ragioneSociale,
                rappresentanteLegale,
                telefono1,
                telefono2,
                descrizioneTelefoni,
                pec,
                idFormaGiuridica,
                idAssociazione,
                idLocalità,
                idCategoria,
                idAttivitaPrincipale,
                idAttivitaSecondaria,
                idRuolo
            });
            if (response.data.accessToken) {
                localStorage.setItem('azienda', JSON.stringify(response.data));
                // setAccessToken(response.data.accessToken);
            }
            return response.data;
        } catch (error) {
            console.error('Error while adding azienda:', error);
        }
    };


    return { getAziende, addAzienda };
};

export default AziendaService;