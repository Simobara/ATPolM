import React, { useState, useEffect } from "react";

//* CSS
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

//* REACT-VALIDATION
import CittaService from "../../../../../../../../DataAPI/services/aggiuntaCitta.service";

//* COMPONENTS
// import RegForm from '../RegForm/regForm';

//* MUI MATERIAL ICONS
import SaveIcon from "@mui/icons-material/Save";
import CitForm from '../CitForm/citForm';











const CitModalMod = ({ propShow, propClose, propRowID, propDescIdCittaFiltered }) => {
  const [formData, setFormData] = useState({
    id: propRowID,
    descrizione: "",
    cap: "",
    idProvincia: ""
  })

  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [message, setMessage] = useState("");
  // eslint-disable-next-line
  const [errorProv, setErrorProv] = useState(""); // Stato errore per la Provincia

  const [errorDescr, setErrorDescr] = useState("");
  const [errorCap, setErrorCap] = useState("");

  const [isCapValid, setIsCapValid] = useState(false);
  const [isDescrValid, setIsDescrValid] = useState(false);

  const [timeoutCap, setTimeoutCap] = useState(null);

  const [isButtonDisable, setIsButtonDisable] = useState(true);


  const { updateCitta } = CittaService();

  // eslint-disable-next-line
  const formDataId = formData?.id
  console.log("formDataId: ", formDataId)
  // console.log("formData?codice: ", formDataCodice)








  // ************************************************************
  const descIdCittaFilteredData = propDescIdCittaFiltered.filter(item => item.id !== formDataId);
  // **FUNZIONE PER TROVARE SOLO QUEI NOMI(DESCR) DELLE CITTA DA ESCLUDERE NELLA LISTA**
  const descrListaCitNoSpazUPPER = descIdCittaFilteredData.map(item => item.descrizione.replace(/\s+/g, '').toUpperCase());
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "cap") {
      handleCapChange(value);
    } else if (name === "descrizione") {
      handleDescrChange(value);
    }
  };


  const handleCapChange = (value) => {
    const isNumber = /^\d+$/.test(value);

    if (value === "") {
      clearTimeout(timeoutCap);
      setErrorCap("");
    } else if (!isNumber) {
      setIsButtonDisable(true);
      setErrorCap("❌ Solo valori numerici");
    } else if (value.length > 5) {
      setIsButtonDisable(true);
      setIsCapValid(false)
      setErrorCap("❌ NB: Il CAP deve essere di 5 numeri.");
    } else if (value.length < 5) {
      setIsCapValid(false)
      const newTimeoutCap = setTimeout(() => {
        setErrorCap("❌ NB: Il CAP deve essere di 5 numeri.");
      }, 3000); // 3000 millisecondi = 3 secondi
      setTimeoutCap(newTimeoutCap);
    } else {
      setIsCapValid(true)
      setErrorCap("");
    }
    setFormData((prevState) => ({ ...prevState, cap: value }));
  };












  const handleDescrChange = (value) => {
    // ************************************************************

    const valNoSpaziUPPER = value.replace(/\s+/g, '').toUpperCase(); // Rimuove gli spazi dal valore e lo mette upperCase

    const contieneSoloLettere = /^[A-Za-z\s]+$/.test(valNoSpaziUPPER);//true false
    // eslint-disable-next-line 
    const contieneCarattSpeciali = /[!@#$%^&*()[\]{}\-_+=|;:'",.<>?/\\]/.test(valNoSpaziUPPER);//true false

    const isValueInList = descrListaCitNoSpazUPPER.includes(valNoSpaziUPPER);

    if (value === "" && value.length <= 2) {
      setErrorDescr("");
    } else if (contieneCarattSpeciali) {
      setIsButtonDisable(true);
      setIsDescrValid(false)
      // eslint-disable-next-line 
      setErrorDescr("❌ Non si possono inserire simboli: !@#$%^&*()[\]{}\-_+=|;:',.<>?");
    } else if (!contieneSoloLettere) {
      setIsButtonDisable(true);
      setIsDescrValid(false)
      setErrorDescr("❌ Si possono inserire solo lettere");
    } else if (isValueInList) {
      setIsButtonDisable(true);
      setIsDescrValid(false);
      setErrorDescr("❌ Nome Citta' gia' presente in elenco");
    } else if (contieneSoloLettere && !contieneCarattSpeciali && !isValueInList) {
      setIsDescrValid(true)
      setErrorDescr("");
    }

    setFormData((prevState) => ({ ...prevState, descrizione: capitalizeText(value) }));
  }






  function capitalizeText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }


  const handleModCitta = async () => {
    try {
      setErrorProv(""); // Resetta l'errore per la Provincia
      if (!formData?.idProvincia) {
        setErrorProv("Inserisci una Provincia");
        return
      }
      await updateCitta(propRowID, capitalizeText(formData.descrizione), formData.cap, formData.idProvincia);
      setFormData({
        id: propRowID,
        descrizione: "",
        cap: "",
        idProvincia: ""
      })
      console.log("set form data citta --- dati salvati");
      propClose();
    } catch (error) {
      const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      setMessage(resMessage);
    } finally {
      setLoading(false);
    }
  };




  useEffect(() => {
    if (isCapValid && isDescrValid) {

      setIsButtonDisable(false);
    } else {

      setIsButtonDisable(true);
    }
  }, [isCapValid, isDescrValid]);






  return (
    <>
      <Modal
        show={propShow}
        // close={close}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        top
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" className="font-weight-bold">
            <h2>Modifica Citta</h2>
          </Modal.Title>
          <Button variant="danger" onClick={propClose} size="lg">
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
                value={(formData?.descrizione)}
                name="descrizione"
                onChange={handleInputChange}
                style={{ border: '1px solid #ced4da' }}
              />
              {!isDescrValid && formData.descrizione !== "" && (<span style={{ color: 'red', fontSize: '20px', marginTop: '4px' }}>{errorDescr}</span>)}
              {isDescrValid && formData.descrizione !== "" && < span style={{ color: 'green', fontSize: '20px', marginTop: '4px' }}>✅ </span>}
            </Col>
          </Row>
          <Row className="d-flex justify-content-start mb-4">
            <Col xs={12} md={6}><h4>CAP (numero)</h4></Col>
            <Col xs={12} md={6}>
              <Form.Control
                type="text"
                placeholder=""
                className="d-flex justify-content-end"
                value={formData?.cap}
                name="cap"
                onChange={handleInputChange}
                style={{ border: '1px solid #ced4da' }}
              />
              {!isCapValid && formData.cap !== "" && (<span style={{ color: 'red', fontSize: '20px', marginTop: '4px' }}>{errorCap}</span>)}
              {isCapValid && formData.cap !== "" && < span style={{ color: 'green', fontSize: '20px', marginTop: '4px' }}>✅ </span>}
            </Col>
          </Row>
          <Row xs={12} md={6} className="d-flex justify-content-start mb-4">
            <Col xs={12} md={6}><h4>Provincia</h4></Col>
            <Col xs={12} md={6}>
              <Row>
                <Col>
                  <CitForm
                    propFrmData={(e) => {
                      setFormData((prevState) => ({
                        ...prevState,
                        "idProvincia": e
                      }))
                      setErrorProv("");
                    }}// Resetta l'errore quando si seleziona una regione
                    onBlur={() => { if (formData.idProvincia) { setErrorProv(""); } }}
                  />
                  {errorProv && (
                    <p className="text-danger border-danger p-3 rounded fs-4" style={{ borderTop: "4px solid red" }}>
                      {errorProv}
                    </p>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center mt-4">
          <Button onClick={() => handleModCitta()} className="justify-content-around" disabled={isButtonDisable}>{<SaveIcon />}Save and Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CitModalMod;
