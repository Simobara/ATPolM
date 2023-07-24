import React, { useState } from "react";
/* CSS */
import "./citTable.css";
/* COMPONENTS */
// import ButtonPen from '../../../../../../../Global/ButtonPen/buttonPen';
import CitModal from "../CitModal/citModal";
import ProButton from "../../../../../../../Global/ProButton/ProButton";

/* MUI MATERIAL ICONS */
import ModeIcon from "@mui/icons-material/Mode";

const CitTable = () => {
  const columns = ["", "Citta'", "Cap", "Provincia"];

  const rowsDescr = ["Albano S'Alessandro", "Albano S'Alessandro", "Albino", "Arcene", "Bergamo", "Bergamo", "Bolgare", "AAA", "BBB", "CCC 10", "AAA 11", "BBB 12", "CCC 13", "DDD14"];

  const rowsCap = ["24061", "24061", "24021", "24040", "24126", "24127", "24060", "8", "9", "10", "11", "12", "MANCA 13"];
  const rowsProv = ["BG", "BG2", "BG", "BG4", "BG", "BG6", "BG", "BG8", "BG", "BG10", "BG", "BG12", "BG 13", "BG14"];

  // eslint-disable-next-line
  const [isModalActive, setIsModalActive] = useState(false);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = rowsDescr.slice(indexOfFirstItem, indexOfLastItem);
  const currentRowsCap = rowsCap.slice(indexOfFirstItem, indexOfLastItem);
  const currentRowsProv = rowsProv.slice(indexOfFirstItem, indexOfLastItem);

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
      return "col-2 px-2 text-center h5";
    } else if (columnIndex === 1) {
      return "col-4 px-4 text-center h5";
    } else if (columnIndex === 2) {
      return "col-4 px-4 text-center h5";
    } else if (columnIndex === 3) {
      return "col-12 px-12 text-center h5";
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
            <tr className="bold-columns text-center ">
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className={getColumnClassName(0)}>
                  <div>
                    <button type="button" className="btn btn-primary button" onClick={handleClickOpen}>
                      <ModeIcon className="icon" />
                    </button>
                  </div>
                  {/* <ButtonPen onClick={openModal} /> */}
                </td>
                <td className={getColumnClassName(1)}>{rowsDescr[rowIndex]}</td>
                <td className={getColumnClassName(2)}>{currentRowsCap[rowIndex]}</td>
                <td className={getColumnClassName(3)}>{currentRowsProv[rowIndex]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginBottom: "100px" }} className="d-flex justify-content-around bg-primary text-white w-100 text-sm page-text-input">
          <div className="widthSmall d-flex align-items-center my-1">
            <ProButton text="<<" title="Previous Page" disabled={currentPage === 1} clicked={() => handlePageChange(currentPage - 1)} />
            <span className="text-center text-sm">
              Pagina
              <strong className="mx-3 text-sm">
                {currentPage} di {Math.ceil(rowsDescr.length / itemsPerPage)}
              </strong>
              {/* &nbsp; | &nbsp; Go To Page &nbsp;&nbsp;
                        <input
                            type="number"
                            className="goto-page-input"
                            defaultValue={currentPage !== 1 && indexOfLastItem >= rowsDescr.length ? currentPage - 1 : currentPage + 1}
                        /> */}
            </span>
            <ProButton text=">>" title="Next Page" disabled={indexOfLastItem >= rowsDescr.length} clicked={() => handlePageChange(currentPage + 1)} />
          </div>
        </div>
        <div>{isModalActive && <CitModal show={isModalActive} close={handleClickClose} />}</div>
      </div>
    </>
  );
};

export default CitTable;
