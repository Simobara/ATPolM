import React from 'react';
// eslint-disable-next-line
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

//*COMPONENT
import "./registrazione.css";






const Registrazione = ({ propShow, propClose }) => {

    // const [isRegistrazionetModalOpen, setIsChatModalOpen] = useState(false);


    // const handleOpenChatModal = () => {
    //     setIsChatModalOpen(true);
    // }

    // const handleCloseChatModal = () => {
    //     setIsChatModalOpen(false);
    // }

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
                    <Modal.Title>Contatta Il Venditore</Modal.Title>
                    <span className="modal-close-button" onClick={propClose}>&times;</span>
                </Modal.Header>
                <Modal.Body>
                    <div className="content-container">
                        <div className="label-container">
                            <p><strong>Azienda:</strong></p>
                            <p><strong>Indirizzo:</strong></p>
                            <p><strong>Recapito Telefonico:</strong></p>
                            <p><strong>Email:</strong></p>
                        </div>
                        <div className="data-container">
                            <p> AZIENDA</p>
                            <p> INDIRIZZO </p>
                            <p> TEL +39 123 456 789</p>
                            <p> EMAIL esempio@email.com</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/* <button onClick={() => handleOpenChatModal()} className="btn btn-primary mt-2">APRI LA CHAT</button> */}
                    {/* {isChatModalOpen && (
                        <Chat propShow={isChatModalOpen} propClose={handleCloseChatModal} />
                    )} */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Registrazione;
