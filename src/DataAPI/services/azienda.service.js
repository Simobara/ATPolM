// import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';
const API_AUTH_URL = 'http://localhost:8080/api/auth/';





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


    const addAzienda = async (username, email, password, ragioneSociale, legaleRappresentante, indirizzo, codiceFiscale, pIva, telefono,
        telefono2, descrizioneTelefoni, fax, pec, idRuolo, idFormaGiuridica, idAssociazione, idLocalita,
        idCategoria, idAttivitaPrincipale, idAttivitaSecondaria) => {
        try {
            const response = await axios.post(`${API_AUTH_URL}aggiungi-azienda-singola/${idLocalita}/${idCategoria}` +
            `/${idAttivitaPrincipale}/${idAttivitaSecondaria}/${idAssociazione}/${idFormaGiuridica}/${idRuolo}`, {
                username,
                email,                
                password,                
                ragioneSociale,
                legaleRappresentante,
                indirizzo,
                codiceFiscale,
                pIva,
                telefono,
                telefono2,
                descrizioneTelefoni,
                fax,
                pec,
                idFormaGiuridica,
                idAssociazione,
                idLocalita,
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

    const addAziendaFromExcel = async (json) => {
        return axios.post(API_URL + 'add-azienda-from-excel', {
            json
        })
    };


    return { getAziende, addAzienda, addAziendaFromExcel };
};

export default AziendaService;