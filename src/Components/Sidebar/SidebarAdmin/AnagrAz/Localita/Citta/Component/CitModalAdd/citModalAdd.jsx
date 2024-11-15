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
import CittaService from "../../../../../../../../DataAPI/services/citta.service";

/* COMPONENTS */
// import RegForm from '../RegForm/regForm';

/* MUI MATERIAL ICONS */
import SaveIcon from "@mui/icons-material/Save";
import CitForm from "../CitForm/citForm";

const CitModalAdd = ({ propShow, propClose, propListaCitDescrAdded }) => {
  const [formData, setFormData] = useState({
    descrizione: "",
    cap: "",
    idProvincia: "",
  });
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

  const { addCitta } = CittaService();

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
      setIsCapValid(false);
      setErrorCap("❌ NB: Il CAP deve essere di 5 numeri.");
    } else if (value.length < 5) {
      setIsCapValid(false);
      const newTimeoutCap = setTimeout(() => {
        setErrorCap("❌ NB: Il CAP deve essere di 5 numeri.");
      }, 3000); // 3000 millisecondi = 3 secondi
      setTimeoutCap(newTimeoutCap);
    } else {
      setIsCapValid(true);
      setErrorCap("");
    }
    setFormData((prevState) => ({ ...prevState, cap: value }));
  };

  const handleDescrChange = (val) => {
    console.log(val, propListaCitDescrAdded, "valvalvalval");
    const cleanedValueUPPER = val.replace(/\s+/g, "").toUpperCase();
    const containsOnlyLettersUPPER = /^[A-Za-z\s]+$/.test(cleanedValueUPPER);
    // eslint-disable-next-line
    const containsSpecialCharsUPPER = /[!@#$%^&*()[\]{}\-_+=|;:'",.<>?/\\]/.test(cleanedValueUPPER);
    const listaCitDescrAddedUPPER = propListaCitDescrAdded.map((desc) => desc.replace(/\s+/g, "").toUpperCase());

    const isCityAlreadyAddedUPPER = listaCitDescrAddedUPPER.includes(cleanedValueUPPER);
    console.log(-1, listaCitDescrAddedUPPER, containsOnlyLettersUPPER, containsSpecialCharsUPPER);

    if (cleanedValueUPPER === "" && val.length <= 2) {
      console.log(0);
      setErrorDescr("");
    } else if (containsSpecialCharsUPPER) {
      console.log(1);
      setIsButtonDisable(true);
      setIsDescrValid(false);
      // eslint-disable-next-line
      setErrorDescr("❌ Non si possono inserire simboli: !@#$%^&*()[]{}-_+=|;:',.<>?");
    } else if (isCityAlreadyAddedUPPER) {
      console.log(2);
      setIsButtonDisable(true);
      setIsDescrValid(false);
      setErrorDescr("❌ Nome Citta' gia' presente in elenco");
    } else if (!containsOnlyLettersUPPER) {
      console.log(3);
      setIsButtonDisable(true);
      setIsDescrValid(false);
      setErrorDescr("❌ Si possono inserire solo lettere");
    } else if (val.length >= 3 && containsOnlyLettersUPPER && !containsSpecialCharsUPPER && !isCityAlreadyAddedUPPER) {
      setIsDescrValid(true);
      setErrorDescr("");
    }

    setFormData((prevState) => ({ ...prevState, descrizione: capitalizeText(val) }));
  };

  function capitalizeText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  const handleAddCitta = async () => {
    try {
      setErrorProv(""); // Resetta l'errore per la Provincia

      if (!formData?.idProvincia) {
        setErrorProv("Inserisci una Provincia");
        return;
      }

      await addCitta(capitalizeText(formData.descrizione), formData.cap, formData.idProvincia);
      setFormData({
        descrizione: "",
        cap: "",
        idProvincia: "",
      });
      console.log("set form data citta --- dati salvati");
      propClose();
    } catch (error) {
      const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      setMessage(resMessage);
    } finally {
      setLoading(false);
    }
  };
  // console.log(formData, "formdata")

  useEffect(() => {
    console.log("calll", isCapValid, isDescrValid);
    if (isCapValid && isDescrValid) {
      setIsButtonDisable(false);
    } else {
      setIsButtonDisable(true);
    }
  }, [isCapValid, isDescrValid]);

  console.log(isButtonDisable, "isButtonDisableisButtonDisableisButtonDisableisButtonDisable");

  return (
    <>
      <Modal

        show={propShow}
        // close={close}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        top="true" centered
       
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
          <Row style={{ width: "100%" }}>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Row className="mb-4">
                <Col sm={12} md={6} lg={6} xl={6}>
                  <h4>Nome Citta'</h4>
                </Col>
                <Col sm={12} md={6} lg={6} xl={6}>
                  <Form.Control type="text" placeholder="" autoFocus value={formData?.descrizione} name="descrizione" onChange={handleInputChange} />
                  {!isDescrValid && formData?.descrizione !== "" && <span style={{ color: "red", fontSize: "20px", marginTop: "4px" }}>{errorDescr}</span>}
                  {isDescrValid && formData?.descrizione !== "" && <span style={{ color: "green", fontSize: "20px", marginTop: "4px" }}>✅ </span>}
                </Col>
              </Row>
              <Row className="mb-4">
                <Col sm={6} md={6} lg={6} xl={6}>
                  <h4>CAP (numero)</h4>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                  <Form.Control type="text" placeholder="" className="d-flex justify-content-end" value={formData?.cap} name="cap" onChange={handleInputChange} />
                  {!isCapValid && formData?.cap !== "" && <span style={{ color: "red", fontSize: "20px", marginTop: "4px" }}>{errorCap}</span>}
                  {isCapValid && formData?.cap !== "" && <span style={{ color: "green", fontSize: "20px", marginTop: "4px" }}>✅ </span>}
                </Col>
              </Row>
              <Row className="mb-4">
                <Col sm={6} md={6} lg={6} xl={6}>
                  <h4>Provincia</h4>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                  <div>
                    <CitForm
                      propFrmData={(e) => {
                        setFormData((prevState) => ({
                          ...prevState,
                          idProvincia: e,
                        }));
                        setErrorProv("");
                      }} // Resetta l'errore quando si seleziona una regione
                      onBlur={() => {
                        if (formData.idProvincia) {
                          setErrorProv("");
                        }
                      }}
                    />
                    {errorProv && (
                      <p className="text-danger border-danger p-3 rounded fs-4" style={{ borderTop: "4px solid red" }}>
                        {errorProv}
                      </p>
                    )}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* <Row className="mb-4">
            <Col xs={12} md={12}>
              <Row>
                <Col xs={12} md={6}>
                  <h4>Nome Citta'</h4>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Control type="text" placeholder="" autoFocus value={formData?.descrizione} name="descrizione" onChange={handleInputChange} />
                  {!isDescrValid && formData?.descrizione !== "" && <span style={{ color: "red", fontSize: "20px", marginTop: "4px" }}>{errorDescr}</span>}
                  {isDescrValid && formData?.descrizione !== "" && <span style={{ color: "green", fontSize: "20px", marginTop: "4px" }}>✅ </span>}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className=" mb-4">
            <Col xs={12} md={12}>
              <Row>
                <Col xs={12} md={6}>
                  <h4>CAP (numero)</h4>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Control type="text" placeholder="" className="d-flex justify-content-end" value={formData?.cap} name="cap" onChange={handleInputChange} />
                  {!isCapValid && formData?.cap !== "" && <span style={{ color: "red", fontSize: "20px", marginTop: "4px" }}>{errorCap}</span>}
                  {isCapValid && formData?.cap !== "" && <span style={{ color: "green", fontSize: "20px", marginTop: "4px" }}>✅ </span>}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row xs={12} md={6} className="mb-4">
            <Col xs={12} md={12}>
              <Row>
                <Col xs={12} md={6}>
                  <h4>Provincia</h4>
                </Col>
                <Col xs={12} md={6}>
                  <Row>
                    <Col>
                      <CitForm
                        propFrmData={(e) => {
                          setFormData((prevState) => ({
                            ...prevState,
                            idProvincia: e,
                          }));
                          setErrorProv("");
                        }} // Resetta l'errore quando si seleziona una regione
                        onBlur={() => {
                          if (formData.idProvincia) {
                            setErrorProv("");
                          }
                        }}
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
            </Col>
          </Row> */}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center mt-4">
          <Button onClick={() => handleAddCitta()} className="justify-content-around" disabled={isButtonDisable}>
            {<SaveIcon />}Save and Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CitModalAdd;
