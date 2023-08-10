import React from 'react';
/* CSS */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
/* COMPONENTS */
// import RegForm from '../RegForm/regForm';

/* MUI MATERIAL ICONS */
// import SaveIcon from '@mui/icons-material/Save';





const CitModalDel = ({ show, close }) => {
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const handleConfirm = () => {
        alert("citta cancel");
        close();
    }



    return (
        <>
            <Modal
                show={show}
                // close={close}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter" className="font-weight-bold">
                        <h2>Conferma</h2>
                    </Modal.Title>
                    {/* <Button variant="danger" onClick={close} size="lg">
                        X
                    </Button> */}
                </Modal.Header>
                <Modal.Body>
                    <Row className="d-flex justify-content-start mb-4">
                        <h4>Sei sicuro di voler eliminare questa citta?</h4>
                        {/* <Col xs={12} md={6}>
                            <Form.Control type="text" placeholder="" autoFocus />
                        </Col> */}
                    </Row>
                    <Row className="d-flex justify-content-around">
                        <Col xs={12} md={6}>
                            <Button variant="primary" onClick={handleConfirm} block className="w-100 btn-lg">SI</Button>
                        </Col>
                        <Col xs={12} md={6}>
                            <Button variant="danger" onClick={close} block className="w-100 btn-lg">NO</Button>
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
                {/* <Modal.Footer className="d-flex justify-content-center mt-4">
                    <Button onClick={close}>{<SaveIcon />}Save and Close</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default CitModalDel;