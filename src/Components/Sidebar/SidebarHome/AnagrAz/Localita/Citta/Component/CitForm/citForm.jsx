import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Form, Dropdown } from 'react-bootstrap';


function CitForm({ propFrmData, propIsModalAddProvActive }) {
    const [selectedCit, setSelectedCit] = useState('');
    const [province, setProvince] = useState([]);
    const handleCitSelect = (citta, index) => {
        propFrmData(index)
        setSelectedCit(citta);
    };
    const renderCitForm = () => {
        if (selectedCit === '') {
            return null;
        }
        return (
            <Form.Group controlId="provinceDetails">
                <Form.Label>{''}</Form.Label>
                <Form.Control type="text" value={selectedCit} readOnly />
                {/* Aggiungi altri campi del form per i dettagli della provincia qui */}
            </Form.Group>
        );
    };
    const getProvince = async () => {
        const result = await axios.get("http://localhost:8080/api/province");
        // Trasforma ogni codice di provincia in maiuscolo
        const upperCasedProvince = result?.data?.map((province) => ({
            ...province,
            codice: province.codice.toUpperCase()
        }));
        // Ordina le province
        const sortedProvince = upperCasedProvince?.sort((a, b) => {
            if (a.codice < b.codice) return -1;
            if (a.codice > b.codice) return 1;
            return 0;
        });
        setProvince(sortedProvince);
    };




    useEffect(() => {
        getProvince();
    }, [propIsModalAddProvActive]);

    // useEffect(() => {
    //     console.log("estadoProv", estado);
    //     if (!estado) {
    //         getProvince();
    //     }
    // }, [estado]);







    return (
        <Form>
            <Form.Group controlId="cittaSelect">
                <Dropdown>
                    <Row>
                        <Dropdown.Toggle variant="primary" id="cittaDropdown">
                            Seleziona
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {province.length > 0 && province?.map((provincia, index) => (
                                <Dropdown.Item key={index} onClick={() => handleCitSelect(provincia?.codice, provincia?.id)}>
                                    {provincia?.codice}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Row>
                </Dropdown>
            </Form.Group>
            {renderCitForm()}
        </Form>
    );
}

export default CitForm;
