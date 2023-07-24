import React from 'react';
/* CSS */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
/* COMPONENTS */

/* MUI MATERIAL ICONS */
import SaveIcon from '@mui/icons-material/Save';
import CitForm from '../CitForm/citForm';




const CitModal = ({ show, close }) => {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            <Modal
                show={show}
                // close={close}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter" className="font-weight-bold">
                        <h2>Modifica Citta'</h2>
                    </Modal.Title>
                    <Button variant="danger" onClick={close} size="lg">
                        X
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Row className="d-flex justify-content-start mb-4">
                        <Col xs={12} md={6}><h4>Nome Citta'</h4></Col>
                        <Col xs={12} md={6}><Form.Control type="text" placeholder="" autoFocus /></Col>
                    </Row>
                    <Row className="d-flex justify-content-start mb-4">
                        <Col xs={12} md={6}><h4>CAP</h4></Col>
                        <Col xs={12} md={6}><Form.Control type="text" placeholder="" autoFocus className="d-flex justify-content-end" /></Col>
                    </Row>
                    <Row xs={12} md={6} className="d-flex justify-content-start mb-4">
                        <Col xs={12} md={6}><h4>Provincia</h4></Col>
                        <Col xs={12} md={6}>
                            <Row>
                                <Col>
                                    <CitForm />
                                    {/* <Form.Control type="text" placeholder="" autoFocus className="d-flex justify-content-end /> */}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center mt-4">
                    <Button onClick={close} className="justify-content-around">{<SaveIcon />}Save and Close</Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default CitModal;