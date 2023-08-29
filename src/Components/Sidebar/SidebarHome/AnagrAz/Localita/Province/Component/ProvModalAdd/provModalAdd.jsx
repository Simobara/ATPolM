import React, { useState } from "react";

//*REACT-BOOTSTRAP
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//*REACT VALIDATION
import ProvinciaService from "../../../../../../../../DataAPI/services/provincia.service";

//* COMPONENTS
import CodiceFormAdd from "../CodiceFormAdd/codiceFormAdd";
import ProvForm from '../ProvForm/provForm';

//* MUI MATERIAL ICONS
import SaveIcon from "@mui/icons-material/Save";











const ProvModalAdd = ({ show, close, listaProvCodAdded }) => {
  const [formData, setFormData] = useState({
    idRegione: "",
    codice: "",
  });
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [message, setMessage] = useState("");

  const [errorRegione, setErrorRegione] = useState(""); // Stato errore per la Regione
  const [errorCodice, setErrorCodice] = useState(""); // Stato errore per il Codice

  const [searchTerm, setSearchTerm] = useState(""); // Stato per il termine di ricerca
  const [errorDigit, setErrorDigit] = useState('');


  // eslint-disable-next-line
  const [inputCount, setInputCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // eslint-disable-next-line
  const [isDefaultBorder, setIsDefaultBorder] = useState(true);
  const [inputBorderClass, setInputBorderClass] = useState("form-control");

  const [provinceFound, setProvinceFound] = useState(false);




  const { addProvincia } = ProvinciaService();

  // eslint-disable-next-line
  const onChange = (e) => {
    console.log("CHANGE");
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value, }));
  };



  const handleAddProvincia = async (e) => {
    try {
      setErrorRegione(""); // Resetta l'errore per la Regione
      setErrorCodice("");  // Resetta l'errore per il Codice

      if (!formData?.idRegione || !formData?.codice) {
        if (!formData?.idRegione) {
          setErrorRegione("Inserisci una Regione");
        }
        if (!formData?.codice) {
          setErrorCodice("Inserisci un Codice");
        }
        return;
      }
      await addProvincia(formData.codice, formData.idRegione);

      setFormData((prevState) => ({
        ...prevState,
        idRegione: "",
        codice: ''
      }));

      console.log("set form data AddProvincia --- dati salvati");
      close();
    } catch (error) {
      const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      setMessage(resMessage);
    } finally {
      setLoading(false);
    }
  };





  const handleInputDigitChange = (e) => {
    const inputText = e.target.value.toUpperCase();
    const cleanedInput = inputText.replace(/[^A-Z]/g, ''); // Rimuovi numeri e simboli

    setSearchTerm(cleanedInput);
    setInputValue(cleanedInput);
    setIsDefaultBorder(cleanedInput.length <= 2);
    setInputBorderClass("form-control is-invalid");

    if (cleanedInput.length === inputText.length) { // Verifica se non ci sono numeri o simboli
      setErrorDigit('');
    } else {
      setErrorDigit('Puoi inserire solo lettere');
    }

    // Aggiungi questa parte per gestire la reimpostazione del bordo
    if (cleanedInput.length <= 1) {
      setIsDefaultBorder(true);
      setInputBorderClass("form-control");
    }
    if (!cleanedInput) {
      setProvinceFound(false);
    }
  };













  const handleProvinceFound = (nomeProvinciaCompleto, nomeProvinciaItaliano) => {
    console.log("COMP PADRE / PROV ADD TROVATA:", nomeProvinciaCompleto, nomeProvinciaItaliano);
    setProvinceFound(true);
    setInputBorderClass("form-control is-valid");
  };






  return (
    <>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        top='true'
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
            <Col xs={12} md={2}> <h4>Codice Provincia</h4> </Col>
            <Col xs={12} md={4}>
              <form>
                <input
                  type="text"
                  placeholder="Cerca Provincia..."
                  // value={searchTerm}
                  onChange={handleInputDigitChange}
                  autoFocus
                  className={inputBorderClass}
                  value={inputValue}
                />
              </form>
              {errorDigit && <p style={{ color: 'red', fontSize: '18px' }}>{errorDigit}</p>}
              {provinceFound && inputBorderClass === "form-control is-valid" && (
                <p style={{ color: 'green', fontSize: '18px' }}>TROVATA PROVINCIA {"-->"} </p>
              )}
            </Col>
            <Col xs={12} md={6}>



              <CodiceFormAdd
                FrmData={(e) => {
                  setFormData((prevState) => ({ ...prevState, "codice": e }));
                  setErrorCodice(""); // Reimposta l'errore quando una provincia viene selezionata
                }}
                // codIdProvFiltered={codIdProvinFiltered}
                // formDatId={formDataId}
                onBlur={() => {
                  if (formData.codice) {
                    setErrorCodice("");
                  }
                }}
                listProvCodAdded={listaProvCodAdded}
                searchTerm={searchTerm}
                onProvinceFound={handleProvinceFound} // Passa il termine di ricerca al componente figlio
                // className={`form-control ${errorCodice ? "is-invalid" : ""}`}
                style={{
                  maxHeight: '80vh', // Imposta l'altezza massima a 80vh
                  overflowY: 'auto', // Abilita lo scrolling se il contenuto supera l'altezza massima
                }}
              />
              {errorCodice && (
                <p className="text-danger border-danger p-3 rounded fs-4" style={{ borderTop: "4px solid red" }}>
                  {errorCodice}
                </p>
              )}
            </Col>
          </Row>



          <Row xs={12} md={6} className="d-flex justify-content-start mb-4">
            <Col xs={12} md={2}><h4>Codice Regione</h4></Col>
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={6}>
              <Row>
                <Col>
                  <ProvForm
                    FrmData={(e) => {
                      setFormData((prevState) => ({ ...prevState, "idRegione": e }));
                      setErrorRegione(""); // Resetta l'errore quando si seleziona una regione
                    }}
                    className={`form-control ${errorRegione ? "is-invalid" : ""}`}
                    onBlur={() => {
                      if (formData.idRegione) {
                        setErrorRegione("");
                      }
                    }}
                    style={{
                      transform: 'scale(1.2)', // Modifica la scala del menu a discesa
                      maxHeight: '80vh', // Imposta l'altezza massima a 80vh
                      overflowY: 'auto', // Abilita lo scrolling se il contenuto supera l'altezza massima
                    }}
                  />
                  {errorRegione && (
                    <p className="text-danger border-danger p-3 rounded fs-4" style={{ borderTop: "4px solid red" }}>
                      {errorRegione}
                    </p>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center mt-4">
          <Button onClick={() => handleAddProvincia()}>{<SaveIcon />}Save and Close</Button>
        </Modal.Footer>
      </Modal >
    </>
  );
};

export default ProvModalAdd;
