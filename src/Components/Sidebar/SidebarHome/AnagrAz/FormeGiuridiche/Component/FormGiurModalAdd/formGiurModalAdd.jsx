import React, { useState } from "react";
import axios from "axios";

/* CSS */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
/* COMPONENTS */
// import RegForm from '../RegForm/regForm';

/* MUI MATERIAL ICONS */
import SaveIcon from '@mui/icons-material/Save';
import FormaGiuridicaService from "../../../../../../../DataAPI/services/formaGiuridica.service";





const AssModalMod = ({ show, close }) => {
    const [descrizione,setDescrizione]=useState()
    const { addFormaGiuridica } = FormaGiuridicaService();

    const handleAdd = async (e) => {
        try {
            if(!descrizione) return alert("add descrizione")
          await addFormaGiuridica(descrizione);
    
          setDescrizione()
          console.log("set form data provincia --- dati salvati");
          close();
        } catch (error) {
          const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
         
        } finally {
      
        }
      };

    return (
        <>
            <Modal
                show={show}
                // close={close}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter" className="font-weight-bold">
                        <h2>Addiungi FormaGiuridica</h2>
                    </Modal.Title>
                    <Button variant="danger" onClick={close} size="lg">
                        X
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Row className="d-flex justify-content-start mb-4">
                        <Col xs={12} md={6}><h4>Nome FormaGiuridica</h4></Col>
                        <Col xs={12} md={6}>
                        <Form.Control type="text" placeholder="" autoFocus value={descrizione} onChange={(e)=>setDescrizione(e.target.value)}/>
                        </Col>
                    </Row>
                    {/* <Row className="d-flex justify-content-start mb-4">
                        <Col xs={12} md={6}><h4>Codice Regione</h4></Col>
                        <Col xs={12} md={6}>
                            <Row>
                                <Col>
                                    <RegForm />
                                </Col>
                            </Row>
                        </Col>
                    </Row> */}
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center mt-4">
                    <Button onClick={() => { handleAdd(); }} >
                        {<SaveIcon />}Save and Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AssModalMod;