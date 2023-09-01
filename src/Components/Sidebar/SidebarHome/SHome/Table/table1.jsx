import React, { useEffect, useState } from "react";
import { useTable, usePagination, useGlobalFilter, useSortBy } from "react-table";
/* CSS */
import "./table.css";
/* COMPONENTS */
import arrowDown from "../../../../../Assets/Images/black-arrow-down.png";
import Pagination from "../../../../Global/Pagination/Pagination";
import InitMap from "../Map/map";
import Search from "../Search/Search";
// import ProButton from "../../../../Global/ProButton/ProButton";
import ModalImage from "../../../../Global/Modal/modalImage";
import ModalContact from "../../../../Global/ModalContact/modalContact";
let isOpenDetailPanel = false;



const Table = ({ handleAddNewRecPopup, rowData = [], columnData = [] }) => {
  const [selectedCell, setSelectedCell] = useState(null);
  const [rowsData, setRowsData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [isArrowSelected, setIsArrowSelected] = useState(false);

  //USE EFFECT FOR RENDERING
  useEffect(() => {
    setRowsData(rowData);
  }, [rowData]);

  useEffect(() => {
    setColumns(columnData);
  }, [columnData]);
  //-------------------------

  // Create an instance of the table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    gotoPage,
    pageOptions,
    nextPage,
    previousPage,
    state: { pageIndex, globalFilter }, //fpr Pagination and global filter
  } = useTable(
    {
      columns,
      data: rowsData,
      initialState: { pageIndex: 0 }, // Initial page index
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  console.log("==>", getTableProps, getTableBodyProps, headerGroups, prepareRow, setGlobalFilter, page, canPreviousPage, canNextPage, gotoPage, pageOptions, nextPage, previousPage);

  //--------------------------------

  const handleDetailPanel = (row) => {
    if (selectedCell?.id === row.id && isOpenDetailPanel) {
      isOpenDetailPanel = false;
      setSelectedCell(null);
      setIsArrowSelected(false);
    } else {
      isOpenDetailPanel = true;
      setSelectedCell(row);
      setIsArrowSelected(true);
    }
  };

  const renderCellData = (cell) => {
    const headerName = cell.column.id;
    const id = cell.row.id;
    const arrowContainerClass = selectedCell?.id === id && isArrowSelected ? "arrow-container selected" : "arrow-container";

    return (
      <td {...cell.getCellProps()}>
        {headerName === "openDetail" ? (
          <div className={arrowContainerClass}>
            <img src={arrowDown} onClick={() => handleDetailPanel(cell.row)} className="arrow-down-btn" alt="imagePic" />
          </div>
        ) : headerName === "immagine" ? (
          <img src={cell.value} alt="imagePic" className="table-data-img" />
        ) : (
          <span>{cell.value}</span>
        )}
      </td>
    );
  };

  const renderDetailPanel = (row) => {
    if (row?.id !== selectedCell?.id) return;
    // const rowId = row.id
    // if (row)
    const { quantita, address, classeWaste, descrizione, id, immagine, ragioneSociale } = row.values;

    return (
      <>
        <tr className="detail-wrapper">
          <td className="detail-sections">
            <section className="info-section" >


              <span className="color-lightcoral">Id Annuncio : {id}</span>
              <div className="section-item">
                <strong className="color-white"></strong>
              </div>
              <div className="section-item">
                <strong className="color-blue">Descrizione:</strong>
                <span>{descrizione}</span>
              </div>
              <div className="section-item">
                <strong className="color-blue">Quantita:</strong>
                <span>{quantita}</span>
              </div>
              <div className="section-item">
                <strong className="color-blue">Classe Waste</strong>
                <span>{classeWaste}</span>
              </div>


            </section>
            <section className="section-details">


              <div className="section-item">
                <strong className="color-blue">Offerente:</strong>
                <span>{ragioneSociale}</span>
                <ModalContact sell={ragioneSociale} />
              </div>
              <div className="section-item">
                <img src={immagine} alt="imagePic" />
                <ModalImage igm={immagine} />
              </div>


            </section>
            <section className="map-wrapper">
              <div className="section-item">
                <strong className="color-blue">Indirizzo</strong>
                <span>{address}</span>
              </div>
              <div className="map-wrapper">
                <InitMap />
                {/*<AddressToCoordinates/>*/}
              </div>
            </section>
          </td>
        </tr>
      </>
    );
  };
  //<<--------------------------------------RETURN------------------------------------------------------>>
  return (
    <div className="h-[100%] ">
      <div className=" flex-search-input justify-content-between align-items-center addNewStyle">
        <Search filter={globalFilter} setFilter={setGlobalFilter} />
        {/* <ProButton text="+ AddNew" title="Add New Record" clicked={handleAddNewRecPopup} /> */}
      </div>
      <div style={{ marginTop: "10px" }} className="table-responsive">
        <table {...getTableProps()} className="table">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr key={`headerGroup-${index}`} className="table-row" {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, columnIndex) => (
                  <th key={`column-${index}-${columnIndex}`} className="table-header-item" {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, rowIndex) => {
              prepareRow(row);
              return (
                <React.Fragment key={`row-${rowIndex}`}>
                  <tr {...row.getRowProps()} className="table-row">
                    {row.cells.map((cell, cellIndex) => renderCellData(cell, cellIndex))}
                  </tr>
                  {selectedCell && renderDetailPanel(row)}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
      <div style={{ marginBottom: "25px" }}>
        <Pagination
          nextPage={nextPage}
          previousPage={previousPage}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageOptions={pageOptions}
          pageIndex={pageIndex}
          gotoPage={gotoPage}
        />
      </div>
    </div>
  );
};

export default Table;
