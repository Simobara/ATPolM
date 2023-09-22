import React from "react";
/* CSS */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Form from 'react-bootstrap/Form';
/* COMPONENTS */
// import RegForm from '../RegForm/regForm';

/* MUI MATERIAL ICONS */
// import SaveIcon from '@mui/icons-material/Save';

const ProvModalDel = ({ show, close }) => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleConfirm = () => {
    alert("provincia cancel");
    close();
  };

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
            <h2>Conferma</h2>
          </Modal.Title>
          {/* <Button variant="danger" onClick={close} size="lg">
                        X
                    </Button> */}
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={12}>
              <Row className=" mb-4">
                <Col sm={12} md={12}>
                  <h4>Sei sicuro di voler eliminare questa provincia?</h4>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={12} className=" mb-2">
              <div style={{ display: "flex" }}>
                <Button variant="primary" onClick={handleConfirm} block className="w-100 btn-lg" style={{ marginRight: "15px" }}>
                  SI
                </Button>

                <Button variant="danger" onClick={close} block className="w-100 btn-lg" style={{ marginRight: "20px" }}>
                  NO
                </Button>
              </div>
            </Col>
          </Row>
          <Row className=""></Row>
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
};

export default ProvModalDel;
