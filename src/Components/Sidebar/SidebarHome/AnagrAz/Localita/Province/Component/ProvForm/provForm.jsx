import React, { useState, useEffect } from 'react';

//*REACT-BOOTSTRAP 
import { Row, Form, Dropdown } from 'react-bootstrap';

//*REACT VALIDATION
import axios from 'axios';



// eslint-disable-next-line 
// const provinceItaliane = [
//     'ABR', 'BAS', 'CAL', 'CAM', 'EMR', 'FVG', 'LAZ', 'LIG', 'LOM', 'MAR',
//     'MOL', 'PIE', 'PUG', 'SAR', 'SIC', 'TOS', 'TRE', 'UMB', 'VAO', 'VEN',
// ];
//eslint-disable-next-line
// const regioni = [
//     'ABRUZZO', 'BASILICATA', 'CALABRIA', 'CAMPANIA', 'EMILIA-ROMAGNA', 'FRIULI-VENEZIA-GIULIA',
//     'LAZIO', 'LIGURIA', 'LOMBARDIA', 'MARCHE', 'MOLISE', 'PIEMONTE', 'PUGLIA', 'SARDEGNA', 'SICILIA',
//     'TOSCANA', 'TRENTINO', 'UMBRIA', 'VAL D\'AOSTA', 'VENETO',
// ];

const ProvForm = ({ propFrmData, propIsModalAddRegActive, propRegListCurrent = '', propRegionnSelected = '' }) => {
    const [selectedProv, setSelectedProv] = useState('');

    const [regioniData, setRegioniData] = useState([]);

    // const [regListCurrnt, setRegListCurrnt] = useState([]);



    const handleProvSelect = (provCod, provId) => {
        if (propFrmData) {
            console.log("INDEX", provId)
            propFrmData(provId)
        }
        setSelectedProv(provCod);
    };

    console.log("COMP FRATELLO / propRegionnSelected", propRegionnSelected)


    const getRegioniData = async () => {
        const result = await axios.get("http://localhost:8080/api/regioni");
        const data = result?.data.sort((a, b) => a.codice > b.codice ? 1 : -1)

        // console.log("data", data)
        setRegioniData(data);


        const regListDescrUPPER = data?.map(regione => (regione.descrizione).toUpperCase());

        // setRegListCurrnt(regListDescrUPPER)
        // console.log("regListDescrUPPER", regListDescrUPPER);
        if (typeof propRegListCurrent === 'function') {
            propRegListCurrent(regListDescrUPPER)
        }

    };

    useEffect(() => {
        getRegioniData();
        // eslint-disable-next-line 
    }, [propIsModalAddRegActive]);


    useEffect(() => {
        if (propRegionnSelected) {
            const foundRegion = regioniData.find(region => region.descrizione.toUpperCase() === propRegionnSelected.toUpperCase());

            if (foundRegion) {
                // eslint-disable-next-line 
                const index = regioniData.indexOf(foundRegion);
                handleProvSelect(foundRegion.codice, foundRegion.id);
            }
        }
        // eslint-disable-next-line 
    }, [propRegionnSelected, regioniData]);


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

    const handleDropdownScroll = (e) => {
        e.stopPropagation();
    };




    return (
        <Form>
            <Form.Group controlId="provinceSelect">
                <Dropdown onScroll={handleDropdownScroll} >
                    <Row>
                        <Dropdown.Toggle variant="primary" id="provinceDropdown">
                            Seleziona
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                            style={{
                                maxHeight: '50vh', // Imposta l'altezza massima a 80vh
                                overflowY: 'auto', // Abilita lo scrolling se il contenuto supera l'altezza massima
                            }}
                        >
                            {regioniData?.length > 0 && regioniData?.map((provincia, index) => (
                                <Dropdown.Item
                                    key={index}
                                    onClick={() => handleProvSelect(provincia?.codice, provincia?.id)}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#3174c1';
                                        // Cambio del colore del testo per tutto l'elemento e i suoi figli
                                        e.target.style.color = '#ffffff';
                                        Array.from(e.target.children).forEach(child => {
                                            if (child.tagName === 'SPAN') {
                                                child.style.color = '#ffffff';
                                            }
                                        });
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = selectedProv === provincia?.codice ? '#6aaefb' : 'transparent';
                                        // Ripristino del colore del testo per tutto l'elemento e i suoi figli
                                        const mainColor = selectedProv === provincia?.codice ? '#ffffff' : '#000000';
                                        e.target.style.color = mainColor;
                                        Array.from(e.target.children).forEach(child => {
                                            if (child.tagName === 'SPAN') {
                                                if (child.style.fontWeight === 'bold') {
                                                    child.style.color = mainColor;
                                                } else {
                                                    child.style.color = '#808080'; // Specifico per il primo span
                                                }
                                            }
                                        });
                                    }}
                                    style={{
                                        backgroundColor: selectedProv === provincia?.codice ? '#6aaefb' : 'transparent',
                                        cursor: 'pointer',
                                        color: selectedProv === provincia?.codice ? '#ffffff' : '#000000',
                                        fontSize: '16px',
                                    }}
                                >
                                    <span style={{ color: '#808080' }}>{provincia?.codice}</span>
                                    -
                                    <span style={{ color: '#000000', fontWeight: 'bold' }}>
                                        {/* {regioni[index]} */}
                                        {provincia?.descrizione.toUpperCase()}
                                    </span>
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
