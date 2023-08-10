import React, { useState } from "react";
/* CSS */
import "./udmTable.css";
/* COMPONENTS */
// import ButtonPen from '../../../../../../../Global/ButtonPen/buttonPen';
import UDMModalAdd from "../UDMModalAdd/udmModalAdd";
import UDMModalMod from "../UDMModalMod/udmModalMod";
import UDMModalDel from "../UDMModalDel/udmModalDel";
import ProButton from "../../../../../../Global/ProButton/ProButton";
/* MUI MATERIAL ICONS */
import ModeIcon from "@mui/icons-material/Mode";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useEffect } from "react";
import axios from "axios";

const UDMTable = () => {
  const[id,setId]=useState()
  const[udm,setUdm]=useState([])
  const columns = ["", "Unità di misura", ""];

  const rowsCatAziende = ["Nomi", "mian i love you", "akif shake pila dy", "D", "E", "F", "G"];

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = udm?.slice(indexOfFirstItem, indexOfLastItem);

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
    setId(id)
    setIsModalModActive(true);
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
      return "col-12 px-12 text-center h5";
    }
  };

  const getUdm = async () => {
    const result = await axios.get("http://localhost:8080/api/unita-di-misura");
console.log(result)
    setUdm(result?.data);
  };
  useEffect(() => {
    getUdm();
  }, [isModalDelActive,isModalModActive,isModalAddActive]);

  return (
    <>
      <div style={{ marginTop: "5rem" }}>
        <table className="table table-bordered w-100">
          <thead>
            <tr className="bold-columns text-center">
              {columns.map((column, columnIndex) => (
                <th key={columnIndex}>
                  {columnIndex === 0 && (
                    <button type="button" className="btn button-modify icon-add" onClick={()=>handleClickAddOpen()}>
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
                  <button type="button" className="btn btn-primary button-modify" onClick={()=>handleClickModOpen(row?.id)}>
                    <ModeIcon className="icon" />
                  </button>
                 
                </td>
                <td className={getColumnClassName(1)}>{row?.descrizione}</td>
                <td className={getColumnClassName(2)}>
                  <button type="button" className="btn btn-danger button-close" onClick={()=>handleClickDelOpen()}>
                    <CloseIcon className="icon-close" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginBottom: "100px" }} className="d-flex justify-content-center w-100 text-sm page-text-input">
          <div className="widthSmall d-flex justify-content-around align-items-center my-1">
            <ProButton text="<<" title="Previous Page" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} />
            <span className="text-center text-sm">
              Pagina
              <strong className="mx-3 text-sm">
                {currentPage} di {Math.ceil(udm.length / itemsPerPage)}
              </strong>
              {/* &nbsp; | &nbsp; Go To Page &nbsp;&nbsp;
            <input
              type="number"
              className="goto-page-input"
              defaultValue={indexOfLastItem >= rowsCatAziende.length ? currentPage - 1 : currentPage + 1}
            /> */}
            </span>
            <ProButton text=">>" title="Next Page" disabled={indexOfLastItem >= udm.length} onClick={() => handlePageChange(currentPage + 1)} />
          </div>
        </div>
        <div> {isModalAddActive && <UDMModalAdd show={isModalAddActive} close={()=>handleClickAddClose()} />}</div>
        <div> {isModalModActive && <UDMModalMod show={isModalModActive} close={()=>handleClickModClose()} id={id}/>}</div>
        <div> {isModalDelActive && <UDMModalDel show={isModalDelActive} close={()=>handleClickDelClose()} />}</div>
      </div>
    </>
  );
};

export default UDMTable;
