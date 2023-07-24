import React, { useState } from "react";
/* CSS */
import "./provTable.css";
/* COMPONENTS */
// import ButtonPen from '../../../../../../../Global/ButtonPen/buttonPen';
import ProvModal from "../ProvModal/provModal";
import ModeIcon from "@mui/icons-material/Mode";
import ProButton from "../../../../../../../Global/ProButton/ProButton";

const ProvTable = () => {
  const columns = ["", "Codice Provincia", "Codice Regione"];

  const rowsProv = ["BG1", "BG2", "BG", "BG", "BG5", "BG", "BG7", "BG", "BG9", "BG10", "BG11", "BG12", "BG", "14", "PIPPO", "16", "PAPERINO", "PLUTO18", "TOPOLINIO19", "MINNIE20", "GBSCUGUCIA 21"];

  const rowsCodReg = ["ABR", "BAS", "CAL", "CAM", "EMR", "FVG", "LAZ", "LIG", "LOM", "MAR10", "MOL11", "PIE", "PUG13", "SAR", "SIC15", "TOS", "TRE17", "UMB", "VAO19", "VEN", "REGIONE 21"];

  // eslint-disable-next-line
  const [isModalActive, setIsModalActive] = useState(false);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentRowsProv = rowsProv.slice(indexOfFirstItem, indexOfLastItem);
  const currentRowsCodReg = rowsCodReg.slice(indexOfFirstItem, indexOfLastItem);

  const handleClickOpen = () => {
    setIsModalActive(true);
    console.log("modal open");
  };

  const handleClickClose = () => {
    setIsModalActive(false);
    console.log("modal close");
  };

  const getColumnClassName = (columnIndex) => {
    if (columnIndex === 0) {
      return "col-2 px-2 text-center h5 justify-content-center";
    } else if (columnIndex === 1) {
      return "col-8 px-8 text-center h5 justify-content-center";
    } else if (columnIndex === 2) {
      return "col-2 px-2 text-center h5 justify-content-center";
      // } else if (columnIndex === 3) {
      //     return 'col-2 px-2 text-center h5';
      // } else if (columnIndex === 4) {
      //     return 'col-4 px-4 text-center h5';
    } else {
      return "col-12 px-12 text-center h5";
    }
  };

  return (
    <>
      <div style={{ marginTop: "5rem" }}>
        <table className="table table-bordered w-100">
          <thead>
            <tr className="bold-columns text-center">
              {columns.map((column) => (
                <th key={column}> {column} </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRowsProv.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className={getColumnClassName(0)}>
                  <button type="button" className="btn btn-primary button" onClick={handleClickOpen}>
                    <ModeIcon className="icon" />
                  </button>
                  {/* <ButtonPen onClick={openModal} /> */}
                </td>
                <td className={getColumnClassName(1)}>{currentRowsProv[rowIndex]}</td>
                <td className={getColumnClassName(2)}>{currentRowsCodReg[rowIndex]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginBottom: "100px" }} className="d-flex bg-primary text-white justify-content-center w-100 text-sm page-text-input justify-content-around">
          <div className="widthSmall d-flex  align-items-center my-1">
            <ProButton text="<<" title="Previous Page" disabled={currentPage === 1} clicked={() => handlePageChange(currentPage - 1)} />
            <span className="text-center text-sm">
              Pagina
              <strong className="mx-3 text-sm">
                {currentPage} di {Math.ceil(rowsProv.length / itemsPerPage)}
              </strong>
              {/* &nbsp; | &nbsp; Go To Page &nbsp;&nbsp;
                        <input
                            type="number"
                            className="goto-page-input"
                            defaultValue={currentPage !== 1 && indexOfLastItem >= rowsDescr.length ? currentPage - 1 : currentPage + 1}
                        /> */}
            </span>
            <ProButton text=">>" title="Next Page" disabled={indexOfLastItem >= rowsProv.length} clicked={() => handlePageChange(currentPage + 1)} />
          </div>
        </div>
        <div> {isModalActive && <ProvModal show={isModalActive} close={handleClickClose} />} </div>
      </div>
    </>
  );
};

export default ProvTable;
