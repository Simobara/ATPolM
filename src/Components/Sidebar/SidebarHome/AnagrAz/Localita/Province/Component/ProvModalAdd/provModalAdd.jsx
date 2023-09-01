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
import { provinceSigle, provinceNomiCompleti, provinciaRegione } from "../../ProvSigleNomi/provSigleNomi"

//* MUI MATERIAL ICONS
import SaveIcon from "@mui/icons-material/Save";

const ProvModalAdd = ({ propShow, propClose, propListaProvCodAdded = [] }) => {
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
  const [errorDigit, setErrorDigit] = useState("");


  // eslint-disable-next-line
  const [inputCount, setInputCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // eslint-disable-next-line
  const [isDefaultBorder, setIsDefaultBorder] = useState(true);
  const [inputBorderClass, setInputBorderClass] = useState("form-control");

  const [isProvinceFound, setIsProvinceFound] = useState(false);
  const [remainingProvincesInList, setRemainingProvincesInList] = useState(0);

  // eslint-disable-next-line 
  const [regListCurrent, setRegListCurrent] = useState([]);
  // eslint-disable-next-line
  const [listRegProvSiglFiltered, setListRegProvSiglFiltered] = useState('')
  // const [provSelected, setProvSelected] = useState('')
  const [regSelected, setRegSelected] = useState('')


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


  ///********************************************************* */
  const handleInputDigitChange = (e) => {
    handleRemainProvInList(); // Assicurati che questa funzione aggiorni 'remainingProvincesInList'

    const inputText = e.target.value.toUpperCase();
    const cleanedInput = inputText.replace(/[^A-Z]/g, ''); // Rimuovi numeri e simboli
    setSearchTerm(cleanedInput);
    setInputValue(cleanedInput);

    //*************** TO VERIFY
    if (!cleanedInput || cleanedInput.length === 0) {
      setIsProvinceFound(false);
      setInputBorderClass("form-control");
    } else if (cleanedInput.length <= 1) {
      setIsDefaultBorder(false);
      setInputBorderClass("form-control");
      if (isProvinceFound && remainingProvincesInList === 1) {
        setIsDefaultBorder(true);
        setInputBorderClass("form-control is-valid");
      }
      if (cleanedInput.length >= 3 || remainingProvincesInList === 1) {
        setIsDefaultBorder(false);
        setInputBorderClass("form-control is-invalid");
      }
    }

    // if (cleanedInput.length === 2 && isProvinceFound) {
    //   setIsDefaultBorder(true);
    //   setInputBorderClass("form-control is-valid");
    // } else if (cleanedInput.length === 2 && (!isProvinceFound || remainingProvincesInList === 0)) {
    //   setIsDefaultBorder(false);
    //   setInputBorderClass("form-control is-invalid");
    // }

    // FUNZIONANTE NON IN USO
    // setIsDefaultBorder(cleanedInput.length <= 2);          
    // setInputBorderClass("form-control is-invalid");
    // if (cleanedInput.length === inputText.length) { // Verifica se non ci sono numeri o simboli
    //   setErrorDigit('');
    // } else {
    //   setErrorDigit('Puoi inserire solo lettere');
    // }
    // // Aggiungi questa parte per gestire la reimpostazione del bordo
    // if (cleanedInput.length <= 1) {
    //   setIsDefaultBorder(true);
    //   setInputBorderClass("form-control");
    // }
    // if (!cleanedInput) {
    //   setProvinceFound(false);
    //}



    // Logica per gestire errori di digitazione
    if (cleanedInput.length === inputText.length) {
      setErrorDigit('');
    } else {
      setErrorDigit('Puoi inserire solo lettere');
    }
  };





  const transformRegionNamesToUpper = (provinciaRegione) => {///PRENDE I NOMI DEL JSON E LI METTE IN MAIUSCOLO
    const transformedProvinciaRegione = {};

    for (const [provincia, regione] of Object.entries(provinciaRegione)) {
      transformedProvinciaRegione[provincia] = regione.toUpperCase();
    }
    return transformedProvinciaRegione;
  }










  const handleRemainProvInList = (list) => {
    // console.log("list", list)
    setRemainingProvincesInList(list)
    console.log("PROV TABLE / REMAINING PROV", remainingProvincesInList)
  }


  const handleProvinceFound = (nomeProvinciaCompleto, nomeProvinciaItaliano) => {
    console.log("COMP ADD / PROV ADD TROVATA:", nomeProvinciaCompleto, nomeProvinciaItaliano);
    setIsProvinceFound(true);
    setInputBorderClass("form-control is-valid");
  };


  const handleRegListCurrent = (regList) => {
    setRegListCurrent(regList);
    console.log("COMP ADD / REG", regList);

    const transformedProvinciaRegione = transformRegionNamesToUpper(provinciaRegione);
    console.log("COMP ADD / ProvinciaRegioneUPPER", transformedProvinciaRegione);

    // Filtrare l'oggetto in base alla lista delle regioni
    const filteredProvinciaRegione = Object.fromEntries(
      Object.entries(transformedProvinciaRegione).filter(([provincia, regione]) => {
        return regList.includes(regione);
      })
    );

    console.log("Filtered ProvinciaRegione:", filteredProvinciaRegione);
    // setListRegProvFiltered(filteredProvinciaRegione)
    // Creare un nuovo oggetto per memorizzare le province e le loro sigle
    const regProvAndSigle = {};

    Object.entries(filteredProvinciaRegione).forEach(([provincia, regione]) => {
      const index = provinceNomiCompleti.indexOf(provincia);
      if (index !== -1) {
        const newKey = `${regione}-${provincia}`;
        regProvAndSigle[newKey] = provinceSigle[index];
      }
    });

    console.log("COMP ADD / regProvAndSigle:", regProvAndSigle);

    // Aggiornare lo stato o fare altre operazioni necessarie
    // setListRegProvFiltered(filteredProvinciaRegione);
    setListRegProvSiglFiltered(regProvAndSigle)
  };


  const handleProvSelected = (provSel) => {
    // setProvSelected(provSel)
    // Trova la regione corrispondente
    // 1. Trovare l'indice della sigla selezionata nell'array provinceSigle
    const index = provinceSigle.indexOf(provSel);

    // 2. Ottenere il nome completo della provincia usando lo stesso indice
    const nomeCompleto = provinceNomiCompleti[index];

    // 3. Utilizzare il nome completo per trovare la regione corrispondente
    const regioneCorrispondente = provinciaRegione[nomeCompleto];

    console.log("regioneCorrispondente", regioneCorrispondente)

    if (regioneCorrispondente) {
      setRegSelected(regioneCorrispondente.toUpperCase());
    }
  }


  return (
    <>
      <Modal
        show={propShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        top="true"
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
              {isProvinceFound && inputBorderClass === "form-control is-valid" && (
                <p style={{ color: 'green', fontSize: '18px' }}>TROVATA PROVINCIA {"-->"} </p>
              )}
            </Col>
            <Col xs={12} md={6}>



              <CodiceFormAdd
                propFrmData={(val) => {
                  setFormData((prevState) => ({ ...prevState, "codice": val }));
                  setErrorCodice(""); // Reimposta l'errore quando una provincia viene selezionata
                }}
                // codIdProvFiltered={codIdProvinFiltered}
                // formDatId={formDataId}
                onBlur={() => {
                  if (formData.codice) {
                    setErrorCodice("");
                  }
                }}
                propListProvCodAdded={propListaProvCodAdded}//  QUESTO IL COMPONENTE CHE PASSA LE PROVINCE FINALMENTE
                propSearchTerm={searchTerm}
                propOnProvinceFound={handleProvinceFound} // Passa il termine di ricerca al componente figlio
                propRemainingProvincesInList={handleRemainProvInList}
                propRegProvSiglFiltered={listRegProvSiglFiltered}
                propProvSelected={handleProvSelected}
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
                    propFrmData={(val) => {
                      setFormData((prevState) => ({ ...prevState, "idRegione": val }));
                      setErrorRegione("");
                    }}// Resetta l'errore quando si seleziona una regione
                    className={`form-control ${errorRegione ? "is-invalid" : ""}`}
                    onBlur={() => { if (formData.idRegione) { setErrorRegione(""); } }}
                    style={{
                      transform: 'scale(1.2)', // Modifica la scala del menu a discesa
                      maxHeight: '80vh', // Imposta l'altezza massima a 80vh
                      overflowY: 'auto', // Abilita lo scrolling se il contenuto supera l'altezza massima
                    }}
                    propRegListCurrent={handleRegListCurrent}
                    propRegionnSelected={regSelected}
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
