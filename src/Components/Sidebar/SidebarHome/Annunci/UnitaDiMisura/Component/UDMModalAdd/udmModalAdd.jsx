import React, { useState } from 'react';
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


import UnitaDiMisuraService from "../../../../../../../DataAPI/services/unitaDiMisura.service";


const UDMModalAdd = ({ show, close }) => {
    const { addUnitaDiMisura } = UnitaDiMisuraService();
    const [descrizione, setDescrizione] = useState()
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const handleAddUmd = async (e) => {
        try {

            await addUnitaDiMisura(descrizione);

            setDescrizione()
            console.log("set form data provincia --- dati salvati");
            close();
            // eslint-disable-next-line
            const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

        } finally {

        }
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
                        <h2>Aggiungi Unita' di misura</h2>
                    </Modal.Title>
                    <Button variant="danger" onClick={close} size="lg">
                        X
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Row className="d-flex justify-content-start mb-4">
                        <Col xs={12} md={6}><h4>Unità di Misura</h4></Col>
                        <Col xs={12} md={6}><Form.Control type="text" placeholder="" autoFocus value={descrizione} onChange={(e) => setDescrizione(e.target.value)} /></Col>
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
                    <Button onClick={() => handleAddUmd()}>{<SaveIcon />}Save and Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UDMModalAdd;