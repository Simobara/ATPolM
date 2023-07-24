import React, { useState } from 'react';
import { Row, Form, Dropdown } from 'react-bootstrap';

const provinceItaliane = [
    'ABR', 'BAS', 'CAL', 'CAM', 'EMR', 'FVG', 'LAZ', 'LIG', 'LOM', 'MAR',
    'MOL', 'PIE', 'PUG', 'SAR', 'SIC', 'TOS', 'TRE', 'UMB', 'VAO', 'VEN',
];

const ProvForm = () => {
    const [selectedProv, setSelectedProv] = useState('');

    const handleProvSelect = (province) => {
        setSelectedProv(province);
    };

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
                            {provinceItaliane.map((provincia, index) => (
                                <Dropdown.Item key={index} onClick={() => handleProvSelect(provincia)}>
                                    {provincia}
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
