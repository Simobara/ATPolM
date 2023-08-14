import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Form, Dropdown } from 'react-bootstrap';

const provinceItaliane = [
    'AG', 'AL', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AT', 'AV', 'BA',
    'BG', 'BI', 'BL', 'BN', 'BO', 'BR', 'BS', 'BT', 'BZ', 'CA',
    'CB', 'CE', 'CH', 'CI', 'CL', 'CN', 'CO', 'CR', 'CS', 'CT',
    'CZ', 'EN', 'FC', 'FE', 'FG', 'FI', 'FM', 'FR', 'GE', 'GO',
    'GR', 'IM', 'IS', 'KR', 'LC', 'LE', 'LI', 'LO', 'LT', 'LU',
    'MB', 'MC', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NA', 'NO',
    'NU', 'OG', 'OR', 'OT', 'PA', 'PC', 'PD', 'PE', 'PG', 'PI',
    'PN', 'PO', 'PR', 'PT', 'PU', 'PV', 'PZ', 'RA', 'RC', 'RE',
    'RG', 'RI', 'RM', 'RN', 'RO', 'SA', 'SI', 'SO', 'SP', 'SR',
    'SS', 'SV', 'TA', 'TE', 'TN', 'TO', 'TP', 'TR', 'TS', 'TV',
    'UD', 'VA', 'VB', 'VC', 'VE', 'VI', 'VR', 'VS', 'VT', 'VV',
];

const CodiceForm = ({setFormData}) => {
    const [selectedProv, setSelectedProv] = useState('');
  
    const handleProvSelect = (province,index) => {
        if(setFormData)  setFormData(province)
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
                            {provinceItaliane?.map((provincia, index) => (
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

export default CodiceForm;
