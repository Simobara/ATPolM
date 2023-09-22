import React from 'react';
/* CSS */
import "./modDatiModVisAnn.css"
/* BOOTSTRAP COMPONENTS */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
/* COMPONENTS */
// import RegForm from '../RegForm/regForm';

/* MUI MATERIAL ICONS */
import SaveIcon from '@mui/icons-material/Save';





const ModDatiModVisAnn = ({ show, close }) => {

    return (
        <>
            <Modal
                show={show}
                // close={close}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                center="true"
                dialogClassName="custom-modal"
            >
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter" className="font-weight-bold">
                        <h2>VISUALIZZA ANNUNCIO</h2>
                    </Modal.Title>
                    <Button variant="danger" onClick={close} size="lg">
                        X
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Row className="d-flex justify-content-start mb-4">
                        <Col xs={12} md={6}><h4>IdBando</h4></Col>
                        <Col xs={12} md={6}><h4>DataChiusura</h4></Col>
                        <Col xs={12} md={6}><Form.Control type="text" placeholder="" autoFocus /></Col>
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
                    <Button onClick={close}>{<SaveIcon />}Save and Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModDatiModVisAnn;