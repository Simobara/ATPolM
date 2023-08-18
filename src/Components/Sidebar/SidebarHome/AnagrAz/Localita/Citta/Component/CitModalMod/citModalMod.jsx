import React, { useState } from "react";
// import axios from "axios";

/* CSS */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
/* COMPONENTS */
// import RegForm from '../RegForm/regForm';

/* MUI MATERIAL ICONS */
import SaveIcon from "@mui/icons-material/Save";
import CitForm from '../CitForm/citForm';

import CittaService from "../../../../../../../../DataAPI/services/citta.service";












const CitModalMod = ({ show, close, rowID, descIdCittaFiltered }) => {
  const [formData, setFormData] = useState({
    id: rowID,
    descrizione: "",
    cap: "",
    idProvincia: ""
  })

  const [error, setError] = useState("");
  const [disableSaveButton, setDisableSaveButton] = useState(false);




  // eslint-disable-next-line
  const formDataId = formData?.id
  console.log("formData: ", formDataId)
  // console.log("formData?codice: ", formDataCodice)


  // ************************************************************
  // **FUNZIONE PER TROVARE SOLO QUEI NOMI(DESCR) DELLE CITTA DA ESCLUDERE NELLA LISTA**
  const descrCitta = descIdCittaFiltered.map(item => item.descrizione);
  console.log("descrCitta: ", descrCitta);

  // **FUNZIONE PER TROVARE IL CODICE DELLA PROVINCIA SELEZIONATA**
  const selectedObject = descIdCittaFiltered.find(item => item.id === formDataId);
  console.log("Codice trovato:", selectedObject.descrizione);



  // ************************************************************


  const { updateCitta } = CittaService();

  // eslint-disable-next-line
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (descrCitta.includes(value) && value !== selectedObject.descrizione) {
      setDisableSaveButton(true)
      setError("Non puoi inserire un nome di città già esistente");
    } else {
      setError("");
      setDisableSaveButton(false)
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleUpdate = async () => {
    try {
      if (!formData.descrizione || !formData.cap || !formData.idProvincia) {
        return alert("Aggiungi tutti i valori corretti per: ModificaCitta")
      }




      await updateCitta(rowID, formData.descrizione, formData.cap, formData.idProvincia);
      setFormData({
        id: rowID,
        descrizione: "",
        cap: "",
        idProvincia: ""
      })
      console.log("set form data citta --- dati salvati");
      close();
    } catch (error) {
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
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" className="font-weight-bold">
            <h2>Modifica Citta</h2>
          </Modal.Title>
          <Button variant="danger" onClick={close} size="lg">
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Row className="d-flex justify-content-start mb-4">
            <Col xs={12} md={6}><h4>Nome Citta'</h4></Col>
            <Col xs={12} md={6}>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
                value={formData.descrizione}
                name="descrizione"
                onChange={handleChange}
                style={{ border: error ? '1px solid red' : '1px solid #ced4da' }}
              />
              {error && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{error}</p>}
            </Col>
          </Row>
          <Row className="d-flex justify-content-start mb-4">
            <Col xs={12} md={6}><h4>CAP (numero)</h4></Col>
            <Col xs={12} md={6}>
              <Form.Control
                type="text"
                placeholder=""
                className="d-flex justify-content-end"
                value={formData.cap}
                name="cap"
                onChange={handleChange}
                disabled={error !== ""}
                style={{ backgroundColor: error !== "" ? "#9da4aa" : "white", color: "#333" }}
              />
            </Col>
          </Row>
          <Row xs={12} md={6} className="d-flex justify-content-start mb-4">
            <Col xs={12} md={6}><h4>Provincia</h4></Col>
            <Col xs={12} md={6}>
              <Row>
                <Col>
                  <CitForm setFormData={(e) => setFormData((prevState) => ({
                    ...prevState,
                    "idProvincia": e
                  }))}
                  />
                  {/* <Form.Control type="text" placeholder="" autoFocus className="d-flex justify-content-end /> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center mt-4">
          <Button onClick={() => handleUpdate()} className="justify-content-around" disabled={disableSaveButton}>{<SaveIcon />}Save and Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CitModalMod;
