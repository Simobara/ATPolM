import React, { useEffect, useState } from "react";
import axios from "axios";

/* CSS */
import "./citTable.css";

/* COMPONENTS */
import CitModalAdd from "../CitModalAdd/citModalAdd";
import CitModalMod from "../CitModalMod/citModalMod";
import CitModalDel from "../CitModalDel/citModalDel";
import ProButton from "../../../../../../../Global/ProButton/ProButton";
// import ButtonPen from '../../../../../../../Global/ButtonPen/buttonPen';

/* MUI MATERIAL ICONS */
import ModeIcon from "@mui/icons-material/Mode";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";












const CitTable = () => {
  const columns = ["", "Citta'", "Cap", "Codice Provincia", ""];


  // eslint-disable-next-line
  const rowsDescr = ["Albano S'Alessandro", "Albano S'Alessandro", "Albino", "Arcene", "Bergamo", "Bergamo", "Bolgare", "AAA", "BBB", "CCC 10", "AAA 11", "BBB 12", "CCC 13", "DDD14"];

  // eslint-disable-next-line
  const rowsCap = ["24061", "24061", "24021", "24040", "24126", "24127", "24060", "8", "9", "10", "11", "12", "MANCA 13"];

  // eslint-disable-next-line 
  const rowsProv = ["BG", "BG2", "BG", "BG4", "BG", "BG6", "BG", "BG8", "BG", "BG10", "BG", "BG12", "BG 13", "BG14"];



  const [citta, setCitta] = useState([]);
  const [descrIdCittaFiltered, setDescrIdCittaFiltered] = useState([]);



  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = citta.slice(indexOfFirstItem, indexOfLastItem);
  // eslint-disable-next-line
  const currentRowsCap = rowsCap.slice(indexOfFirstItem, indexOfLastItem);
  // eslint-disable-next-line
  const currentRowsProv = rowsProv.slice(indexOfFirstItem, indexOfLastItem);


  const [rowId, setRowId] = useState("");
  const [isModalAddActive, setIsModalAddActive] = useState(false);
  const [isModalModActive, setIsModalModActive] = useState(false);
  const [isModalDelActive, setIsModalDelActive] = useState(false);





  const handleClickAddOpen = () => {
    setIsModalAddActive(true);
    console.log("modalAdd open");
  };
  const handleClickAddClose = () => {
    setIsModalAddActive(false);
    console.log("modalAdd close");
  };

  const handleClickModOpen = (idrow) => {
    setIsModalModActive(true);
    setRowId(idrow);
    console.log("modalModify open");
  };

  const handleClickModClose = () => {
    setIsModalModActive(false);
    console.log("modalModify close");
  };

  const handleClickDelOpen = () => {
    setIsModalDelActive(true);
    console.log("modalDel open");
  };

  const handleClickDelClose = () => {
    setIsModalDelActive(false);
    console.log("modalDel close");
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
      return "col-12 px-12 text-center h5 justify-content-center";
    }
  };



  function capitalizeText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
  const getCitta = async () => {
    const result = await axios.get("http://localhost:8080/api/localita");
console.log(result)
    setCitta(result?.data);

    const descrIdCittaFiltered = (result?.data).map((citta) => ({
      id: citta.id,
      descrizione:capitalizeText(citta.descrizione),
    }));

    setDescrIdCittaFiltered(descrIdCittaFiltered);
    // console.log("descrIdCittaFiltered: ", descrIdCittaFiltered);
  };


  useEffect(() => {
    getCitta();
    // eslint-disable-next-line 
  }, [isModalDelActive, isModalModActive, isModalAddActive]);





  const citDescr = citta.map(cit => cit.descrizione)

  // console.log("Descrizione Citta:", citDescr);




  return (
    <>
      <div style={{ marginTop: "5rem" }}>
        <table className="table table-bordered w-100">
          <thead>
            <tr className="bold-columns text-center">
              {columns.map((column, columnIndex) => (
                <th key={columnIndex}>
                  {columnIndex === 0 && (
                    <button type="button" className="btn button-modify icon-add" onClick={() => handleClickAddOpen()}>
                      <AddIcon className="icon" />
                    </button>
                  )}
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className={getColumnClassName(0)}>
                  <div>
                    <button type="button" className="btn btn-primary button" onClick={() => handleClickModOpen(row?.id)}>
                      <ModeIcon className="icon" />
                    </button>
                  </div>
                  {/* <ButtonPen onClick={openModal} /> */}
                </td>
                <td className={getColumnClassName(1)}>{capitalizeText(row?.descrizione)}</td>
                <td className={getColumnClassName(2)}>{row?.cap}</td>
                <td className={getColumnClassName(3)}>{row?.provinciaCodice}</td>
                <td className={getColumnClassName(4)}>
                  <button type="button" className="btn btn-danger button-close " onClick={() => handleClickDelOpen()}>
                    <CloseIcon className="icon-close" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginBottom: "100px" }} className="d-flex justify-content-center w-100 text-sm page-text-input">
          <div className="widthSmall d-flex justify-content-around align-items-center my-1">
            <ProButton text="<<" title="Previous Page" disabled={currentPage === 1} clicked={() => handlePageChange(currentPage - 1)} />
            <span className="text-center text-sm">
              Pagina
              <strong className="mx-3 text-sm">
                {currentPage} di {Math.ceil(citta?.length / itemsPerPage)}
              </strong>
              {/* &nbsp; | &nbsp; Go To Page &nbsp;&nbsp;
                        <input
                            type="number"
                            className="goto-page-input"
                            defaultValue={currentPage !== 1 && indexOfLastItem >= rowsDescr.length ? currentPage - 1 : currentPage + 1}
                        /> */}
            </span>
            <ProButton text=">>" title="Next Page" disabled={indexOfLastItem >= citta?.length} clicked={() => handlePageChange(currentPage + 1)} />
          </div>
        </div>
        <div>{isModalAddActive && <CitModalAdd show={isModalAddActive} close={handleClickAddClose} listaCitDescrAdded={citDescr} />}</div>
        <div>{isModalModActive && <CitModalMod show={isModalModActive} close={handleClickModClose}
          rowID={rowId}
          descIdCittaFiltered={descrIdCittaFiltered}
        // listaCitDescrAdded={citDescr}
        />}
        </div>
        <div>{isModalDelActive && <CitModalDel show={isModalDelActive} close={handleClickDelClose} />}</div>
      </div>
    </>
  );
};

export default CitTable;
