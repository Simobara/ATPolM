import React, { useEffect, useState } from "react";
import axios from "axios";

//* CSS
import "./catTable.css";

//* COMPONENTS
import CatModalAdd from "../CatModalAdd/catModalAdd";
import CatModalMod from "../CatModalMod/catModalMod";
import CatModalDel from "../CatModalDel/catModalDel";
import ProButton from "../../../../../../Global/ProButton/ProButton";

//* MUI MATERIAL ICONS
import ModeIcon from "@mui/icons-material/Mode";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";













const CatTable = () => {
  const columns = ["", "Descrizione", ""];
  // const rowsCatAziende = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W"];
  const [categorie, setCategorie] = useState([]);






  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => { setCurrentPage(pageNumber); };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = categorie?.slice(indexOfFirstItem, indexOfLastItem);


  const [id, setID] = useState("");
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

  const handleClickModOpen = (id) => {
    setIsModalModActive(true);
    setID(id);
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
      return "col-2 px-2 text-center h5  justify-content-center";
      // } else if (columnIndex === 3) {
      //     return 'col-2 px-2 text-center h5';
    } else {
      return "col-12 px-12 text-center h5 justify-content-center";
    }
  };





  const getCategories = async () => {
    const result = await axios.get("http://localhost:8080/api/categorie");
    setCategorie(result?.data);
  };
  useEffect(() => {
    getCategories();
  }, [isModalAddActive, isModalModActive, isModalDelActive]);







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
        }} className="bold-columns text-center text-white header-hieght">
          CATEGORIE
        </div>
        <div className="container custom-container" style={{ backgroundColor: "#f3f3f3" }}>
        <div className="table-responsive tabel-Button"> <table className="table table-bordered w-100">
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
            {currentItems?.length > 0 && currentItems?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className={getColumnClassName(0)}>

                  <button type="button" className="btn btn-primary button-modify" onClick={() => handleClickModOpen(row?.id)}>
                    <ModeIcon className="icon" />
                  </button>
                  {/* <ButtonPen onClick={openModal} /> */}
                </td>
                <td className={getColumnClassName(1)}>{row?.descrizione}</td>
                <td className={getColumnClassName(2)}>
                  <button type="button" className="btn btn-danger button-close " onClick={handleClickDelOpen}>
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
                {currentPage} di {Math.ceil(categorie?.length / itemsPerPage)}
              </strong>
              {/* &nbsp; | &nbsp; Go To Page &nbsp;&nbsp;
            <input
              type="number"
              className="goto-page-input"
              defaultValue={indexOfLastItem >= rowsCatAziende.length ? currentPage - 1 : currentPage + 1}
            /> */}
            </span>
            <ProButton text=">>" title="Next Page" disabled={indexOfLastItem >= categorie?.length} clicked={() => handlePageChange(currentPage + 1)} />
          </div>
        </div>
        </div>
        <div>{isModalAddActive && <CatModalAdd show={isModalAddActive} close={handleClickAddClose} />}</div>
        <div>{isModalModActive && <CatModalMod show={isModalModActive} close={handleClickModClose} id={id} />}</div>
        <div>{isModalDelActive && <CatModalDel show={isModalDelActive} close={handleClickDelClose} />}</div>
      </div >
    </>
  );
};

export default CatTable;
