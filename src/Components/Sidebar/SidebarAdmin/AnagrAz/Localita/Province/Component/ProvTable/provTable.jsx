import React, { useEffect, useState } from "react";
import axios from "axios";

//* CSS
import "./provTable.css";

//* COMPONENTS
import ProvModalAdd from "../ProvModalAdd/provModalAdd";
import ProvModalMod from "../ProvModalMod/provModalMod";
import ProvModalDel from "../ProvModalDel/provModalDel";
import ProButton from "../../../../../../../Global/ProButton/ProButton";

//* MUI MATERIAL ICONS
import ModeIcon from "@mui/icons-material/Mode";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";












const ProvTable = () => {
  const columns = ["", "Codice Provincia", "Codice Regione", ""];

  // eslint-disable-next-line
  const rowsProv = ["BG1", "BG2", "BG", "BG", "BG5", "BG", "BG7", "BG", "BG9", "BG10", "BG11", "BG12", "BG", "14", "PIPPO", "16", "PAPERINO", "PLUTO18", "TOPOLINIO19", "MINNIE20", "GBSCUGUCIA 21"];

  const rowsCodReg = ["ABR", "BAS", "CAL", "CAM", "EMR", "FVG", "LAZ", "LIG", "LOM", "MAR10", "MOL11", "PIE", "PUG13", "SAR", "SIC15", "TOS", "TRE17", "UMB", "VAO19", "VEN", "REGIONE 21"];


  const [province, setProvince] = useState([]);
  // eslint-disable-next-line 
  const [codIdProvinciaFiltered, setCodIdProvinciaFiltered] = useState([]);








  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentRowsProv = province?.slice(indexOfFirstItem, indexOfLastItem);

  //eslint-disable-next-line
  const currentRowsCodReg = rowsCodReg.slice(indexOfFirstItem, indexOfLastItem);



  const [rowId, setRowId] = useState("");
  const [isModalAddActive, setIsModalAddActive] = useState(false);
  const [isModalModActive, setIsModalModActive] = useState(false);
  const [isModalDelActive, setIsModalDelActive] = useState(false);
  const [rowProvincia, setRowProvincia] = useState("");





  const getProvince = async () => {
    const result = await axios.get("http://localhost:8080/api/province");

    // Converti i dati in UPPERCASE prima di salvarli nello stato
    const upperCaseData = result?.data.map((provincia) => ({
      ...provincia,
      codice: provincia.codice.toUpperCase(),
      // Aggiungi altre chiavi qui se necessario
    }));


    setProvince(upperCaseData);

    const codIdProvinciaFiltered = (upperCaseData).map((provincia) => ({
      id: provincia.id,
      codice: provincia.codice,
    }));

    setCodIdProvinciaFiltered(codIdProvinciaFiltered);
    console.log("codIdProvinciaFiltered PROVTABLE: ", codIdProvinciaFiltered);
  };

  useEffect(() => {
    getProvince();
    // eslint-disable-next-line 
  }, [isModalAddActive, isModalModActive, isModalDelActive]);





  const provCod = province.map(prov => prov.codice)

  console.log("Descrizione Province PROVTABLE:", provCod);





  const handleClickAddOpen = () => {
    setIsModalAddActive(true);
    console.log("modalAdd open");
  };
  const handleClickAddClose = () => {
    setIsModalAddActive(false);
    console.log("modalAdd close");
  };

  const handleClickModOpen = (idrow, codice) => {
    setIsModalModActive(true);
    setRowId(idrow);
    setRowProvincia(codice)
    // console.log("modalModify open");
    // console.log("Row index:", rowIndex);
    // console.log("idRow:", idrow);
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
      return "col-6 px-6 text-center h5 justify-content-center";
    } else if (columnIndex === 2) {
      return "col-4 px-4 text-center h5 justify-content-center";
    } else if (columnIndex === 3) {
      return 'col-2 px-2 text-center h5 justify-content-center';
      // } else if (columnIndex === 4) {
      //     return 'col-4 px-4 text-center h5';
    } else {
      return "col-12 px-12 text-center h5 justify-content-center";
    }
  };






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
          LOCALITA' - PROVINCE
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
            {currentRowsProv?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className={getColumnClassName(0)}>
                  <button type="button" className="btn btn-primary button" onClick={() => handleClickModOpen(row?.id, row?.codice)}>
                    <ModeIcon className="icon" />
                  </button>
                  {/* <ButtonPen onClick={openModal} /> */}
                </td>
                <td className={getColumnClassName(1)}>{row?.codice}</td>
                <td className={getColumnClassName(2)}>{row?.regioneCodice}</td>
                <td className={getColumnClassName(3)}>
                  <button type="button" className="btn btn-danger button-close " onClick={() => handleClickDelOpen()}>
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
                {currentPage} di {Math.ceil(province?.length / itemsPerPage)}
              </strong>
              {/* &nbsp; | &nbsp; Go To Page &nbsp;&nbsp;
                        <input
                            type="number"
                            className="goto-page-input"
                            defaultValue={currentPage !== 1 && indexOfLastItem >= rowsDescr.length ? currentPage - 1 : currentPage + 1}
                        /> */}
            </span>
            <ProButton text=">>" title="Next Page" disabled={indexOfLastItem >= province?.length} clicked={() => handlePageChange(currentPage + 1)} />
          </div>
        </div>
        </div>
        <div>{isModalAddActive && <ProvModalAdd
          propShow={isModalAddActive}
          propClose={handleClickAddClose}
          propListaProvCodAdded={provCod} />}
        </div>
        <div>{isModalModActive && <ProvModalMod
          propShow={isModalModActive}
          propClose={handleClickModClose}
          propRowID={rowId}
          propListaProvCodAdded={provCod}
          propRowProvincia={rowProvincia}
        // codIdProvinFiltered={codIdProvinciaFiltered}
        // listaProvDescrAdded={provCod}
        />}
        </div>
        <div>{isModalDelActive && <ProvModalDel show={isModalDelActive} close={handleClickDelClose} />}</div>
      </div>
    </>
  );
};

export default ProvTable;
