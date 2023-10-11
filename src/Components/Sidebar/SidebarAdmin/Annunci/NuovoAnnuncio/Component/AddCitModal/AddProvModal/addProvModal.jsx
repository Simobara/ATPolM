import React, { useState } from "react";

//*REACT-BOOTSTRAP
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddBoxIcon from "@mui/icons-material/AddBox";
//*REACT VALIDATION
import ProvinciaService from "../../../../../../../../DataAPI/services/provincia.service";

//* COMPONENTS
// import { provinceSigle, provinceNomiCompleti, provinciaRegione } from "../../../C"
import AddRegModal from "./AddRegModal/addRegModal.jsx";

//* MUI MATERIAL ICONS
import SaveIcon from "@mui/icons-material/Save";
import ProvForm from "../../../../../AnagrAz/Localita/Province/Component/ProvForm/provForm";
import CodiceFormAdd from "../../../../../AnagrAz/Localita/Province/Component/CodiceFormAdd/codiceFormAdd";

import "./addProvModal.css";
import axios from "axios";
import { useEffect } from "react";
import { provinceSigle, provinceNomiCompleti, provinciaRegione } from "../../../../../AnagrAz/Localita/Province/ProvSigleNomi/provSigleNomi";

const ProvModalAdd = ({ propShow, propClose, propListaProvCodAdded }) => {
  const [formData, setFormData] = useState({
    idRegione: "",
    codice: "",
  });
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [message, setMessage] = useState("");
  // eslint-disable-next-line
  const [regSelected, setRegSelected] = useState("");
  const [errorRegione, setErrorRegione] = useState(""); // Stato errore per la Regione
  const [errorCodice, setErrorCodice] = useState(""); // Stato errore per il Codice
  const [isModalAddRegActive, setIsModalAddRegActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Stato per il termine di ricerca
  // eslint-disable-next-line
  const [errorDigit, setErrorDigit] = useState("");

  // eslint-disable-next-line
  // const [inputCount, setInputCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // eslint-disable-next-line
  const [isDefaultBorder, setIsDefaultBorder] = useState(true);
  const [inputBorderClass, setInputBorderClass] = useState("form-control");

  const [isProvinceFound, setIsProvinceFound] = useState(false);
  const [remainingProvincesInList, setRemainingProvincesInList] = useState(0);

  const [listRegProvSiglFiltered, setListRegProvSiglFiltered] = useState("");
  // eslint-disable-next-line
  const [provinceFound, setProvinceFound] = useState(false);
  const [regioniUPPER, setRegioniUPPER] = useState([]);
  // eslint-disable-next-line
  const [regListCurrent, setRegListCurrent] = useState([]);

  const { addProvincia } = ProvinciaService();

  // eslint-disable-next-line
  const onChange = (e) => {
    console.log("CHANGE");
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddProvincia = async (e) => {
    try {
      setErrorRegione(""); // Resetta l'errore per la Regione
      setErrorCodice(""); // Resetta l'errore per il Codice

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
        codice: "",
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
  const transformRegionNamesToUpper = (provinciaRegione) => {
    ///PRENDE I NOMI DEL JSON E LI METTE IN MAIUSCOLO
    const transformedProvinciaRegione = {};

    for (const [provincia, regione] of Object.entries(provinciaRegione)) {
      transformedProvinciaRegione[provincia] = regione.toUpperCase();
    }
    return transformedProvinciaRegione;
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
    setListRegProvSiglFiltered(regProvAndSigle);
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

    console.log("COMP PADRE / REGIONE CORRISPONENTE", regioneCorrispondente);

    if (regioneCorrispondente) {
      setRegSelected(regioneCorrispondente.toUpperCase());
    }
  };

  const getRegioni = async () => {
    const result = await axios.get("http://localhost:8080/api/regioni");

    const updatedRegUPPER = result?.data.map((region) => ({
      ...region,
      descrizione: region.descrizione.toUpperCase(),
      codice: region.codice.toUpperCase(),
    }));
    const data = updatedRegUPPER?.sort((a, b) => (a.codice > b.codice ? 1 : -1));

    setRegioniUPPER(data);
  };

  useEffect(() => {
    getRegioni();
    // eslint-disable-next-line
  }, [isModalAddRegActive]);
  const regDescrUPPER = regioniUPPER?.map((region) => region.descrizione);
  const handleRemainProvInList = (list) => {
    // console.log("list", list)
    setRemainingProvincesInList(list);
    console.log("PROV TABLE / REMAINING PROV", remainingProvincesInList);
  };
  const handleInputDigitChange = (e) => {
    handleRemainProvInList(); // Assicurati che questa funzione aggiorni 'remainingProvincesInList'

    const inputText = e.target.value.toUpperCase();
    const cleanedInput = inputText.replace(/[^A-Z]/g, ""); // Rimuovi numeri e simboli
    setSearchTerm(cleanedInput);
    setInputValue(cleanedInput);

    //*************** TO VERIFY
    if (!isProvinceFound && remainingProvincesInList > 0) {
      setIsDefaultBorder(true);
      setInputBorderClass("form-control");
    }
    if (!isProvinceFound && remainingProvincesInList === 0) {
      setIsDefaultBorder(false);
      setInputBorderClass("form-control is-invalid");
    }
    if (cleanedInput.length <= 1) {
      setIsDefaultBorder(true);
      setInputBorderClass("form-control");
    }
    if (cleanedInput.length === 2 || (!isProvinceFound && remainingProvincesInList === 0)) {
      setIsDefaultBorder(false);
      setInputBorderClass("form-control is-invalid");
    } else if (remainingProvincesInList === 0) {
      setIsDefaultBorder(true);
      setInputBorderClass("form-control is-valid");
    } else if (remainingProvincesInList === 1) {
      setIsDefaultBorder(false);
      setInputBorderClass("form-control is-invalid");
    }
    if (!isProvinceFound) {
      setIsDefaultBorder(false);
      setInputBorderClass("form-control is-invalid");
    }
    // Logica per gestire errori di digitazione
    // if (cleanedInput.length === inputText.length) {
    //   setErrorDigit('');
    // } else {
    //   setErrorDigit('Puoi inserire solo lettere');
    // }
  };

  const handleAddRegModalOpen = () => {
    setIsModalAddRegActive(true);
    console.log("modalAddLoc open");
  };

  const handleAddRegModalClose = () => {
    setIsModalAddRegActive(false);
    console.log("modalAddLoc close");
  };

  const handleProvinceFound = (nomeProvinciaCompleto, nomeProvinciaItaliano, provLength) => {
    if (provLength > 1) {
      setIsProvinceFound(false);
      setInputBorderClass("form-control");
    } else if (provLength === 1) {
      setIsProvinceFound(true);
      setInputBorderClass("form-control is-valid");
    } else if (provLength === 0) {
      setIsProvinceFound(false);
      setInputBorderClass("form-control is-invalid");
    }
  };

  console.log(propListaProvCodAdded, "propListaProvCodAdded");

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
          <Row>
            <Col sm={12} md={12} className=" mb-4">
              <Row>
                <Col xs={12} md={2}>
                  {" "}
                  <h4>Codice Provincia</h4>{" "}
                </Col>
                <Col xs={12} md={1}></Col>
                <Col xs={12} md={6}>
                  <CodiceFormAdd
                    propFrmData={(val) => {
                      setFormData((prevState) => ({ ...prevState, codice: val }));
                      setErrorCodice("");
                    }}
                    onBlur={() => {
                      if (formData.codice) {
                        setErrorCodice("");
                      }
                    }}
                    propListProvCodAdded={propListaProvCodAdded} //  QUESTO IL COMPONENTE CHE PASSA LE PROVINCE FINALMENTE
                    propSearchTerm={searchTerm}
                    propOnProvinceFound={handleProvinceFound} // Passa il termine di ricerca al componente figlio
                    propRemainingProvincesInList={handleRemainProvInList}
                    propRegProvSiglFiltered={listRegProvSiglFiltered}
                    propProvSelected={handleProvSelected}  //hold the value of the province selected-----------------------
                    // className={`form-control ${errorCodice ? "is-invalid" : ""}`}
                    style={{
                      maxHeight: "80vh", // Imposta l'altezza massima a 80vh
                      overflowY: "auto", // Abilita lo scrolling se il contenuto supera l'altezza massima
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
                  {errorDigit && <p style={{ color: "red", fontSize: "18px" }}>{errorDigit}</p>}
                  {isProvinceFound && inputBorderClass === "form-control is-valid" && <p style={{ color: "green", fontSize: "18px" }}> {"<--"} TROVATA PROVINCIA </p>}
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={12}>
              <Row>
                <Col xs={12} md={2}>
                  <h4>Codice Regione</h4>
                </Col>
                <Col xs={12} md={1}></Col>
                <Col xs={12} md={6}>
                  <Row>
                    <Col>
                      <ProvForm
                        propFrmData={(val) => {
                          setFormData((prevState) => ({ ...prevState, idRegione: val }));
                          setErrorRegione(""); // Resetta l'errore quando si seleziona una regione
                        }}
                        className={`form-control ${errorRegione ? "is-invalid" : ""}`}
                        propOnBlur={() => {
                          if (formData.idRegione) {
                            setErrorRegione("");
                          }
                        }}
                        propRegListCurrent={handleRegListCurrent}
                        propIsModalAddRegActive={isModalAddRegActive}
                        style={{
                          transform: "scale(1.2)", // Modifica la scala del menu a discesa
                          maxHeight: "80vh", // Imposta l'altezza massima a 80vh
                          overflowY: "auto", // Abilita lo scrolling se il contenuto supera l'altezza massima
                        }}
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
                <Col xs={12} md={3}>
                  {" "}
                  <div className="form-group">
                    <button className="btn btn-primary" onClick={() => handleAddRegModalOpen()}>
                      {/* {loading && <span className="spinner-border spinner-border-sm"></span>} */}
                      <span span>
                        {" "}
                        <AddBoxIcon />
                        Aggiungi regione
                      </span>
                    </button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center mt-4">
          <Button onClick={() => handleAddProvincia()}>{<SaveIcon />}Save and Close</Button>
        </Modal.Footer>
      </Modal>
      <div>{isModalAddRegActive && <AddRegModal propShow={isModalAddRegActive} propClose={handleAddRegModalClose} propListaRegDescrAdded={regDescrUPPER} />}</div>
    </>
  );
};

export default ProvModalAdd;
