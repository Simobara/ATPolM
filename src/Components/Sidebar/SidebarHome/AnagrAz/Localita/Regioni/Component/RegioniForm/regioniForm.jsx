import React, { useState } from 'react';
import { Row, Form, Dropdown } from 'react-bootstrap';

const regioni = [
    'ABRUZZO', 'BASILICATA', 'CALABRIA', 'CAMPANIA', 'EMILIA-ROMAGNA', 'FRIULI-VENEZIA-GIULIA',
    'LAZIO', 'LIGURIA', 'LOMBARDIA', 'MARCHE', 'MOLISE', 'PIEMONTE', 'PUGLIA', 'SARDEGNA', 'SICILIA',
    'TOSCANA', 'TRENTINO', 'UMBRIA', 'VAL D\'AOSTA', 'VENETO',
];

const RegioniForm = ({ propFrmRegioni, propListRegDescrAdded = [] }) => {
    const [selectedReg, setSelectedReg] = useState('');


    // console.log("listRegioniAdded:", listRegioniAdded); // Aggiunto console.log qui


    const handleRegSelect = (region) => {
        if (propFrmRegioni) {
            propFrmRegioni(region);
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

    console.log("listRegDescrAdded REGIONIFORM", propListRegDescrAdded)

    const availableRegions = regioni.filter(regione => !propListRegDescrAdded.includes(regione));



    return (
        <Form>
            <Form.Group controlId="regioneSelect">
                <Dropdown>
                    <Row>
                        <Dropdown.Toggle
                            variant="primary"
                            id="regioneDropdown"
                        // style={{ backgroundColor: '#cce4ff', /* Colore blu chiaro */ }}
                        >
                            Seleziona
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {availableRegions?.map((regione, index) => (
                                <Dropdown.Item
                                    key={index}
                                    onClick={() => handleRegSelect(regione)}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#3174c1';
                                        e.target.style.color = '#ffffff'; // Cambio del colore del testo
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = selectedReg === regione ? '#6aaefb' : 'transparent';
                                        e.target.style.color = selectedReg === regione ? '#ffffff' : '#000000'; // Ripristino del colore del testo
                                    }}
                                    style={{
                                        backgroundColor: selectedReg === regione ? '#6aaefb' : 'transparent',
                                        cursor: 'pointer',
                                        color: selectedReg === regione ? '#ffffff' : '#000000',
                                        fontSize: '14px', // Dimensione originale del testo
                                        fontWeight: 'bold', // Aggiunto per enfatizzare il testo selezionato
                                    }}
                                >
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
