import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Form, Dropdown } from 'react-bootstrap';

// eslint-disable-next-line
const provinceItaliane = [
    'ABR', 'BAS', 'CAL', 'CAM', 'EMR', 'FVG', 'LAZ', 'LIG', 'LOM', 'MAR',
    'MOL', 'PIE', 'PUG', 'SAR', 'SIC', 'TOS', 'TRE', 'UMB', 'VAO', 'VEN',
];

const ProvForm = ({ setFormData }) => {
    const [selectedProv, setSelectedProv] = useState('');
    const [regioni, setRegioni] = useState([]);
    const handleProvSelect = (province, index) => {
        if (setFormData) setFormData(index)
        setSelectedProv(province);
    };

    const getRegioni = async () => {
        const result = await axios.get("http://localhost:8080/api/regioni");

        setRegioni(result?.data);
    };
    useEffect(() => {
        getRegioni();
    }, []);


    const filteredRegioni = regioni.filter((regione, index, self) =>
        index === self.findIndex(r => r.codice === regione.codice)
    );

    const sortedRegioni = filteredRegioni.slice().sort((a, b) => a.codice.localeCompare(b.codice));

    const renderProvForm = () => {
        if (selectedProv === '') {
            return null;
        }

        return (
            <Form.Group controlId="provinceDetails">
                <Form.Label>{''}</Form.Label>
                <Form.Control type="text" value={selectedProv} readOnly />
                {/* Aggiungi altri campi del form per i dettagli della provincia qui */}
            </Form.Group>
        );
    };

    return (
        <Form>
            <Form.Group controlId="provinceSelect">
                <Dropdown>
                    <Row>
                        <Dropdown.Toggle variant="primary" id="provinceDropdown">
                            Seleziona
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {sortedRegioni.length > 0 && sortedRegioni?.map((provincia, index) => (
                                <Dropdown.Item key={index} onClick={() => handleProvSelect(provincia?.codice, provincia?.id)}>
                                    {provincia?.codice}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Row>
                </Dropdown>
            </Form.Group>
            {renderProvForm()}
        </Form>
    );
}

export default ProvForm;
