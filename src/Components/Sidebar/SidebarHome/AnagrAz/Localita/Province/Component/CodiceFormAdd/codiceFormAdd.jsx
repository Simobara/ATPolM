import React, { useState, useEffect } from 'react';
import { Row, Form, Dropdown } from 'react-bootstrap';
import diacritics from 'diacritics';
import { provinceSigle, provinceNomiCompleti } from "../../ProvSigleNomi/provSigleNomi"




const CodiceForm = ({ propFrmData, propListProvCodAdded = [], propSearchTerm = "", propOnProvinceFound,
    propRemainingProvincesInList = '', propRegProvSiglFiltered = '', propProvSelected = '' }) => {
    const [selectedProv, setSelectedProv] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleProvSelect = (provin) => {
        console.log("COMP FORM ADD / Provincia selezionata:", provin);
        propProvSelected(provin)
        if (propFrmData) {
            propFrmData(provin);
        }
        setSelectedProv(provin);
    };

    console.log('propRegProvSiglFiltered', propRegProvSiglFiltered)
    const onlySigle = Object.values(propRegProvSiglFiltered);
    console.log("Solo le sigle:", onlySigle);

    const searchTermWithoutAccents = diacritics.remove(propSearchTerm.toUpperCase());
    let provinceSigleFiltrate = [];


    if (searchTermWithoutAccents.length <= 2) {
        provinceSigleFiltrate = onlySigle.filter(provincia =>
            !propListProvCodAdded.includes(provincia) &&
            provincia.toUpperCase().includes(searchTermWithoutAccents)
        )
    } else {
        provinceSigleFiltrate = onlySigle.filter(provincia => {
            const nomeCompleto = provinceNomiCompleti[provinceSigle.indexOf(provincia)];
            return !propListProvCodAdded.includes(provincia) &&
                diacritics.remove(nomeCompleto.toUpperCase()).includes(searchTermWithoutAccents);
        });
    }


    console.log("COMP FIGLIO / provinceSigleFiltrate", provinceSigleFiltrate)
    if (provinceSigleFiltrate.length === 1) {
        const provincia = provinceSigleFiltrate[0];
        const nomeCompleto = provinceNomiCompleti[provinceSigle.indexOf(provincia)];
        propOnProvinceFound(provincia, nomeCompleto);
    }

    // console.log("provinceSigleFiltrate", provinceSigleFiltrate)
    if (typeof propRemainingProvincesInList === 'function') {
        propRemainingProvincesInList(provinceSigleFiltrate.length);
    }

    // const remainingProvincesInList = provinceSigleFiltrate?.filter(prov => prov.includes(propSearchTerm));


    const siglaToNomeCompleto = {};
    for (let i = 0; i < provinceSigle.length; i++) {
        siglaToNomeCompleto[provinceSigle[i]] = provinceNomiCompleti[i];
    }




    const renderProvForm = () => {
        if (selectedProv === '') {
            return null;
        }
        return (
            <Form.Group controlId="provinceDetails">
                <Form.Label>{''}</Form.Label>
                <Form.Control type="text" value={selectedProv || propSearchTerm} readOnly />
            </Form.Group>
        );
    };
    useEffect(() => {
        console.log("PropSearchTerm: ", propSearchTerm);
        if (propSearchTerm && propSearchTerm.length > 0 && provinceSigleFiltrate.length > 0) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [propSearchTerm, provinceSigleFiltrate.length]);


    return (
        <Form>
            <Form.Group controlId="provinceSelect">
                <Dropdown show={isOpen} onToggle={(newIsOpen) => setIsOpen(newIsOpen)}>
                    <Row>
                        <Dropdown.Toggle variant="primary" id="provinceDropdown" >
                            Seleziona
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={isOpen ? 'show' : ''}>
                            {provinceSigleFiltrate.map((provincia, index) => (
                                <Dropdown.Item
                                    key={index}
                                    onClick={() => handleProvSelect(provincia)}
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
                                        e.target.style.backgroundColor = selectedProv === provincia ? '#6aaefb' : 'transparent';
                                        // Ripristino del colore del testo per tutto l'elemento e i suoi figli
                                        const mainColor = selectedProv === provincia ? '#ffffff' : '#000000';
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
                                        backgroundColor: selectedProv === provincia ? '#6aaefb' : 'transparent',
                                        cursor: 'pointer',
                                        color: selectedProv === provincia ? '#ffffff' : '#000000',
                                        fontSize: '16px',
                                    }}
                                >
                                    <span style={{ color: '#808080' }}>{provincia}</span>
                                    -
                                    <span style={{ color: '#000000', fontWeight: 'bold' }}>
                                        {siglaToNomeCompleto[provincia]}
                                    </span>
                                </Dropdown.Item>


                            ))}
                        </Dropdown.Menu>
                    </Row>
                </Dropdown>
            </Form.Group>
            <div style={{ height: '20px' }} /> {/* Aggiungi uno spazio di 20px tra i due elementi */}

            {renderProvForm()}
        </Form>
    );
}

export default CodiceForm;