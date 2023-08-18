import React, { useState } from "react";
/* CSS */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";

/*REACT VALIDATION*/
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
import ProvinciaService from "../../../../../../../../DataAPI/services/provincia.service";

/* COMPONENTS */
import ProvForm from '../ProvForm/provForm';
import CodiceFormAdd from "../CodiceFormAdd/codiceFormAdd";

/* MUI MATERIAL ICONS */
import SaveIcon from "@mui/icons-material/Save";










const ProvModalAdd = ({ show, close }) => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    idRegione: "",
    codice: "",
  });





  const { addProvincia } = ProvinciaService();

  // eslint-disable-next-line
  const onChange = (e) => {
    console.log("CHANGE");
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value, }));
  };





  const handleAddProvincia = async (e) => {
    try {
      if (!formData?.idRegione || !formData?.codice) return alert("add all value")
      await addProvincia(formData.codice, formData.idRegione);

      setFormData((prevState) => ({
        ...prevState,
        idRegione: "",
        codice: ''
      }));

      console.log("set form data provincia --- dati salvati");
      close();
    } catch (error) {
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
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" className="font-weight-bold">
            <h2>Aggiungi Provincia</h2>
          </Modal.Title>
          <Button variant="danger" onClick={close} size="lg">
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Row className="d-flex justify-content-start mb-4">
            <Col xs={12} md={6}> <h4>Codice</h4> </Col>
            <Col xs={12} md={6}>
              <CodiceFormAdd setFrmData={(e) => setFormData((prevState) => ({ ...prevState, "codice": e }))} />
            </Col>
          </Row>
          <Row xs={12} md={6} className="d-flex justify-content-start mb-4">
            <Col xs={12} md={6}><h4>Regione</h4></Col>
            <Col xs={12} md={6}>
              <Row>
                <Col>
                  <ProvForm setFrmData={(e) => setFormData((prevState) => ({ ...prevState, "idRegione": e }))} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center mt-4">
          <Button onClick={() => handleAddProvincia()}>{<SaveIcon />}Save and Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProvModalAdd;
