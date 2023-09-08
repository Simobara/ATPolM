import React, { useState, useEffect } from "react";
/* CSS */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

/*REACT VALIDATION*/
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";


/* COMPONENTS */
// import RegForm from '../RegForm/regForm';

/* MUI MATERIAL ICONS */
import SaveIcon from "@mui/icons-material/Save";
import CitForm from "../../../../AnagrAz/Localita/Citta/Component/CitForm/citForm";
import CittaService from "../../../../../../../DataAPI/services/citta.service";
import AddProvModal from "./AddProvModal/addProvModal";
import AddBoxIcon from '@mui/icons-material/AddBox'
import axios from "axios";

const CitModalAdd = ({ propShow, propClose, propListaCitDescrAdded, estado = '' }) => {
  const [formData, setFormData] = useState({
    descrizione: "",
    cap: "",
    idProvincia: ""

  })
  const { addCitta } = CittaService();


  const [errorCap, setErrorCap] = useState("");
  const [errorDescr, setErrorDescr] = useState("");
  const [province, setProvince] = useState([]);
  const [isCapValid, setIsCapValid] = useState(false);
  const [isDescrValid, setIsDescrValid] = useState(false);

  const [timeoutCap, setTimeoutCap] = useState(null);

  const [isButtonDisable, setIsButtonDisable] = useState(true);
  const [isModalAddProvActive, setIsModalAddProvActive] = useState(false);





  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "cap") {
      handleCapChange(value);
    } else if (name === "descrizione") {
      handleDescrChange(value);
    }
  };


  const handleAddProvModalOpen = () => {
    setIsModalAddProvActive(true)
    console.log("modalAddLoc open");
  };
  const handleAddProvModalClose = () => {
    setIsModalAddProvActive(false)

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


  const getProvince = async () => {
    const result = await axios.get("http://localhost:8080/api/province");

    // Trasforma ogni codice di provincia in maiuscolo
    const upperCasedProvince = result?.data?.map((province) => ({
      ...province,
      codice: province.codice.toUpperCase()
    }));

    // Ordina le province
    const sortedProvince = upperCasedProvince?.sort((a, b) => {
      if (a.codice < b.codice) return -1;
      if (a.codice > b.codice) return 1;
      return 0;
    });
console.log(sortedProvince,"sortedProvince")
    setProvince(sortedProvince);
  };

  useEffect(() => {
    getProvince();
  }, []);


  useEffect(() => {
    console.log("estadoProv", estado);
    if (!estado) {
      getProvince();
    }
  }, [estado]);







  useEffect(() => {
    getProvince();
    // eslint-disable-next-line 
  }, [isModalAddProvActive]);





  const provCod = province.map(prov => prov.codice)






  const handleDescrChange = (val) => {
    console.log(val, propListaCitDescrAdded, "valvalvalval")
    const cleanedValueUPPER = val.replace(/\s+/g, '').toUpperCase();
    const containsOnlyLettersUPPER = /^[A-Za-z\s]+$/.test(cleanedValueUPPER);
    // eslint-disable-next-line 
    const containsSpecialCharsUPPER = /[!@#$%^&*()[\]{}\-_+=|;:'",.<>?/\\]/.test(cleanedValueUPPER);
    const listaCitDescrAddedUPPER = propListaCitDescrAdded.map((desc) => desc.replace(/\s+/g, '').toUpperCase());

    const isCityAlreadyAddedUPPER = listaCitDescrAddedUPPER.includes(cleanedValueUPPER);
    console.log(-1, listaCitDescrAddedUPPER, containsOnlyLettersUPPER, containsSpecialCharsUPPER)


    if (cleanedValueUPPER === "" && val.length <= 2) {
      console.log(0)
      setErrorDescr("");
    } else if (containsSpecialCharsUPPER) {
      console.log(1)
      setIsButtonDisable(true);
      setIsDescrValid(false)
      // eslint-disable-next-line 
      setErrorDescr("❌ Non si possono inserire simboli: !@#$%^&*()[\]{}\-_+=|;:',.<>?");
    } else if (isCityAlreadyAddedUPPER) {
      console.log(2)
      setIsButtonDisable(true);
      setIsDescrValid(false)
      setErrorDescr("❌ Nome Citta' gia' presente in elenco");
    } else if (!containsOnlyLettersUPPER) {
      console.log(3)
      setIsButtonDisable(true);
      setIsDescrValid(false)
      setErrorDescr("❌ Si possono inserire solo lettere");
    } else if (val.length >= 3 && containsOnlyLettersUPPER && !containsSpecialCharsUPPER && !isCityAlreadyAddedUPPER) {
      setIsDescrValid(true)
      setErrorDescr("");
    }



    setFormData((prevState) => ({ ...prevState, descrizione: capitalizeText(val) }));
  }




  function capitalizeText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  const handleUpdate = async () => {
    try {
      if (!formData?.descrizione || !formData?.cap || !formData?.idProvincia) {
        return alert("Inserisci tutti i valori in: AggiungiCitta'")
      }
      await addCitta(capitalizeText(formData.descrizione), formData.cap, formData.idProvincia);
      setFormData({
        descrizione: "",
        cap: "",
        idProvincia: ""
      })
      console.log("set form data citta --- dati salvati");
      propClose();
    } catch (error) {
      // eslint-disable-next-line
      const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    } finally {
    }
  };
  // console.log(formData, "formdata")



  useEffect(() => {
    console.log("calll", isCapValid, isDescrValid)
    if (isCapValid && isDescrValid) {
      setIsButtonDisable(false);
    } else {
      setIsButtonDisable(true);
    }
  }, [isCapValid, isDescrValid]);






  console.log(isButtonDisable, "isButtonDisableisButtonDisableisButtonDisableisButtonDisable")

  return (
    <>
      <Modal
        show={propShow}
        // close={close}
        dialogClassName="custom-modal"
        contentClassName="custom-modal-content"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" className="font-weight-bold">
            <h2>Aggiungi Citta'</h2>
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
                value={formData?.descrizione}
                name="descrizione"
                onChange={handleInputChange}
              />
              {!isDescrValid && formData?.descrizione !== "" && (<span style={{ color: 'red', fontSize: '20px', marginTop: '4px' }}>{errorDescr}</span>)}
              {isDescrValid && formData?.descrizione !== "" && < span style={{ color: 'green', fontSize: '20px', marginTop: '4px' }}>✅ </span>}
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
              />
              {!isCapValid && formData?.cap !== "" && (<span style={{ color: 'red', fontSize: '20px', marginTop: '4px' }}>{errorCap}</span>)}
              {isCapValid && formData?.cap !== "" && < span style={{ color: 'green', fontSize: '20px', marginTop: '4px' }}>✅ </span>}
            </Col>
          </Row>
          <Row xs={12} md={6} className="d-flex justify-content-start mb-4">
            <Col xs={12} md={6}><h4>Provincia</h4></Col>
            <Col xs={12} md={3}>
              <Row>
                <Col>
                  <CitForm
                    propFrmData={(e) => setFormData((prevState) => ({
                      ...prevState,
                      "idProvincia": e
                    }))}
                    propIsModalAddProvActive={isModalAddProvActive}
                  />
                  {/* <Form.Control type="text" placeholder="" autoFocus className="d-flex justify-content-end /> */}
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={3}>
              <div className="form-group">
                <button className="btn btn-primary" onClick={() => handleAddProvModalOpen()}>
                  {/* {loading && <span className="spinner-border spinner-border-sm"></span>} */}
                  <span span > <AddBoxIcon />Aggiungi provincia</span>
                </button>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center mt-2">
          <Button onClick={() => handleUpdate()} disabled={isButtonDisable} className="justify-content-around">{<SaveIcon />}Save and Close</Button>
        </Modal.Footer>
      </Modal >

      <div>{isModalAddProvActive && <AddProvModal
        propShow={isModalAddProvActive}
        propClose={handleAddProvModalClose}
        propListaProvCodAdded={provCod} />}
      </div>
    </>
  );
};

export default CitModalAdd;
