import React, { useState } from "react";

//* CSS
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//*REACT VALIDATION

//* COMPONENTS
// import AbbrRegForm from "../AbbrRegForm/abbrRegForm";


//* MUI MATERIAL ICONS
import SaveIcon from "@mui/icons-material/Save";
import RegioneService from "../../../../../../../../../DataAPI/services/regione.service";
import RegioniForm from "../../../../../../AnagrAz/Localita/Regioni/Component/RegioniForm/regioniForm";
import RegioneMappings from "../../../../../../AnagrAz/Localita/Regioni/Component/RegioneMappings/regioneMappings"









const RegModalAdd = ({ show, close, listaRegDescrAdded }) => {
  const [formData, setFormData] = useState({
    codice: "",
    descrizione: "",
  });

  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [message, setMessage] = useState("");
  const [selectedRegionValue, setSelectedRegionValue] = useState("");
  const [error, setError] = useState("");



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
      console.log("listaRegDescrAdded:", listaRegDescrAdded);/// IMP IMP IMP TOTALE VALORI (coppia valori)DENTRO GLI ARRAY
      if (!formData?.descrizione) {
        setError("Inserisci una regione");
        return
      }
      const mappingRegione = RegioneMappings[selectedRegionValue];
      // console.log("mappingRegione:", mappingRegione);

      let updatedFormData = { ...formData }; // Crea una nuova istanza di oggetto formData
      if (mappingRegione) {
        updatedFormData.codice = mappingRegione.codice;
        updatedFormData.descrizione = mappingRegione.descrizione;
      }
      await addRegione(updatedFormData.codice, updatedFormData.descrizione);
      // console.log("updatedFormData:", updatedFormData);// aggiornamento sul singolo valore inserito(coppia di valori)
      // console.log("formData: ", formData)

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
        dialogClassName="custom-modal"
                contentClassName="custom-modal-content"
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
                    FrmRegioni={(reg) => {
                      setFormData((prevState) => ({ ...prevState, "descrizione": reg, }));
                      setSelectedRegionValue(reg)
                      setError("");
                    }}
                    listRegDescrAdded={listaRegDescrAdded}
                  />
                  {error && (<p className="text-danger border-danger p-3 rounded fs-4" style={{ borderTop: "4px solid red" }}> {error} </p>)}
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