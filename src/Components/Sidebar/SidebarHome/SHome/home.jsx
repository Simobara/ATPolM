import React, { useState } from "react";
/* CSS */
import "./home.css";
/* COMPONENTS */
import { newData } from "../../../../DataAPI/newData";
import { tableColumn } from "./Data/MainTable/Columns";
import Table from "./Table/Table";
import AddNewRecordForm from "./AddNewRecord/AddNewRecord";
// import AnnuncioService from "../../../../DataAPI/services/annuncio.service";

const SHome = () => {
  const [showAddNewRecPopup, setShowAddNewRecPopup] = useState(false);
  const [rowsData, setRowsData] = useState([...newData]);
  // const [tableColumns, setTableColumns] = useState([...tableColumn]) 

  // const { getAnnunci } = AnnuncioService();

  const handleAddNewRecPopup = () => {
    setShowAddNewRecPopup((p) => !p);
  };
  const onClosePopup = () => {
    setShowAddNewRecPopup(false);
  };
  const onSubmitForm = (formData) => {
    const data = [...rowsData];
    data.push({ ...formData });
    setRowsData(data);
    onClosePopup();
  };

  // const [annunci, setAnnunci] = useState([]);
  // useEffect(() => {
  //   if (getAnnunci) {
  //     if (typeof getAnnunci === 'function') {
  //       setAnnunci(getAnnunci());
  //     }
  //   }
  // }, [])


  // useEffect(() => {
  //   if (getAnnunci) {
  //     const { PromiseResult } = annunci;
  //     console.log("IMPRIME GET ANNUNCI:", annunci);
  //     console.log("IMPRIME result:", PromiseResult);
  //   }

  // }, [getAnnunci])





  return (
    <>
      <div className="elems-container" style={{ fontSize: "1.9rem", marginTop: "80px" }}>
        <div className="container-fluid">
          <div className="row row-overflow">
            <Table columnData={[...tableColumn]} rowData={rowsData} handleAddNewRecPopup={handleAddNewRecPopup} />
            {/*<MainTable*/}
            {/*    getTableProps={getTableProps}*/}
            {/*    getTableBodyProps={getTableBodyProps}*/}
            {/*    headerGroups={headerGroups}*/}
            {/*    prepareRow={prepareRow}*/}
            {/*    page={page} //rows was replaced by page for pagination*/}
            {/*/>*/}
          </div>
          {/*<div className="container-fluid">*/}
          {/*    <div className="row row-overflow">*/}
          {/*        <Map/>*/}
          {/*    </div>*/}
          {/*</div>*/}
        </div>
        {/* <div className="chat-container"> */}

        {showAddNewRecPopup && <AddNewRecordForm rowsLength={rowsData?.length || ''} onClosePopup={onClosePopup} onCancel={onClosePopup} onSubmitForm={onSubmitForm} />}
      </div>
    </>
  );
};

export default SHome;
