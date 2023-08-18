import React, { useState } from 'react';
/* CSS */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* COMPONENTS */
import ProvForm from '../ProvForm/provForm';
import CodiceForm from '../CodiceFormMod/codiceFormMod';
import ProvinciaService from "../../../../../../../../DataAPI/services/provincia.service";


/* MUI MATERIAL ICONS */
import SaveIcon from '@mui/icons-material/Save';
















const ProvModalMod = ({ show, close, rowID, codIdProvinFiltered }) => {

  const [formData, setFormData] = useState({
    id: rowID,
    idRegione: "",
    codice: "",

  });

  const formDataId = formData?.id
  console.log("formData: ", formData)
  // console.log("formData?codice: ", formDataCodice)


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
    if (!formData?.codice || !formData?.idRegione) {
      return alert("Aggiungi tutti i valori per: ModificaProvincia")
    }
    // eslint-disable-next-line 
    const result = await updateProvincia(formData?.id, formData?.codice, formData?.idRegione);
    // console.log("setProvinFiltered component2: ", setProvinFiltered)


    setFormData(prevState => ({
      ...prevState,
      codice: "",
      idRegione: "",
    }));


    close();
  };

  // per la verifica del pasaggio dei valori, tutto ok il codice e' da modificare nel componente codiceForm
  // console.log("formDataUNO: ", formData)




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
              <CodiceForm setFrmData={(e) => setFormData((prevState) => ({ ...prevState, "codice": e }))}
                codIdProvFiltered={codIdProvinFiltered}
                formDatId={formDataId} />
            </Col>
          </Row>

          <Row xs={12} md={6} className="d-flex justify-content-start mb-4">
            <Col xs={12} md={6}><h4>Codice Regione</h4></Col>
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
          <Button onClick={() => updatedvalue()} className="justify-content-around">{<SaveIcon />}Save and Close</Button>
        </Modal.Footer>
      </Modal >
    </>
  );
};

export default ProvModalMod;
