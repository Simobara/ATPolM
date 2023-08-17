import React, { useState } from 'react';
import { Row, Form, Dropdown } from 'react-bootstrap';

const regioni = [
    'ABRUZZO', 'BASILICATA', 'CALABRIA', 'CAMPANIA', 'EMILIA-ROMAGNA', 'FRIULI-VENEZIA-GIULIA', 'LAZIO', 'LIGURIA', 'LOMBARDIA', 'MARCHE', 'MOLISE', 'PIEMONTE', 'PUGLIA', 'SARDEGNA', 'SICILIA', 'TOSCANA', 'TRENTINO', 'UMBRIA', 'VAL D\'AOSTA', 'VENETO',
];

const RegioniForm = ({ setFormRegioni }) => {
    const [selectedReg, setSelectedReg] = useState('');

    const handleRegSelect = (region) => {
        if (setFormRegioni) {
            setFormRegioni(region)
        }
        setSelectedReg(region);
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
                            {regioni?.map((regione, index) => (
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

export default RegioniForm;
