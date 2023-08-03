import React, { useState } from "react";
import axios from "axios";

/* CSS */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
/* COMPONENTS */
// import RegForm from '../RegForm/regForm';

/* MUI MATERIAL ICONS */
import SaveIcon from '@mui/icons-material/Save';





const AssModalMod = ({ show, close, id }) => {
    const [updated, setupdated] = useState("");

    const updatedvalue = async () => {
        const payload = {
            descrizione: updated,
        };
        await axios.put(`http://localhost:8080/api/update-categoria/${id}`, payload);
        close();
    };

    return (
        <>
            <Modal
                show={show}
                // close={close}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter" className="font-weight-bold">
                        <h2>Modifica Associazione</h2>
                    </Modal.Title>
                    <Button variant="danger" onClick={close} size="lg">
                        X
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Row className="d-flex justify-content-start mb-4">
                        <Col xs={12} md={6}><h4>Nome Associazione</h4></Col>
                        <Col xs={12} md={6}>
                            <Form.Control type="text" placeholder="" autoFocus onChange={(e) => setupdated(e.target.value)} />
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
                    <Button onClick={() => { updatedvalue(); }} >
                        {<SaveIcon />}Save and Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AssModalMod;