import React, { useState } from 'react';

//* CSS */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';

//* COMPONENTS */
import ModDatiModVisAnn from "../VisBandi/visBandi";
// import RegForm from '../RegForm/regForm';

//* MUI MATERIAL ICONS */
// import SaveIcon from '@mui/icons-material/Save';





const VisBandi = ({ show, close }) => {
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const columns = ['', 'Data', 'IdAnnuncio'];


    const rowsData = ['01/01/0001 00:00:00', '01/01/0001 00:00:00', '01/01/0001 00:00:00', '01/01/0001 00:00:00', '01/01/0001 00:00:00'];

    const rowsIdAnnuncio = ['8', '8', '8', '8', '8']

    const [isModDatiModVisAnnActive, setIsModDatiModVisAnnActive] = useState(false);

    const handleClickModDatVisAnnOpen = () => {
        setIsModDatiModVisAnnActive(true);
        console.log("modalVisAnn open")
    }

    const handleClickDatiModVisIntClose = () => {
        setIsModDatiModVisAnnActive(false);
        console.log("modalVisAnn close")
    }

    const getColumnClassName = (columnIndex) => {
        if (columnIndex === 0) {
            return 'col-4 px-4 font-weight-bold';
        } else if (columnIndex === 1) {
            return 'col-12 px-12 ';
        } else if (columnIndex === 2) {
            return 'col-12 px-12 ';
        } else if (columnIndex === 3) {
            return 'col-12 px-12 ';
        }
    }

    return (
        <>
            <Modal
                show={show}
                // close={close}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                top="true" centered
            >
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter" className="font-weight-bold">
                        <h2>BANDO</h2>
                    </Modal.Title>
                    <Button variant="danger" onClick={close} size="lg">
                        X
                    </Button>
                </Modal.Header>
                <table className="table table-bordered w-100">
                    <thead>
                        <tr className="bold-columns">
                            {columns.map((column, columnIndex) => (
                                <th key={columnIndex} >
                                    {columnIndex === 0 && (
                                        <div>
                                            {/* <button type="button" className="btn btn-primary button-modify icon-add" onClick={() => ("")}>
                                            <AddIcon className="icon" />
                                        </button> */}
                                        </div>
                                    )}
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rowsData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <td className={getColumnClassName(0)}>
                                    <div>
                                        <button type="button" className="btn btn-primary button-modify largeTextButton" onClick={handleClickModDatVisAnnOpen} style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                                            Vedi Annuncio
                                        </button>
                                    </div>
                                    {/* <ButtonPen onClick={openModal} /> */}
                                </td>
                                <td className={getColumnClassName(1)}>
                                    {row}
                                </td>
                                <td className={getColumnClassName(2)}>
                                    {rowsIdAnnuncio}
                                </td>
                                {/* <td className={getColumnClassName(3)}>
                                    {rowsFax}
                                </td> */}
                                {/* <div>
                                <button type="button" className="btn btn-danger button-close" onClick={() => ("")}>
                                    <CloseIcon className="icon-close" />
                                </button>
                            </div> */}
                            </tr>
                        ))}
                    </tbody>
                </table >
                <div>
                    {isModDatiModVisAnnActive && (<ModDatiModVisAnn show={isModDatiModVisAnnActive} close={handleClickDatiModVisIntClose} />)}
                </div>
            </Modal>
        </>
    );

}

export default VisBandi; 