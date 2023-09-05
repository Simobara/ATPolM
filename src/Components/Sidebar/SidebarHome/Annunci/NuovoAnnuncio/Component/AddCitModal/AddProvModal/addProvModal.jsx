import React, { useState } from "react";

//*REACT-BOOTSTRAP
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddBoxIcon from '@mui/icons-material/AddBox'
//*REACT VALIDATION
import ProvinciaService from "../../../../../../../../DataAPI/services/provincia.service";

//* COMPONENTS

import AddRegModal from "./AddRegModal/addRegModal.jsx";

//* MUI MATERIAL ICONS
import SaveIcon from "@mui/icons-material/Save";
import ProvForm from '../../../../../AnagrAz/Localita/Province/Component/ProvForm/provForm';
import CodiceFormAdd from "../../../../../AnagrAz/Localita/Province/Component/CodiceFormAdd/codiceFormAdd";

import "./addProvModal.css";
import axios from "axios";
import { useEffect } from "react";









const ProvModalAdd = ({ propShow, propClose, propListaProvCodAdded }) => {
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
  const [isModalAddRegActive, setIsModalAddRegActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Stato per il termine di ricerca
  const [errorDigit, setErrorDigit] = useState('');


  // eslint-disable-next-line
  const [inputCount, setInputCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // eslint-disable-next-line
  const [isDefaultBorder, setIsDefaultBorder] = useState(true);
  const [inputBorderClass, setInputBorderClass] = useState("form-control");

  const [provinceFound, setProvinceFound] = useState(false);

  const [regioniUPPER, setRegioniUPPER] = useState([]);


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
      propClose();
    } catch (error) {
      const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      setMessage(resMessage);
    } finally {
      setLoading(false);
    }
  };



  const getRegioni = async () => {
    const result = await axios.get("http://localhost:8080/api/regioni");

    const updatedRegUPPER = result?.data.map(region => ({
      ...region,
      descrizione: region.descrizione.toUpperCase(),
      codice: region.codice.toUpperCase()
    }));
    const data = updatedRegUPPER?.sort((a, b) => a.codice > b.codice ? 1 : -1)

    setRegioniUPPER(data);
  };


  useEffect(() => {
    getRegioni();
    // eslint-disable-next-line
  }, [isModalAddRegActive]);
  const regDescrUPPER = regioniUPPER?.map(region => region.descrizione)

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



  const handleAddRegModalOpen = () => {
    setIsModalAddRegActive(true)
    console.log("modalAddLoc open");
  };

  const handleAddRegModalClose = () => {
    setIsModalAddRegActive(false)
    console.log("modalAddLoc close");
  };










  const handleProvinceFound = (nomeProvinciaCompleto, nomeProvinciaItaliano) => {
    console.log("COMP PADRE / PROV ADD TROVATA:", nomeProvinciaCompleto, nomeProvinciaItaliano);
    setProvinceFound(true);
    setInputBorderClass("form-control is-valid");
  };






  return (
    <>
      <Modal
        show={propShow}
        // close={close}
        // size="xl"
        dialogClassName="custom-modal"
        contentClassName="custom-modal-content"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" className="font-weight-bold">
            <h2>Aggiungi Provincia</h2>
          </Modal.Title>
          <Button variant="danger" onClick={propClose} size="lg">
            X
          </Button>
        </Modal.Header>

        <Modal.Body>
          <Row className="d-flex justify-content-start mb-4">
            <Col xs={12} md={2}> <h4>Codice Provincia</h4> </Col>
            <Col xs={12} md={1}></Col>
            <Col xs={12} md={6}>
              <CodiceFormAdd
                propFrmData={(e) => {
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
                propListProvCodAdded={propListaProvCodAdded}
                propSearchTerm={searchTerm}
                propOnProvinceFound={handleProvinceFound} // Passa il termine di ricerca al componente figlio
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
            <Col xs={12} md={3}>
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
                <p style={{ color: 'green', fontSize: '18px' }}>{"<--"} TROVATA PROVINCIA  </p>
              )}
            </Col>
          </Row>

          <Row xs={12} md={6} className="d-flex justify-content-start mb-4">
            <Col xs={12} md={2}><h4>Codice Regione</h4></Col>
            <Col xs={12} md={1}></Col>
            <Col xs={12} md={6}>
              <Row>
                <Col>
                  <ProvForm
                    propFrmData={(e) => {
                      setFormData((prevState) => ({ ...prevState, "idRegione": e }));
                      setErrorRegione(""); // Resetta l'errore quando si seleziona una regione
                    }}
                    className={`form-control ${errorRegione ? "is-invalid" : ""}`}
                    propOnBlur={() => {
                      if (formData.idRegione) {
                        setErrorRegione("");
                      }
                    }}
                    propIsModalAddRegActive={isModalAddRegActive}
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
            <Col xs={12} md={3}> <div className="form-group">
              <button className="btn btn-primary" onClick={() => handleAddRegModalOpen()}>
                {/* {loading && <span className="spinner-border spinner-border-sm"></span>} */}
                <span span > <AddBoxIcon />Aggiungi regione</span>
              </button>
            </div></Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center mt-4">
          <Button onClick={() => handleAddProvincia()}>{<SaveIcon />}Save and Close</Button>
        </Modal.Footer>
      </Modal >
      <div>{isModalAddRegActive && <AddRegModal
        propShow={isModalAddRegActive}
        propClose={handleAddRegModalClose}
        propListaRegDescrAdded={regDescrUPPER} />}</div>
    </>
  );
};

export default ProvModalAdd;
