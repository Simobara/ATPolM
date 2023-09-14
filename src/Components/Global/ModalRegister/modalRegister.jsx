import React, { useState } from 'react';
// eslint-disable-next-line
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

//*COMPONENT
import "./modalRegister.css";
// import Registrazione from './Registrazione/registrazione';
// import Chat from '../Chat/chat';

//* MUI MATERIAL ICONS
import SaveIcon from '@mui/icons-material/Save';





const ModalRegister = ({ propShow, propClose }) => {
    // eslint-disable-next-line
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);


    const handleOpenRegisterModal = () => {
        setIsRegisterModalOpen(true);
    }
    // eslint-disable-next-line
    const handleCloseRegisterModal = () => {
        setIsRegisterModalOpen(false);
    }

    return (
        <>
            <Modal
                show={propShow}
                backdrop="static"
                // keyboard={false}
                // size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                top="true"
            >
                <Modal.Header>
                    <Modal.Title>Dati di contatto richiesti</Modal.Title>
                    {isRegisterModalOpen && (
                        <span className="modal-close-button" onClick={propClose}>&times;</span>
                    )}
                </Modal.Header>
                <Modal.Body className="">
                    {isRegisterModalOpen ? (
                        <div className="row">
                            <div className="col-4">
                                <label><strong>EMAIL:</strong></label>
                            </div>
                            <div className="col-8">
                                <input type="email" className="form-control" placeholder="Inserisci la tua email" />
                            </div>
                            <div className="col-4 mt-2">
                                <label><strong>TELEFONO:</strong></label>
                            </div>
                            <div className="col-8 mt-2">
                                <input type="email" className="form-control" placeholder="Inserisci la tua email" />
                            </div>
                            <div className="col-4 mt-2">
                                <label><strong>FAX:</strong></label>
                            </div>
                            <div className="col-8 mt-2">
                                <input type="email" className="form-control" placeholder="Inserisci la tua email" />
                            </div>
                        </div>
                    ) : (
                        <div className="content-container">
                            <div className="label-container">
                                <div>Per contattare l'azienda serve inserire i tuoi dati di contatto, vuoi procedere?</div>
                            </div>
                        </div>
                    )}
                </Modal.Body>





                <Modal.Footer className="d-flex justify-content-center mt-4">
                    {!isRegisterModalOpen ? (
                        <div className="modal-footer-button-container">
                            <button onClick={() => handleOpenRegisterModal()} className="btn btn-primary mt-2 modal-footer-button">SI</button>
                            <button onClick={propClose} className="btn btn-danger mt-2 modal-footer-button">NO</button>
                        </div>
                    ) : (
                        <div>
                            <Button>{<SaveIcon />}Save and Close</Button>
                            {/* <CheckButton style={{ display: "none" }} ref={refCheckBtn} /> */}
                        </div>
                    )}
                </Modal.Footer>

            </Modal >
        </>
    );
}

export default ModalRegister;
