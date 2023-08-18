// import axios from 'axios';
import React, { useState } from 'react';
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

const CodiceForm = ({ setFrmData, codIdProvFiltered, formDatId }) => {
    const [selectedProv, setSelectedProv] = useState('');

    const handleProvSelect = (province) => {
        if (setFrmData) {
            setFrmData(province)
        }
        setSelectedProv(province);

        console.log("formDatId: ", formDatId)
    };





    // **FUNZIONE PER TROVARE SOLO QUEI CODICI DELLE PROVINCE DA ESCLUDERE NELLA LISTA**
    const codiciProvince = codIdProvFiltered.map(item => item.codice);
    console.log("codiciProvince: ", codiciProvince);

    // **FUNZIONE PER TROVARE IL CODICE DELLA PROVINCIA SELEZIONATA**
    const selectedObject = codIdProvFiltered.find(item => item.id === formDatId);
    console.log("Codice trovato:", selectedObject.codice);



    // **PROVINCE FILTRATE ESCLUDENDO QUEI CODICI SOPRA DALLA LISTA**
    const provincesFiltered = provinceItaliane.filter(provincia => !codiciProvince.includes(provincia));
    // console.log("provincesFiltered:", provincesFiltered);

    // **AGGIUNGI LA PROVINCIA DENTRO ARRAY**
    provincesFiltered.push(selectedObject.codice);

    // ORDINA L'ARRAY IN ORDINE ALFABETICO
    provincesFiltered.sort();

    // console.log("UPDATE:", provincesFiltered);









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
                            {provincesFiltered.map((provincia, index) => (
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
