import React, { useState, useEffect } from 'react';
import { Row, Form, Dropdown } from 'react-bootstrap';
import diacritics from 'diacritics';
import { provinceSigle, provinceNomiCompleti } from "../../ProvSigleNomi/provSigleNomi"




const CodiceFormMod = ({ propFrmData, proplistProvCodAdded = [], propSearchTerm = "", propOnProvinceFound = '', propRowProvincia = '' }) => {
    const [selectedProv, setSelectedProv] = useState('');

    const handleProvSelect = (provin) => {
        if (propFrmData) {
            propFrmData(provin);
        }
        setSelectedProv(provin);
    };
    const searchTermWithoutAccents = diacritics.remove(propSearchTerm.toUpperCase());
    let provinceSigleFiltrate = [];
    if (searchTermWithoutAccents.length <= 2) {
        provinceSigleFiltrate = provinceSigle.filter(provincia => {
            let filterData = proplistProvCodAdded?.filter((data) => data !== propRowProvincia)
            return !filterData.includes(provincia) &&
                provincia.toUpperCase().includes(searchTermWithoutAccents)
        }
        );
    } else {
        provinceSigleFiltrate = provinceSigle.filter(provincia => {
            const nomeCompleto = provinceNomiCompleti[provinceSigle.indexOf(provincia)];
            let filterData = proplistProvCodAdded?.filter((data) => data !== propRowProvincia)
            return !filterData.includes(provincia) &&
                diacritics.remove(nomeCompleto.toUpperCase()).includes(searchTermWithoutAccents);
        });
    }




    useEffect(() => {
        if (provinceSigleFiltrate.length === 1) {
            const provincia = provinceSigleFiltrate[0];
            const nomeCompleto = provinceNomiCompleti[provinceSigle.indexOf(provincia)];
            propOnProvinceFound(provincia, nomeCompleto);
        }
        // eslint-disable-next-line 
    }, [provinceSigleFiltrate]);









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

    return (
        <Form>
            <Form.Group controlId="provinceSelect">
                <Dropdown>
                    <Row>
                        <Dropdown.Toggle variant="primary" id="provinceDropdown" >
                            Seleziona
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
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
                                        {provinceNomiCompleti[provinceSigle.indexOf(provincia)]}
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

export default CodiceFormMod;