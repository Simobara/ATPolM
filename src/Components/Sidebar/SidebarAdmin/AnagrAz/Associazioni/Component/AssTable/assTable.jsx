import React, { useEffect, useState } from "react";
import axios from "axios";

//* CSS
import "./assTable.css";

//* COMPONENTS
import AssModalAdd from "../AssModalAdd/assModalAdd";
import AssModalMod from "../AssModalMod/assModalMod";
import AssModalDel from "../AssModalDel/assModalDel";
import ProButton from "../../../../../../Global/ProButton/ProButton";

//* MUI MATERIAL ICONS
import ModeIcon from "@mui/icons-material/Mode";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";













const AssTable = () => {
  const columns = ["", "Descrizione", ""];
  // const rowsNominatAziende = ["A.I.B.", "AFIDAMP", "AGR", "ALI", "ANCO", "ANGAISA", "ANIT", "API", "API-INDUSTRIA-MANTOVA"];

  const [associazioni, setAssociazioni] = useState([]);





  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => { setCurrentPage(pageNumber); };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = associazioni.slice(indexOfFirstItem, indexOfLastItem);


  const [idModal, setIDModal] = useState("");
  const [isModalAddActive, setIsModalAddActive] = useState(false);
  const [isModalModActive, setIsModalModActive] = useState(false);
  const [isModalDelActive, setIsModalDelActive] = useState(false);






  const handleClickAddOpen = () => {
    setIsModalAddActive(true);
    console.log("modal add open");
  };
  const handleClickAddClose = () => {
    setIsModalAddActive(false);
    console.log("modal add close");
  };

  const handleClickModOpen = (id) => {
    setIsModalModActive(true);
    console.log("id", id)
    setIDModal(id);
    console.log("modal modify open");
  };

  const handleClickModClose = () => {
    setIsModalModActive(false);
    console.log("modal modify close");
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
      return "col-12 px-12 text-center h5";
    }
  };





  const getAssociazioni = async () => {
    const result = await axios.get("http://localhost:8080/api/associazioni");
    setAssociazioni(result?.data);
  };
  useEffect(() => {
    getAssociazioni();
  }, [isModalDelActive, isModalModActive, isModalAddActive]);







  return (
    <>
      <div style={{ fontSize: '20px', marginBottom: '10px', marginTop: '5rem' }}>
        <div style={{
          height: '70px',
          backgroundColor: '#030947',
          width: '100%',
         
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold'
        }}className="bold-columns text-center text-white header-hieght">
          ASSOCIAZIONI
        </div>
        <div className="container custom-container" style={{ backgroundColor: "#f3f3f3" }}>
        <div className="table-responsive tabel-Button"> <table className="table table-bordered w-100">
          <thead>
            <tr className="bold-columns text-center">
              {columns.map((column, columnIndex) => (
                <th key={columnIndex}>
                  {columnIndex === 0 && (
                    <button type="button" className="btn button-modify icon-add" onClick={handleClickAddOpen}>
                      <AddIcon className="icon" />
                    </button>
                  )}
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 && currentItems?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className={getColumnClassName(0)}>
                  <button type="button" className="btn btn-primary button-modify" onClick={() => handleClickModOpen(row?.id)}>
                    <ModeIcon className="icon" />
                  </button>
                  {/* <ButtonPen onClick={openModal} /> */}
                </td>
                <td className={getColumnClassName(1)}>{row?.descrizione}</td>
                <td className={getColumnClassName(2)}>
                  <button type="button" className="btn btn-danger button-close" onClick={() => handleClickDelOpen()}>
                    <CloseIcon className="icon-close" />
                  </button>
                </td>
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
                {currentPage} di {Math.ceil(associazioni?.length / itemsPerPage)}
              </strong>
              {/* &nbsp;| &nbsp; */}
              {/* Go To Page &nbsp;&nbsp; */}
              {/* <input
              type="number"
              className="goto-page-input"
              defaultValue={indexOfLastItem >= rowsNominatAziende.length ? currentPage - 1 : currentPage + 1}
            /> */}
            </span>
            <ProButton text=">>" title="Next Page" disabled={indexOfLastItem >= associazioni?.length} clicked={() => handlePageChange(currentPage + 1)} />
          </div>
        </div>
        </div>

        <div> {isModalAddActive && <AssModalAdd show={isModalAddActive} close={handleClickAddClose} />}</div>
        <div>{isModalModActive && <AssModalMod show={isModalModActive} close={handleClickModClose} id={idModal} />}</div>
        <div>{isModalDelActive && <AssModalDel show={isModalDelActive} close={handleClickDelClose} />}</div>
      </div>
    </>
  );
};

export default AssTable;
