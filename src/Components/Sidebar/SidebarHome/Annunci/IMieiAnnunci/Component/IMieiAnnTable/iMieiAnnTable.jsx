import React, { useState } from "react";
/* CSS */
import "./iMieiAnnTable.css";
/* COMPONENTS */
// import ButtonPen from '../../../../../../../Global/ButtonPen/buttonPen';
import ModDatiModVisAnn from "../ModDatiModVisAnn/modDatiModVisAnn";
import ProButton from "../../../../../../Global/ProButton/ProButton";
import { useEffect } from "react";
import axios from "axios";
/* MUI MATERIAL ICONS */
// import ModeIcon from '@mui/icons-material/Mode';
// import CloseIcon from '@mui/icons-material/Close';
// import AddIcon from '@mui/icons-material/Add';

const IMieiAnnTable = () => {
  // const columns = ["", "IdAnnuncio", "Data", "Email", "Telefono"];
  const columns = ["", "IdAnnuncio", "titolo", "descrizione", "quantita"];

  // const rowsEmail = ["test1@gmail.com", "test2@gmail.com", "test3@gmail.com", "test4@gmail.com", "test5@gmail.com"];
  // const rowsData = ["01/01/0001 00:00:00", "01/01/0001 00:00:00", "01/01/0001 00:00:00", "01/01/0001 00:00:00", "01/01/0001 00:00:00"];
  // const rowsTelefono = ["1234567890", "1234567890", "1234567890", "1234567890", "1234567890", "1234567890", "1234567890"];
  // const rowsData = ['123456701890', '1234567890', '0987654321'];
  // const rowsIdAnnuncio = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

  const [categorie, setCategorie] = useState([]);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // const currentRowsIdAnnuncio = rowsIdAnnuncio.slice(indexOfFirstItem, indexOfLastItem);
  // const currentRowsEmail = rowsEmail.slice(indexOfFirstItem, indexOfLastItem);
  // const currentRowsData = rowsData.slice(indexOfFirstItem, indexOfLastItem);
  const currentRowsCategory = categorie.slice(indexOfFirstItem, indexOfLastItem);

  const [isModalDatiVisIntActive, setIsModalDatiVisIntActive] = useState(false);
  // const [categorie, setCategorie] = useState([]);
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
  const getCategories = async () => {
    const result = await axios.get("http://localhost:8080/api/annunci");

    setCategorie(result?.data);
  };
  useEffect(() => {
    getCategories();
  }, []);

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
      return "col-3 px-3 text-center h5";
    } else if (columnIndex === 1) {
      return "col-1 px-1 text-center h5";
    } else if (columnIndex === 2) {
      return "col-3 px-3 text-center h5";
    } else if (columnIndex === 3) {
      return "col-2 px-2 text-center h5";
    } else if (columnIndex === 4) {
      return "col-4 px-4 text-center h5";
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
            {currentRowsCategory?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className={getColumnClassName(0)}>
                  <div>
                    <button type="button" className="btn button-modify" onClick={handleClickDatiModVisIntOpen}>
                      Visualizza Annuncio
                    </button>
                  </div>
                  {/* <ButtonPen onClick={openModal} /> */}
                </td>
                <td className={getColumnClassName(1)}>{row?.id}</td>
                <td className={getColumnClassName(2)}>{row?.titolo}</td>
                <td className={getColumnClassName(3)}>{row?.descrizione}</td>
                <td className={getColumnClassName(4)}>{row?.quantita}</td>
                {/* <div>
                                <button type="button" className="btn btn-danger button-close" onClick={() => ("")}>
                                    <CloseIcon className="icon-close" />
                                </button>
                            </div> */}
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
                {currentPage} di {Math.ceil(categorie.length / itemsPerPage)}
              </strong>
              {/* &nbsp; | &nbsp; Go To Page &nbsp;&nbsp;
            <input
              type="number"
              className="goto-page-input"
              defaultValue={indexOfLastItem >= rowsCatAziende.length ? currentPage - 1 : currentPage + 1}
            /> */}
            </span>
            <ProButton text=">>" title="Next Page" disabled={indexOfLastItem >= categorie.length} clicked={() => handlePageChange(currentPage + 1)} />
          </div>
        </div>
        <div>{isModalDatiVisIntActive && <ModDatiModVisAnn show={isModalDatiVisIntActive} close={handleClickDatiModVisIntClose} />}</div>
      </div>
    </>
  );
};

export default IMieiAnnTable;
