import React, { useState } from 'react';
import { Row, Form, Dropdown } from 'react-bootstrap';

const abbrRegioni = [
    'ABR', 'BAS', 'CAL', 'CAM', 'EMR', 'FVG', 'LAZ', 'LIG', 'LOM', 'MAR',
    'MOL', 'PIE', 'PUG', 'SAR', 'SIC', 'TOS', 'TRE', 'UMB', 'VAO', 'VEN',
];

const AbbrRegForm = ({ setFormAbbrRegioni, selectedRegVal }) => {
    const [selectedReg, setSelectedReg] = useState('');



    const handleRegSelect = (region) => {
        if (setFormAbbrRegioni) {
            setFormAbbrRegioni(region);
        }
        setSelectedReg(selectedRegVal);
    };

    const renderAbbrRegForm = () => {
        if (selectedReg === '') {
            return null;
        }

        return (
            <Form.Group controlId="regioneDetails">
                <Form.Label>{''}</Form.Label>
                <Form.Control type="text" value={selectedReg} readOnly />
                {/* Aggiungi altri campi del form per i dettagli della provincia qui */}
            </Form.Group>
        );
    };






    return (
        <Form>
            <Form.Group controlId="regioneSelect">
                <Dropdown>
                    <Row>
                        <Dropdown.Toggle variant="primary" id="regioneDropdown">
                            Seleziona
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {abbrRegioni?.map((regione, index) => (
                                <Dropdown.Item key={index} onClick={() => handleRegSelect(regione)}>
                                    {regione}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Row>
                </Dropdown>
            </Form.Group>
            {renderAbbrRegForm()}
        </Form>
    );
}

export default AbbrRegForm;
