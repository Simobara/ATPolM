import React, { useState } from 'react';
/* CSS */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* COMPONENTS */
import ProvForm from '../ProvForm/provForm';
import ProvinciaService from "../../../../../../../../DataAPI/services/provincia.service";

/* MUI MATERIAL ICONS */
import SaveIcon from '@mui/icons-material/Save';
import CodiceForm from '../CodiceForm/CodiceForm';





const ProvModalMod = ({ show, close, id }) => {

  const [formData, setFormData] = useState({
    id: id,
    idRegione: "",
    codice: "",

  });



  const { updateProvincia } = ProvinciaService();


  // eslint-disable-next-line
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };



  const updatedvalue = async () => {
    if (!formData?.idRegione || !formData?.codice) return alert("add all value")
    // eslint-disable-next-line 
    const result = await updateProvincia(formData?.id, formData?.codice, formData?.idRegione);
    setFormData({
      id: "",
      idRegione: "",
      codice: "",

    })

    close();
  };
  // console.log(formData, "formData")

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
            <h2>Modifica Provincia</h2>
          </Modal.Title>
          <Button variant="danger" onClick={close} size="lg">
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Row className="d-flex justify-content-start mb-4">
            <Col xs={12} md={6}><h4>Codice Provincia</h4></Col>
            <Col xs={12} md={6}>
              {/* <Form.Control id="idRegione"
              type="text"
              className="mt-2 form-control form_middle_pagenuovo custom-container"
              name="codice"
              value={formData.codice}
              onChange={onChange} /> */}
              <CodiceForm setFormData={(e) => setFormData((prevState) => ({ ...prevState, "codice": e }))} />
            </Col>
          </Row>
          {/* <Row className="d-flex justify-content-start mb-4">
                        <Col xs={12} md={6}><h4>Regione</h4></Col>
                        <Col xs={12} md={6}><Form.Control type="text" placeholder="" autoFocus className="d-flex justify-content-end" /></Col>
                    </Row> */}
          <Row xs={12} md={6} className="d-flex justify-content-start mb-4">
            <Col xs={12} md={6}><h4>Codice Regione</h4></Col>
            <Col xs={12} md={6}>
              <Row>
                <Col>
                  <ProvForm setFormData={(e) => setFormData((prevState) => ({ ...prevState, "idRegione": e }))} />
                  {/* <Form.Control type="text" placeholder="" autoFocus className="d-flex justify-content-end /> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center mt-4">
          <Button onClick={() => updatedvalue()} className="justify-content-around">{<SaveIcon />}Save and Close</Button>
        </Modal.Footer>
      </Modal >
    </>
  );
};

export default ProvModalMod;
