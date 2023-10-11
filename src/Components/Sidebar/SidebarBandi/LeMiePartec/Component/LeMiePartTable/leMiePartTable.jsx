import React, { useState } from "react";
/* CSS */
// import "./datiTable.css";
/* COMPONENTS */
// import ButtonPen from '../../../../../../../Global/ButtonPen/buttonPen';
import "../../../LeMiePartec/leMiePartec.css"

import VisBandi from "../VisBandi/visBandi";
import ProButton from "../../../../../Global/ProButton/ProButton";
/* MUI MATERIAL ICONS */
// import ModeIcon from '@mui/icons-material/Mode';
// import CloseIcon from '@mui/icons-material/Close';
// import AddIcon from '@mui/icons-material/Add';

const LeMiePartTable = () => {
    const columns = ["", "Id Bando", "Stato Richiesta", "Data Richiesta"];

    const rowsIdBando = ["1008", "2008", "3008", "4008", "5008"];

    const rowsStatoRichiesta = ["Inviata", "Inviata", ""];

    const rowsDataRichiesta = ["04/07/2023", "10/07/2023", ""];

    // const rowsFax = ["1234567890", "1234567890", "0987654321"];

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currenRowsIdBando = rowsIdBando.slice(indexOfFirstItem, indexOfLastItem);
    const currentRowsStatoRichiesta = rowsStatoRichiesta.slice(indexOfFirstItem, indexOfLastItem);
    const currentRowsDataRichiesta = rowsDataRichiesta.slice(indexOfFirstItem, indexOfLastItem);
    // const currentRowsFax = rowsFax.slice(indexOfFirstItem, indexOfLastItem);

    // eslint-disable-next-line
    const [isModalDatiVisIntActive, setIsModalDatiVisIntActive] = useState(false);
    // const [isModalModActive, setIsModalModActive] = useState(false);
    // const [isModalDelActive, setIsModalDelActive] = useState(false);

    const handleClickDatiModVisIntOpen = () => {
        setIsModalDatiVisIntActive(true);
        console.log("modalVisInt open");
    };
    // eslint-disable-next-line
    const handleClickDatiModVisIntClose = () => {
        setIsModalDatiVisIntActive(false);
        console.log("modalVisInt close");
    };

    // const handleClickModOpen = () => {
    //     setIsModalModActive(true);
    //     console.log("modalModify open")
    // }

    // const handleClickModClose = () => {
    //     setIsModalModActive(false);
    //     console.log("modalModify close")
    // }

    // const handleClickDelOpen = () => {
    //     setIsModalDelActive(true);
    //     console.log("modalDel open")
    // };

    // const handleClickDelClose = () => {
    //     setIsModalDelActive(false);
    //     console.log("modalDel close")
    // }

    const getColumnClassName = (columnIndex) => {
        if (columnIndex === 0) {
            return "col-2 px-2 text-center h5";
        } else if (columnIndex === 1) {
            return "col-2 px-2 text-center h5";
        } else if (columnIndex === 2) {
            return "col-3 px-3 text-center h5";
        } else if (columnIndex === 3) {
            return "col-3 px-3 text-center h5";
            // } else if (columnIndex === 4) {
            //     return "col-4 px-4 text-center h5";
        } else {
            return "col-12 px-12 text-center h5";
        }
    };

    return (
        <>
            <div >
            <div className="table-responsive tabel-Button">
                <table className="table table-bordered w-100">
                    <thead>
                        <tr className="bold-columns text-center">
                            {columns.map((column, columnIndex) => (
                                <th key={columnIndex}>
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
                        {currenRowsIdBando.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <td className={getColumnClassName(0)} style={{ padding: '13px' }}>
                                    <div>
                                        <button type="button" className="btn btn-primary button-modify largeTextButton" onClick={handleClickDatiModVisIntOpen} style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                                            VEDI IL BANDO
                                        </button>
                                    </div>
                                    {/* <ButtonPen onClick={openModal} /> */}
                                </td>
                                <td className={getColumnClassName(1)}>{row}</td>
                                <td className={getColumnClassName(2)}>{currentRowsStatoRichiesta[rowIndex]}</td>
                                <td className={getColumnClassName(3)}>{currentRowsDataRichiesta[rowIndex]}</td>
                                {/* <td className={getColumnClassName(4)}>{currentRowsFax[rowIndex]}</td> */}
                                {/* <div>
                                <button type="button" className="btn btn-danger button-close" onClick={() => ("")}>
                                    <CloseIcon className="icon-close" />
                                </button>
                            </div> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                <div style={{ marginBottom: "100px" }} className="d-flex justify-content-center w-100 text-sm page-text-input">
                    <div className="widthSmall d-flex justify-content-around align-items-center my-1">
                        <ProButton text="<<" title="Previous Page" disabled={currentPage === 1} clicked={() => handlePageChange(currentPage - 1)} />
                        <span className="text-center text-sm">
                            Pagina
                            <strong className="mx-3 text-sm">
                                {currentPage} di {Math.ceil(rowsIdBando.length / itemsPerPage)}
                            </strong>
                            {/* &nbsp; | &nbsp; Go To Page &nbsp;&nbsp;
            <input
            type="number"
            className="goto-page-input"
            defaultValue={indexOfLastItem >= rowsCatAziende.length ? currentPage - 1 : currentPage + 1}
            /> */}
                        </span>
                        <ProButton text=">>" title="Next Page" disabled={indexOfLastItem >= rowsIdBando.length} clicked={() => handlePageChange(currentPage + 1)} />
                    </div>
                    <div>{isModalDatiVisIntActive && <VisBandi show={isModalDatiVisIntActive} close={handleClickDatiModVisIntClose} />}</div>
                </div>
            </div >
        </>
    );
};

export default LeMiePartTable;
