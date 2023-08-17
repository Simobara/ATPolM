import React, { useState } from "react";

/* CSS */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/*REACT VALIDATION*/
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
import RegioneService from "../../../../../../../../DataAPI/services/regione.service";

/* COMPONENTS */
// import AbbrRegForm from "../AbbrRegForm/abbrRegForm";
import RegioniForm from "../RegioniForm/regioniForm";
import RegioneMappings from "../RegioneMappings/regioneMappings";

/* MUI MATERIAL ICONS */
import SaveIcon from "@mui/icons-material/Save";









const RegModalAdd = ({ show, close }) => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    codice: "",
    descrizione: "",
  });
  const [selectedRegionValue, setSelectedRegionValue] = useState("");


  const { addRegione } = RegioneService();



  // eslint-disable-next-line 
  const onChange = (e) => {
    // .log("CHANGE");
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };





  const handleAddRegione = async () => {
    try {
      if (!formData?.descrizione) {
        return alert("Aggiungi valori per AggiungiRegione");
      }

      const mappingRegione = RegioneMappings[selectedRegionValue];
      console.log("mappingRegione:", mappingRegione);


      let updatedFormData = { ...formData }; // Crea una nuova istanza di oggetto formData

      if (mappingRegione) {
        updatedFormData.codice = mappingRegione.codice;
        updatedFormData.descrizione = mappingRegione.descrizione;
      }
      await addRegione(updatedFormData.codice, updatedFormData.descrizione);

      console.log("updatedFormData:", updatedFormData);
      setFormData({
        codice: updatedFormData.codice,
        descrizione: ""
      });



      close();
    } catch (error) {
      const resMessage =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
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
            <h2>Aggiungi Regione</h2>
          </Modal.Title>
          <Button variant="danger" onClick={close} size="lg">
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Row className="d-flex justify-content-start mb-4">
            <Col xs={12} md={6}> <h4>Nome Regione</h4> </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col>
                  <RegioniForm
                    setFormRegioni={(reg) => {
                      setFormData((prevState) => ({
                        ...prevState,
                        "descrizione": reg,
                      }))
                      setSelectedRegionValue(reg)
                    }}
                  />
                </Col>
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
          {/* <Row xs={12} md={6} className="d-flex justify-content-start mb-4">
            <Col xs={12} md={6}><h4>Codice Regione</h4></Col>
            <Col xs={12} md={6}>
              <Row>
                <Col>
                  <AbbrRegForm
                    setFormAbbrRegioni={(e) => setFormData((prevState) => ({
                      ...prevState,
                      "codice": e
                    }))}
                    selectedRegVal={selectedRegionValue}
                  />
                </Col>
              </Row>
            </Col>
          </Row> */}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center mt-4">
          <Button onClick={() => handleAddRegione()}>{<SaveIcon />}Save and Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegModalAdd;