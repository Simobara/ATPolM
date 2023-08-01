import React, { useState } from "react";
/* CSS */
import "./assTable.css";
/* COMPONENTS */
// import ButtonPen from '../../../../../../../Global/ButtonPen/buttonPen';
import AssModalAdd from "../AssModalAdd/assModalAdd";
import AssModalMod from "../AssModalMod/assModalMod";
import AssModalDel from "../AssModalDel/assModalDel";
import ProButton from "../../../../../../Global/ProButton/ProButton";
import AssociazioneService from "../../../../../../../DataAPI/services/associazione.service";

// import { useTable, usePagination, useGlobalFilter, useSortBy } from "react-table";
/* MUI MATERIAL ICONS */
import ModeIcon from "@mui/icons-material/Mode";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
// import Pagination from "../../../../SHome/Pagination/Pagination";




const AssTable = () => {
  const columns = ["", "Descrizione", ""];
  const rowsNominatAziende = ["A.I.B.", "AFIDAMP", "AGR", "ALI", "ANCO", "ANGAISA", "ANIT", "API", "API-INDUSTRIA-MANTOVA"];



  const [formData, setFormData] = useState({
    descrizione: "",
  });

  const { addAssociazione } = AssociazioneService();



  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = rowsNominatAziende.slice(indexOfFirstItem, indexOfLastItem);

  const [isModalAddActive, setIsModalAddActive] = useState(false);
  const [isModalModActive, setIsModalModActive] = useState(false);
  const [isModalDelActive, setIsModalDelActive] = useState(false);

  //   const {
  //     getTableProps,
  //     getTableBodyProps,
  //     headerGroups,
  //     prepareRow,
  //     setGlobalFilter,
  //     page,
  //     canPreviousPage,
  //     canNextPage,
  //     gotoPage,
  //     pageOptions,
  //     nextPage,
  //     previousPage,
  //     state: { pageIndex, globalFilter }, //fpr Pagination and global filter
  //   } = useTable(
  //     {
  //       columns,
  //       data: rowsData,
  //       initialState: { pageIndex: 0 }, // Initial page index
  //     },
  //     useGlobalFilter,
  //     useSortBy,
  //     usePagination
  //   );

  const handleClickAddOpen = () => {
    setIsModalAddActive(true);
    console.log("modal add open");
  };
  const handleClickAddClose = () => {
    setIsModalAddActive(false);
    console.log("modal add close");
  };

  const handleClickModOpen = () => {
    setIsModalModActive(true);
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

  return (
    <>
      <div style={{ marginTop: "5rem" }}>
        <table className="table table-bordered w-100">
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
            {currentItems.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className={getColumnClassName(0)}>
                  <button type="button" className="btn btn-primary button-modify" onClick={handleClickModOpen}>
                    <ModeIcon className="icon" />
                  </button>
                  {/* <ButtonPen onClick={openModal} /> */}
                </td>
                <td className={getColumnClassName(1)}>{row}</td>
                <td className={getColumnClassName(2)}>
                  <button type="button" className="btn btn-danger button-close" onClick={handleClickDelOpen}>
                    <CloseIcon className="icon-close" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <Pagination nextPage={nextPage} previousPage={previousPage} canPreviousPage={canPreviousPage} canNextPage={canNextPage} pageOptions={pageOptions} pageIndex={pageIndex} gotoPage={gotoPage} /> */}
        <div style={{ marginBottom: "100px" }} className="d-flex justify-content-center w-100 text-sm page-text-input">
          <div className="widthSmall d-flex justify-content-around align-items-center my-1">
            <ProButton text="<<" title="Previous Page" disabled={currentPage === 1} clicked={() => handlePageChange(currentPage - 1)} />
            <span className="text-center text-sm">
              Pagina
              <strong className="mx-3 text-sm">
                {currentPage} di {Math.ceil(rowsNominatAziende.length / itemsPerPage)}
              </strong>
              {/* &nbsp;| &nbsp; */}
              {/* Go To Page &nbsp;&nbsp; */}
              {/* <input
              type="number"
              className="goto-page-input"
              defaultValue={indexOfLastItem >= rowsNominatAziende.length ? currentPage - 1 : currentPage + 1}
            /> */}
            </span>
            <ProButton text=">>" title="Next Page" disabled={indexOfLastItem >= rowsNominatAziende.length} clicked={() => handlePageChange(currentPage + 1)} />
          </div>
        </div>

        <div> {isModalAddActive && <AssModalAdd show={isModalAddActive} close={handleClickAddClose} />}</div>
        <div>{isModalModActive && <AssModalMod show={isModalModActive} close={handleClickModClose} />}</div>
        <div>{isModalDelActive && <AssModalDel show={isModalDelActive} close={handleClickDelClose} />}</div>
      </div>
    </>
  );
};

export default AssTable;
