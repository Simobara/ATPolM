import React, { useState } from "react";
/* CSS */
import "./aziendeTable.css";
/* COMPONENTS */
// import ButtonPen from '../../../../../../../Global/ButtonPen/buttonPen';
import AziendeModalAdd from "../AziendeModalAdd/aziendeModalAdd";
import AziendeModalMod from "../AziendeModalMod/aziendeModalMod";
import AziendeModalDel from "../AziendeModalDel/aziendeModalDel";
import ProButton from "../../../../../Global/ProButton/ProButton";
/* MUI MATERIAL ICONS */

import Card from "@mui/material/Card";
// import ModeIcon from "@mui/icons-material/Mode";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import Search from "../../../../../Sidebar/SidebarAdmin/SHome/Search/Search";


const AziendeTable = () => {
  const columns = ["", "Ruoli", ""];

  const rowsCatAziende = ["info@info", "info@info", "info@info", "info@info", "info@info", "info@info", "info@info", "info@info", "info@info", "info@info", "info@info", "info@info"];

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = rowsCatAziende.slice(indexOfFirstItem, indexOfLastItem);

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

  // eslint-disable-next-line 
  const handleClickModOpen = () => {
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
      return "col-4 px-8  h5 justify-content-center";
    } else if (columnIndex === 2) {
      return "col-4 px-2 h5 justify-content-center";
      // } else if (columnIndex === 3) {
      //     return 'col-2 px-2 text-center h5';
      // } else if (columnIndex === 4) {
      //     return 'col-4 px-4 text-center h5';
    } else if (columnIndex === 3) {
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
      <div className="aziendeTableMargin">
        <div className=" flex-search-input justify-content-between align-items-center addNewStyle">
          <Search />
        </div>
        <Card>
          <div className="table-responsive">
            <table className="table table-bordered w-100">
              <thead>
                <tr className="bold-columns">
                  <th>
                    {columns.map((column, columnIndex) => (
                      <>
                        {columnIndex === 0 && (
                          <button type="button" className="btn button-modify icon-add" onClick={handleClickAddOpen}>
                            <AddIcon className="icon" />
                          </button>
                        )}
                      </>
                    ))}
                  </th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className={getColumnClassName(0)}></td>
                    <td className={getColumnClassName(1)}>{row}</td>
                    <td className={getColumnClassName(2)}>{row}</td>
                    <td className={getColumnClassName(3)}>
                      <button type="button" className="btn btn-danger button-close" onClick={handleClickDelOpen}>
                        <CloseIcon className="icon-close" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ marginBottom: "", background: "rgb(9, 88, 207)", color: "#fff", height: "60px", marginTop: "-15px" }} className="d-flex justify-content-center text-sm">
              <div className=" d-flex justify-content-around align-items-center my-1">
                <ProButton text="<<" title="Previous Page" disabled={currentPage === 1} clicked={() => handlePageChange(currentPage - 1)} />
                <span className="text-center text-sm" style={{ marginRight: "30px", marginLeft: "30px" }}>
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
        </Card>
        <div>{isModalAddActive && <AziendeModalAdd show={isModalAddActive} close={handleClickAddClose} />}</div>
        <div>{isModalModActive && <AziendeModalMod show={isModalModActive} close={handleClickModClose} />}</div>
        <div>{isModalDelActive && <AziendeModalDel show={isModalDelActive} close={handleClickDelClose} />}</div>
      </div>
    </>
  );
};

export default AziendeTable;
