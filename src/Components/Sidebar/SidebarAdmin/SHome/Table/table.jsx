import React, { useEffect, useState } from "react";
import { useTable, usePagination, useGlobalFilter, useSortBy } from "react-table";

//* CSS */
import "./table.css";

//* COMPONENTS */
import arrowDown from "../../../../../Assets/Images/black-arrow-down.png";
import arrowUp from "../../../../../Assets/Images/black-arrow-upp.png";
import Pagination from "../../../../Global/Pagination/Pagination";
// eslint-disable-next-line
import InitMap from "../Map/map";
import Search from "../Search/Search";
// import ProButton from "../../../../Global/ProButton/ProButton";
// eslint-disable-next-line
import ModalImage from "../../../../Global/Modal/modalImage";
// eslint-disable-next-line
import ModalContact from "../../../../Global/ModalContact/modalContact";
import ModalRegister from "../../../../Global/ModalRegister/modalRegister";
// eslint-disable-next-line
import AnnuncioService from "../../../../../DataAPI/services/annuncio.service";

import FilterRegPrvCit from "./FilterRegPrvCit/filterRegPrvCit";
import Chat from "../../../../Global/Chat/Chat";





const Table = ({ handleAddNewRecPopup, propRowData = [], propColumnData = [] }) => {
  const [selectedCell, setSelectedCell] = useState(null);
  const [rowsData, setRowsData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [isArrowSelected, setIsArrowSelected] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [reset, setReset] = useState(false);
  // eslint-disable-next-line
  const [filterActive, setFilterActive] = useState(false);
  const [sortState, setSortState] = useState({ column: "Id Annuncio", order: "assending" }); // inizializza lo stato

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  // eslint-disable-next-line
  const [isUtenteRegistered, setIsUtenteRegistered] = useState(false);

  let isOpenDetailPanel = false;

  //USE EFFECT FOR RENDERING
  useEffect(() => {
    setRowsData(propRowData);
    setSortState({ column: "Id Annuncio", order: "assending" });
  }, [propRowData, reset]);

  useEffect(() => {
    setColumns(propColumnData);
  }, [propColumnData]);
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

  const sortData = (header, sortmethod) => {
    // eslint-disable-next-line
    const dataToIterate = rowsData;
    if (sortmethod === "assending" && header === "Id Annuncio") {
      setRowsData([...rowsData].sort((a, b) => a.id - b.id));
    } else if (sortmethod === "dessending" && header === "Id Annuncio") {
      setRowsData([...rowsData].sort((a, b) => b.id - a.id));
    }
    if (sortmethod === "assending" && header === "Scadenza") {
      setRowsData(
        [...rowsData].sort((a, b) => {
          const dateA = new Date(a.dataDiScadenza);
          const dateB = new Date(b.dataDiScadenza);
          return dateA - dateB;
        })
      );
    } else if (sortmethod === "dessending" && header === "Scadenza") {
      setRowsData(
        [...rowsData].sort((a, b) => {
          const dateA = new Date(a.dataDiScadenza);
          const dateB = new Date(b.dataDiScadenza);
          return dateB - dateA;
        })
      );
    }

    //
    if (sortmethod === "assending" && header === "Quantita") {
      setRowsData([...rowsData].sort((a, b) => a.quantita - b.quantita));
    } else if (sortmethod === "dessending" && header === "Quantita") {
      setRowsData([...rowsData].sort((a, b) => b.quantita - a.quantita));
    }
    setSortState({ column: header, order: sortmethod });
  };
  const renderIdAnnuncio = (column) => {
    const isAscendingActive = sortState.column === column.Header && sortState.order === "assending";
    const isDescendingActive = sortState.column === column.Header && sortState.order === "dessending";

    return (
      <div>
        <span>{column?.Header}</span>
        <span>
          <img src={arrowUp} onClick={() => sortData(column?.Header, "assending")} className={`arrow-down-btn ${isAscendingActive ? "active-arrow" : ""}`} alt="imagePic" />
        </span>
        <span>
          <img src={arrowDown} onClick={() => sortData(column?.Header, "dessending")} className={`arrow-down-btn ${isDescendingActive ? "active-arrow" : ""}`} alt="imagePic" />
        </span>
      </div>
    );
  };

  const renderCellData = (cell) => {
    console.log(cell, "cell");
    const headerName = cell.column.id;
    const id = cell.row.id;
    const arrowContainerClass = selectedCell?.id === id && isArrowSelected ? "arrow-container selected" : "arrow-container";
    console.log(headerName, "header");
    // console.log(cell,"cell")
    return (
      <td {...cell.getCellProps()}>
        {headerName === "openDetail" ? (
          <div className={arrowContainerClass}>
            <img src={arrowDown} onClick={() => handleDetailPanel(cell.row)} className="arrow-down-btn" alt="imagePic" />
          </div>
        ) : headerName === "fotoStringata" ? (
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
    const {
      quantita,
      // eslint-disable-next-line
      address,
      classeWaste,
      descrizioneDetail,
      id,
      fotoStringata,
      // eslint-disable-next-line
      ragioneSociale,
      dataDiScadenza,
    } = row.values;

    const handleOpenContactModal = () => {
      setIsContactModalOpen(true);
    };
    // eslint-disable-next-line 
    const ChatOpenModal = () => {
      setChatOpen(!chatOpen);
    };

    const handleCloseContactModal = () => {
      setIsContactModalOpen(false);
    };
    console.log("chatOpen", chatOpen);
    return (
      <>
        <tr className="detail-wrapper">
          <td className="detail-sections">
            {chatOpen && <Chat propShow={chatOpen} setChatOpen={setChatOpen} />}
            <div className="info-section info-section_text section-padding">
              <span className="color-lightcoral info-section_text">Id Annuncio : {id}</span>
              <span className="color-lightcoral info-section_text">Data Chiusura: {dataDiScadenza}</span>
            </div>
            <div className="info-section section-padding">
              <span className="color-lightcoral info-section_text_color">Plastica Riciclata</span>
            </div>
            <div className="header_value ">
              <span className="header section-padding">Descrizione :</span>
              <span className="header_accessor section-padding" dangerouslySetInnerHTML={{ __html: descrizioneDetail }}></span>
            </div>
            <div className="info-section padding-img">
              <div className="header_value">
                <span className="header section-padding">Quantita disponibile :</span>
                <span className="header_accessor section-padding">{quantita}</span>
              </div>

              <div className="header_value">
                <span className="header section-padding">Classe waste :</span>
                <span className="header_accessor section-padding">{classeWaste}</span>
              </div>
              <div className="header_value">
                <img src={fotoStringata} alt="img" className="imgSize" />
              </div>
            </div>
            <div className="header_value header_offerente">
              <span className="header section-padding">Offerente :</span>
              <span className="header_accessor section-padding">dummyData</span>
              <div className="section-padding">
                <button onClick={() => handleOpenContactModal()} className="btn btn-primary mt-2">
                  {/* <button onClick={ChatOpenModal} className="btn btn-primary mt-2"> */}
                  Contatta
                </button>

                {isContactModalOpen && isUtenteRegistered && <ModalContact propShow={isContactModalOpen} propClose={handleCloseContactModal} />}
                {isContactModalOpen && !isUtenteRegistered && <ModalRegister propShow={isContactModalOpen} propClose={handleCloseContactModal} setShowChatModal={setChatOpen} />}
              </div>
            </div>
          </td>
        </tr>
      </>
    );
  };
  console.log(headerGroups, "headerGroups");
  const filterData = (data) => {
    return data?.filter((val, index) => val.detail === false);
  };
  const filterColoumData = (data) => {
    return data?.filter((val, index) => val?.column?.detail === false);
  };

  // this function is callled when we select the provincia value
  const handleFilterRowData = (e) => {
    if (e.idProvincia) {
      let getFilteredAnnunci = [...propRowData].filter((p) => p.localita.provinciaCodice.toUpperCase() === e.idProvincia.toUpperCase());
      setRowsData(getFilteredAnnunci);
    }
  };
  const handleFilterRegioniData = (e) => {
    if (e.length > 0) {
      let getFilteredAnnunci = propRowData;
      let arrayData = [];
      e.forEach((data) => {
        // sostituito map con forEach
        let result = getFilteredAnnunci.filter((p) => p.localita.provinciaCodice.toUpperCase() === data);
        if (result.length > 0) {
          arrayData = [...arrayData, ...result];
        }
      });
      setRowsData(arrayData);
    }
  };

  // this function is callled when we select the Citta value
  const handleFilterDataCitta = (e) => {
    if (e.idCitta) {
      let getfilteredCittaData = [...propRowData].filter((p) => p.localita.id === e.idCitta);
      setRowsData(getfilteredCittaData);
    }
  };

  //**--------------------------------------RETURN------------------------------------------------------**
  return (
    <div className="h-[100%] ">
      <div className="row" style={{display:"flex",alignItems:"end"}}>
        <div className="col-lg-5 col-md-12 col-sm-12 col-12">
          <div className="flex-search-input justify-content-between align-items-center addNewStyle">
            <Search filter={globalFilter} setFilter={setGlobalFilter} />
            {/* <ProButton text="+ AddNew" title="Add New Record" clicked={handleAddNewRecPopup} /> */}
          </div>
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12 col-12">
          <div className="flex-search-input justify-content-between align-items-center addNewStyle">
            <FilterRegPrvCit
              propFilterRowData={handleFilterRowData}
              propFilterDataCitta={handleFilterDataCitta}
              propFilterRegioniData={handleFilterRegioniData}
              propReset={() => setReset((prev) => !prev)}
            />
          </div>
        </div>
      </div>
     
      <div style={{ marginTop: "10px" }} className="table-responsive">
        <table {...getTableProps()} className="table">
          <thead>
            {headerGroups?.map((headerGroup, index) => (
              <tr key={`headerGroup-${index}`} className="table-row" {...headerGroup.getHeaderGroupProps()}>
                {filterData(headerGroup.headers)?.map((column, columnIndex) => (
                  <th key={`column-${index}-${columnIndex}`} className={`table-header-item header-color-bg-font`} {...column.getHeaderProps()}>
                    {column?.Header === "Immagine" || column?.Header === "" || column?.Header === "Classe Waste" ? column.render("Header") : renderIdAnnuncio(column)}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.length > 0 ? (
              page.map((row, rowIndex) => {
                prepareRow(row);

                return (
                  <React.Fragment key={`row-${rowIndex}`}>
                    <tr {...row.getRowProps()} className="table-row">
                      {filterColoumData(row.cells)?.map((cell, cellIndex) => renderCellData(cell, cellIndex))}
                    </tr>
                    {selectedCell && renderDetailPanel(row)}
                  </React.Fragment>
                );
              })
            ) : (
              <tr>
                <td colSpan={5}>No Record Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div style={{ marginBottom: "25px" }}>
        <Pagination nextPage={nextPage} previousPage={previousPage} canPreviousPage={canPreviousPage} canNextPage={canNextPage} pageOptions={pageOptions} pageIndex={pageIndex} gotoPage={gotoPage} />
      </div>
     
    </div>
  );
};

export default Table;
