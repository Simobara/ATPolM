import React, { useEffect, useState } from "react";
/* CSS */
import "./home.css";
/* COMPONENTS */
import { newData } from "../../../../DataAPI/newData";
import { tableColumn } from "./Data/MainTable/Columns";
import Table from "./Table/table";
import AnnuncioService from "../../../../DataAPI/services/annuncio.service";
// import AddNewRecordForm from "./AddNewRecord/AddNewRecord";

const SHome = () => {
  // const [showAddNewRecPopup, setShowAddNewRecPopup] = useState(false);
  const [rowsData, setRowsData] = useState([...newData]);
  const [annunci, setAnnunci] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [tableColumns, setTableColumns] = useState([...tableColumn])

  // const handleAddNewRecPopup = () => {
  //   setShowAddNewRecPopup((p) => !p);
  // };
  // const onClosePopup = () => {
  //   setShowAddNewRecPopup(false);
  // };
  // eslint-disable-next-line
  const onSubmitForm = (formData) => {
    const data = [...rowsData];
    data.push({ ...formData });
    setRowsData(data);
    // onClosePopup();
  };
  const { getAnnunci } = AnnuncioService();
  const getAnnunciData = async () => {
    const response = await getAnnunci()
    setAnnunci(response?.data?.map((data) => ({
      ...data,
      classeWaste: data?.materiale?.descrizione,
      descrizioneDetail: data?.descrizione
    })))

    if (response?.data) {
      setLoading(false)
    }
  }
  useEffect(() => {
    getAnnunciData()
    // eslint-disable-next-line
  }, [])


  return loading ? (null) : (
    <>
      <div className="elems-container">
        <div style={{ fontSize: '20px', marginBottom: '10px', marginTop: '5rem' }}>
          <div style={{
            height: '70px',
            backgroundColor: '#030947',
            width: '100%',
           
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold'
          }} className="bold-columns text-center text-white">
            HOME
          </div>
          <div className="" style={{ backgroundColor: "#f3f3f3",paddingTop:"20px",paddingLeft:"30px",paddingRight:"30px" }}>
            <div className="row row-overflow">
              <Table
                propColumnData={[...tableColumn]}
                propRowData={annunci}
              //  {/* handleAddNewRecPopup={handleAddNewRecPopup} */}
              />
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

          {/* {showAddNewRecPopup && <AddNewRecordForm rowsLength={rowsData?.length || ''} onClosePopup={onClosePopup} onCancel={onClosePopup} onSubmitForm={onSubmitForm} />} */}
        </div>
      </div>
    </>
  );
};

export default SHome;
