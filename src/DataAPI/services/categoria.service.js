import React from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

const CategoriaService = () => {
    const getCategorie = async () => {
        try {
            const response = await axios.get(API_URL + 'categorie');
            return response.data;
        } catch (error) {
            console.error('Error while fetching categorie:', error);
        }
    };

    const addCategoria = async (descrizione) => {
        try {
            const response = await axios.post(API_URL + 'add-categoria', {
                descrizione,
            });

            if (response.data.accessToken) {
                localStorage.setItem('categoria', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while adding categoria:', error);
        }
    };

    const deleteCategoria = async (id) => {
        try {
            const response = await axios.delete(`${API_URL}categorie/${id}`, {
                id,
            });

            if (response.data.accessToken) {
                localStorage.setItem('categoria', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error('Error while deleting categoria:', error);
        }
    };

    return { getCategorie, addCategoria, deleteCategoria };
};

export default CategoriaService;
