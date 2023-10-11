import React, { useState } from "react";
// eslint-disable-next-line
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

//*COMPONENT
import "./modalRegister.css";
// import Registrazione from './Registrazione/registrazione';
// import Chat from '../Chat/chat';

//* MUI MATERIAL ICONS
import SaveIcon from "@mui/icons-material/Save";
import Chat from "../Chat/Chat";
// eslint-disable-next-line 
import { json } from "react-router-dom";
const ModalRegister = ({ propShow, propClose, setShowChatModal }) => {
  const getLocalStorageData = JSON.parse(localStorage.getItem(`value`));
  // eslint-disable-next-line
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(getLocalStorageData ? true : false);
  const [emailError, setEmailError] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [email, setEmail] = useState(getLocalStorageData ? getLocalStorageData?.email : "");
  const [phone, setPhone] = useState(getLocalStorageData ? getLocalStorageData?.phone : "");
  const [alternatePhone, setAlternatePhone] = useState(getLocalStorageData ? getLocalStorageData?.alternatePhone : "");
  // eslint-disable-next-line 
  const [completeData, setCompleteData] = useState();

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };
  // eslint-disable-next-line 
  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const handleCheckValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };
  // eslint-disable-next-line 
  const isButtonActive = email && !emailError && phone;
  // eslint-disable-next-line
  const handleOpenChatModal = () => {
    setChatOpen(true);
  };
  const handleAddClicked = () => {
    const value = {
      email: email,
      phone: phone,
      alternatePhone: alternatePhone,
    };
    if (!email || !phone || !alternatePhone) return alert("Fill all the fields");
    localStorage.setItem(`value`, JSON.stringify(value));
    if (getLocalStorageData) {
      setShowChatModal(true);
      setIsRegisterModalOpen(false);
      propClose(false);
    } else {
      setShowChatModal(true);
      setIsRegisterModalOpen(false);
      propClose(false);
    }
  };
  return (
    <>
      <Modal
        show={propShow}
        backdrop="static"
        // keyboard={false}
        // size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        top="true" centered
      >
        <Modal.Header>
          <Modal.Title>Dati di contatto richiesti</Modal.Title>
          {isRegisterModalOpen && (
            <span className="modal-close-button" onClick={propClose}>
              &times;
            </span>
          )}
        </Modal.Header>
        <Modal.Body className="">
          {isRegisterModalOpen ? (
            <div className="row">
              <div className="col-4">
                <label>
                  <strong>EMAIL:</strong>
                </label>
              </div>
              <div className="col-8">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Inserisci la tua email"
                  // onChange={(e) => setEmail(e.target.value)}
                  disabled={getLocalStorageData ? true : false}
                  value={email || ""}
                  // value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (!handleCheckValidEmail(e.target.value)) {
                      setEmailError("Email non valida");
                    } else {
                      setEmailError("");
                    }
                  }}
                />
                {emailError && <div className="text-danger">{emailError}</div>}
              </div>
              <div className="col-4 mt-2">
                <label>
                  <strong>TELEFONO:</strong>
                </label>
              </div>
              <div className="col-8 mt-2">
                <input
                  type="number"
                  disabled={getLocalStorageData ? true : false}
                  className="form-control"
                  placeholder="Inserisci il tuo telefono"
                  value={phone || ""}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="col-4 mt-2">
                <label>
                  <strong>ALTRO CONTATTO:</strong>
                  <div>(opzionale)</div>
                </label>
              </div>
              <div className="col-8 mt-2">
                <input
                  type="number"
                  disabled={getLocalStorageData ? true : false}
                  className="form-control"
                  placeholder="Inserisci un altro contatto"
                  value={alternatePhone || ""}
                  onChange={(e) => setAlternatePhone(e.target.value)}
                />
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
              <button onClick={() => handleOpenRegisterModal()} className="btn btn-primary mt-2 modal-footer-button">
                SI
              </button>
              <button onClick={propClose} className="btn btn-danger mt-2 modal-footer-button">
                NO
              </button>
            </div>
          ) : (
            <div>
              <Button
                onClick={() => handleAddClicked()}
              // onClick={() => handleOpenChatModal()}
              //   disabled={!isButtonActive}
              >
                {<SaveIcon />}Save and Close
              </Button>

              {/* <CheckButton style={{ display: "none" }} ref={refCheckBtn} /> */}
            </div>
          )}
          {chatOpen && <Chat propShow={chatOpen} propClose={() => setChatOpen(false)} />}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalRegister;
