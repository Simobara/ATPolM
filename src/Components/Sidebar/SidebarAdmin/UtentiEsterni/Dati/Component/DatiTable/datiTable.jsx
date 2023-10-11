import React, { useState } from "react";
/* CSS */
import "./datiTable.css";
/* COMPONENTS */
// import ButtonPen from '../../../../../../../Global/ButtonPen/buttonPen';
import ModDatiVisInt from "../ModDatiVisInt/modDatiVisInt";
import ProButton from "../../../../../../Global/ProButton/ProButton";
/* MUI MATERIAL ICONS */
// import ModeIcon from '@mui/icons-material/Mode';
// import CloseIcon from '@mui/icons-material/Close';
// import AddIcon from '@mui/icons-material/Add';

const DatiTable = () => {
  const columns = ["", "Descrizione", "Email", "Telefono", "Fax"];

  const rowsCatAziende = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"];

  const rowsEmail = ["test@gmail.com", "test1@gmail.com", "test2@gmail.com"];

  const rowsTel = ["24680", "13579", "0987654321"];

  const rowsFax = ["1234567890", "1234567890", "0987654321"];

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currenRowsCatAziende = rowsCatAziende.slice(indexOfFirstItem, indexOfLastItem);
  const currentRowsEmail = rowsEmail.slice(indexOfFirstItem, indexOfLastItem);
  const currentRowsTel = rowsTel.slice(indexOfFirstItem, indexOfLastItem);
  const currentRowsFax = rowsFax.slice(indexOfFirstItem, indexOfLastItem);

  const [isModalDatiVisIntActive, setIsModalDatiVisIntActive] = useState(false);
  // const [isModalModActive, setIsModalModActive] = useState(false);
  // const [isModalDelActive, setIsModalDelActive] = useState(false);

  const handleClickDatiModVisIntOpen = () => {
    setIsModalDatiVisIntActive(true);
    console.log("modalVisInt open");
  };
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
    } else if (columnIndex === 4) {
      return "col-4 px-4 text-center h5";
    } else {
      return "col-12 px-12 text-center h5";
    }
  };

  return (
    <>
      <div style={{ fontSize: '20px', marginTop: '5rem' }}>
        <div style={{
          height: '70px',
          backgroundColor: '#030947',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
       
          alignItems: 'center',
          fontWeight: 'bold',
        }}className="bold-columns text-center text-white header-hieght">
          DATI
        </div>
        <div className="container custom-container" style={{ backgroundColor: "#f3f3f3" }}>
        <div className="table-responsive tabel-Button"><table className="table table-bordered w-100">
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
            {currenRowsCatAziende.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className={getColumnClassName(0)} style={{ padding: '13px' }}>
                  <div>
                    <button type="button" className="btn btn-primary button-modify largeTextButton" onClick={handleClickDatiModVisIntOpen} style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                      VEDI Interessi
                    </button>
                  </div>
                  {/* <ButtonPen onClick={openModal} /> */}
                </td>
                <td className={getColumnClassName(1)}>{row}</td>
                <td className={getColumnClassName(2)}>{currentRowsEmail[rowIndex]}</td>
                <td className={getColumnClassName(3)}>{currentRowsTel[rowIndex]}</td>
                <td className={getColumnClassName(4)}>{currentRowsFax[rowIndex]}</td>
                {/* <div>
                                <button type="button" className="btn btn-danger button-close" onClick={() => ("")}>
                                    <CloseIcon className="icon-close" />
                                </button>
                            </div> */}
              </tr>
            ))}
          </tbody>
        </table></div>
        
        <div style={{ marginBottom: "100px" }} className="d-flex justify-content-center w-100 text-sm page-text-input">
          <div className="widthSmall d-flex justify-content-around align-items-center my-1">
            <ProButton text="<<" title="Previous Page" disabled={currentPage === 1} clicked={() => handlePageChange(currentPage - 1)} />
            <span className="text-center text-sm">
              Pagina
              <strong className="mx-3 text-sm">
                {currentPage} di {Math.ceil(rowsCatAziende.length / itemsPerPage)}
              </strong>
              {/* &nbsp; | &nbsp; Go To Page &nbsp;&nbsp;
            <input
              type="number"
              className="goto-page-input"
              defaultValue={indexOfLastItem >= rowsCatAziende.length ? currentPage - 1 : currentPage + 1}
            /> */}
            </span>
            <ProButton text=">>" title="Next Page" disabled={indexOfLastItem >= rowsCatAziende.length} clicked={() => handlePageChange(currentPage + 1)} />
          </div>
        </div>
</div>
        <div>{isModalDatiVisIntActive && <ModDatiVisInt show={isModalDatiVisIntActive} close={handleClickDatiModVisIntClose} />}</div>
      </div>
    </>
  );
};

export default DatiTable;
