import React, { useState } from "react";
import axios from "axios";

/* CSS */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* COMPONENTS */
import RegForm from '../AbbrRegForm/abbrRegForm';
import RegioniForm from "../RegioniForm/regioniForm";

/* MUI MATERIAL ICONS */
import SaveIcon from "@mui/icons-material/Save";









const RegModalMod = ({ show, close, id }) => {


  const [formData, setFormData] = useState({
    id: id,
    descrizione: "",
    codice: "",
  });






  // eslint-disable-next-line
  const onChange = (e) => {
    console.log("CHANGE");
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };




  // const updatedvalue = async () => {
  //   if (!formData?.descrizione || !formData?.codice) {
  //     return alert("Add all value")
  //   }


  //   const payload = {
  //     id: id,
  //     descrizione: formData.descrizione,
  //     codice: formData.codice
  //   };
  //   await axios.put(`http://localhost:8080/api/update-regione/${id}`, payload);
  //   close();
  // };




  const handleUpdate = async () => {
    // try catch{
    if (!formData?.descrizione || !formData?.codice) {
      return alert("Aggiungi tutti i valori in Modifica Regione")
    }
    const payload = {
      id: id,
      descrizione: formData.descrizione,
      codice: formData.codice
    };


    await axios.put(`http://localhost:8080/api/update-regione/${id}`, payload);
    close();
  };

  console.log(formData, "formData")



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
          <Modal.Title id="contained-modal-title-vcenter" className="font-weight-bold"> <h2>Modifica Regione</h2> </Modal.Title>
          <Button variant="danger" onClick={close} size="lg">
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Row className="d-flex justify-content-start mb-4">
            <Col xs={12} md={6}> <h4>Nome Regione</h4> </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col> <RegioniForm setFormData={(e) => setFormData((prevState) => ({ ...prevState, "descrizione": e }))} /> </Col>
              </Row>
              {/* <Form.Control
                id="descrizione"
                type="text"
                className="mt-2 form-control form_middle_pagenuovo custom-container"
                name="descrizione"
                value={formData.descrizione}
                onChange={onChange}
                placeholder=""
                autoFocus
              /> */}
            </Col>
          </Row>
          <Row className="d-flex justify-content-start mb-4">
            <Col xs={12} md={6}><h4>Codice Regione</h4></Col>
            <Col xs={12} md={6}>
              <Row>
                <Col> <RegForm setFormData={(e) => setFormData((prevState) => ({ ...prevState, "codice": e }))} /> </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center mt-4">
          <Button onClick={() => handleUpdate()} className="justify-content-around"> {<SaveIcon />}Save and Close </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegModalMod;
