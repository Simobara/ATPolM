import React, { useState } from 'react';

//* CSS
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

//*REACT VALIDATION
import FormaGiuridicaService from "../../../../../../../DataAPI/services/formaGiuridica.service";

//* COMPONENTS
// import RegForm from '../RegForm/regForm';

//* MUI MATERIAL ICONS
import SaveIcon from '@mui/icons-material/Save';











const FormGiurModalMod = ({ show, close, id }) => {
    const [descrizione, setDescrizione] = useState()
    // eslint-disable-next-line
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line
    const [message, setMessage] = useState("");

    const [errorMessage, setErrorMessage] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false);





    const { updateFormaGiuridica } = FormaGiuridicaService();


    const handleInputChange = (e) => {
        const { value } = e.target;
        setDescrizione(value);
        setShowErrorMessage(false); // Nascondi il messaggio di errore quando l'utente riprende a scrivere
    };





    const handleUpdate = async () => {
        try {
            if (!descrizione) {
                setErrorMessage("Valore non presente");
                setShowErrorMessage(true);
                return
            } else {
                await updateFormaGiuridica(id, descrizione);

                setDescrizione("");
                setShowErrorMessage(false);
                console.log("set form data provincia --- dati salvati");
                close();
            }
        } catch (error) {
            // eslint-disable-next-line
            const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            setMessage(resMessage);
        } finally {
            setLoading(false);
        }
    };




    return (
        <>
            <Modal
                show={show}
                // close={close}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                top="true" 
                centered
            >
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter" className="font-weight-bold">
                        <h2>Modifica Forma Giuridica</h2>
                    </Modal.Title>
                    <Button variant="danger" onClick={close} size="lg">
                        X
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Row className="d-flex justify-content-start mb-4">
                        <Col xs={12} md={6}><h4>Nome Forma Giuridica</h4></Col>
                        <Col xs={12} md={6}>
                            <Form.Control
                                id="descrizione"
                                name="descrizione"
                                value={descrizione}
                                type="text"
                                className={`mt-2 form-control form_middle_pagenuovo custom-container ${showErrorMessage ? "is-invalid" : ""}`}
                                onChange={handleInputChange}
                                placeholder=""
                                autoFocus
                            />
                            {showErrorMessage && (<div className="invalid-feedback"> <p className="text-danger text-lg font-weight-bold"> {errorMessage} </p> </div>)}
                        </Col>
                    </Row>
                    {/* <Row className="d-flex justify-content-start mb-4">
                        <Col xs={12} md={6}><h4>Codice Regione</h4></Col>
                        <Col xs={12} md={6}>
                            <Row>
                                <Col>
                                    <RegForm />
                                </Col>
                            </Row>
                        </Col>
                    </Row> */}
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center mt-4">
                    <Button onClick={() => handleUpdate()}>{<SaveIcon />}Save and Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FormGiurModalMod;