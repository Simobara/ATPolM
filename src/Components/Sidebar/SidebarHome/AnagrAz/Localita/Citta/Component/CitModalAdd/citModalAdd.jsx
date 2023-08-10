import React, { useState } from "react";
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

const CitModalAdd = ({ show, close }) => {
  const [formData,setFormData]=useState({
    descrizione:"",
    cap:"",
    idProvincia:""

  })
    const { addCitta } = CittaService();
  // eslint-disable-next-line
  

  const onChange = (e) => {
   
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value, }));
  };

  const handleUpdate = async () => {
    try {
        if(!formData.descrizione && !formData.cap) return alert("add descrizione")
      await addCitta(formData.descrizione,formData.cap,formData.idProvincia);

      setFormData({
        descrizione:"",
        cap:"",
        idProvincia:""
      })
      console.log("set form data provincia --- dati salvati");
      close();
    } catch (error) {
      const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
     
    } finally {
  
    }
  };
console.log(formData,"formdata")

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
            <Col xs={12} md={6}><Form.Control type="text" placeholder="" autoFocus value={formData.descrizione}
            name="descrizione"
                onChange={onChange}/></Col>
          </Row>
          <Row className="d-flex justify-content-start mb-4">
            <Col xs={12} md={6}><h4>CAP</h4></Col>
            <Col xs={12} md={6}><Form.Control type="text" placeholder="" autoFocus className="d-flex justify-content-end" value={formData.cap}
             name="cap"   onChange={onChange} /></Col>
          </Row>
          <Row xs={12} md={6} className="d-flex justify-content-start mb-4">
            <Col xs={12} md={6}><h4>Provincia</h4></Col>
            <Col xs={12} md={6}>
              <Row>
                <Col>
                  <CitForm setFormData={(e) => setFormData((prevState) => ({ ...prevState, "idProvincia": e }))}/>
                  {/* <Form.Control type="text" placeholder="" autoFocus className="d-flex justify-content-end /> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center mt-4">
          <Button onClick={()=>handleUpdate()} className="justify-content-around">{<SaveIcon />}Save and Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CitModalAdd;
