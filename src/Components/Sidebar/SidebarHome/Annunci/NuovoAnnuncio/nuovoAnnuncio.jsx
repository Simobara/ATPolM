import React, { useState, useEffect, useRef } from "react";

//*CSS
// import "./nuovoAnnuncio.css";

//*REACT VALIDATION
// import CheckButton from "react-validation/build/button";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import withRouter from "../../../../../DataAPI/common/with-router";
import AnnuncioService from "../../../../../DataAPI/services/annuncio.service";
import axios from "axios";
import JoditEditor from "jodit-react";
import { editorConfig } from './EditorConfig';

//*COMPONENTS
// import SaveButton from "./Component/SaveButton/saveButton";
// import DeleteButton from "./Component/DeleteButton/deleteButton";
import DropdownMenu from "./Component/DropdownMenu/dropdownMenu";
import AddCitModal from "./Component/AddCitModal/addCitModal";

//* MUI MATERIAL ICONS
import AddBoxIcon from '@mui/icons-material/AddBox'

import SaveIcon from '@mui/icons-material/Save';







const NuovoAnnuncio = (props) => {
  // eslint-disable-next-line 
  const refForm = useRef(null);
  // eslint-disable-next-line 
  const refCheckBtn = useRef(null);
  // eslint-disable-next-line 
  const [selectedImage, setSelectedImage] = useState(null);
  // eslint-disable-next-line 
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line 
  const [message, setMessage] = useState("");
  // eslint-disable-next-line 
  const [date, setDate] = useState("");
  // eslint-disable-next-line 
  const [val, setVal] = useState("");
  // eslint-disable-next-line 
  const handlerChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      "descrizione": value,
    }));
  };
  const [formData, setFormData] = useState({
    titolo: "",
    descrizione: "",
    quantita: "",
  });
  // eslint-disable-next-line 
  const editor = useRef(null);
  // eslint-disable-next-line 
  const [content, setContent] = useState();
  const [citta, setCitta] = useState([]);
  const [cittaData, setCittaData] = useState([]);
  const [material, setMaterial] = useState([]);
  const [udm, setUdm] = useState([]);
  const [dropdownValue, setDropdownValue] = useState({
    quantita: "",
    classewaste: "",
    Ubicazione: "",
    idUnitaDiMisura: "",
    idMateriale: "",
    idLocalita: "",
  })

  const [isModalAddCitActive, setIsModalAddCitActive] = useState(false);

  function capitalizeText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  console.log(dropdownValue, "dropdownValue")
  const getCitta = async () => {
    const result = await axios.get("http://localhost:8080/api/localita");

    setCittaData(result?.data)
    // eslint-disable-next-line 
    const descrIdCittaFiltered = (result?.data).map((citta) => ({
      id: citta.id,
      value: citta.descrizione,
      label: capitalizeText(citta.descrizione) + "-" + citta.cap,

    }));

    setCitta(descrIdCittaFiltered);

  };
  const getMaterial = async () => {
    const result = await axios.get("http://localhost:8080/api/materiali");

    setMaterial(result?.data?.map((data) => ({
      id: data.id,
      label: data.descrizione,
      value: data.descrizione,
    })));
  };
  const getUdm = async () => {
    const result = await axios.get("http://localhost:8080/api/unita-di-misura");
    setUdm(result?.data?.map((data) => ({
      id: data.id,
      label: data.descrizione,
      value: data.descrizione,
    })));
  };
  const citDescr = cittaData?.map(cit => cit.descrizione)
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  useEffect(() => {
    getCitta();
    getMaterial();
    getUdm();
    // eslint-disable-next-line 
  }, [isModalAddCitActive]);
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          Questo campo è obbligatorio!
        </div>
      );
    }
  };

  const { addAnnuncio } = AnnuncioService();

  const handleAddAnnuncio = async (e) => {
    e.preventDefault();
    // setMessage("");
    // setLoading(true);
    // refForm.current.validateAll();

    if (formData.titolo && formData.descrizione && formData.quantita && selectedImage && date && dropdownValue.idLocalita && dropdownValue.idMateriale && dropdownValue.idUnitaDiMisura) {
      try {

        // (titolo, descrizione, quantita, file, dataDiScadenza, idLocalita, idMateriale, idUnitaDiMisura, currentUserId)
        await addAnnuncio(formData.titolo, formData.descrizione, formData.quantita, selectedImage, date, dropdownValue.idLocalita, dropdownValue.idMateriale, dropdownValue.idUnitaDiMisura, 1);
        props.router.navigate("/");
        // window.location.reload();
        // setFormData({
        //   titolo: "",
        //   descrizione: "",
        //   quantita: "",
        // });
        // console.log("set form data annunci --- dati salvati");
      } catch (error) {
        // const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        // setMessage(resMessage);
      }
    }
    else {
      alert("add all values")
    }
  };


  const handleAddLocModalOpen = () => {
    setIsModalAddCitActive(true)
    console.log("modalAddLoc open");
  };

  const handleAddCitModalClose = () => {
    setIsModalAddCitActive(false)
    console.log("modalAddLoc close");
  };



  return (
    <>
      <div className="pl-4" style={{ backgroundColor: "#f3f3f3", height: "100%", paddingTop: "40px", marginTop: "5rem" }}>


        <Form onSubmit={handleAddAnnuncio}>
          <div className="row mt-4">
            <div className="col-10 col-lg-11 ml-4">
              <div className="row">
                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-12 col-12">
                  <label htmlFor="titolo" className="word-label">
                    Titolo
                  </label>
                </div>
                <div className="col-xl-9   col-md-9 col-lg-9 col-sm-12 col-12">
                  <Input
                    id="titolo"
                    type="text"
                    className="mt-2 form-control form_middle_pagenuovo custom-container"
                    name="titolo"
                    autoFocus
                    value={formData.titolo}
                    onChange={onChange}
                    validations={[required]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-10  col-lg-11 ml-4">
              <div className="row">
                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-12 col-12">
                  <label htmlFor="descrizione" className="word-label">
                    Descrizione
                  </label>
                </div>
                <div className="col-xl-9 col-md-9 col-lg-9 col-sm-12 col-12">
                  {/* <Input
                    id="descrizione"
                    type="text"
                    className="mt-2 form-control form_middle_pagenuovo custom-container"
                    name="descrizione"
                    value={formData.descrizione}
                    onChange={onChange}
                    validations={[required]}
                  /> */}
                  <JoditEditor
                    value={formData.descrizione}
                    config={editorConfig}
                    onChange={(value) => setFormData((prev) => ({ ...formData, "descrizione": value }))}
                    onBlur={(value, event) => console.log(event)}
                  />

                </div>

              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-10  col-lg-11 ml-4">
              <div className="row">
                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-12 col-12">
                  <label htmlFor="quantita" className="word-label">
                    Quantità
                  </label>
                </div>
                {/* FORM' **********************************************************  */}
                <div className="col-xl-9 col-md-9 col-lg-9 col-sm-12 col-12  d-flex">
                  <div className="flex-grow-1">
                    <Input
                      id="quantita"
                      type="number"
                      className="mt-2 p-4 form-control"
                      name="quantita"
                      value={formData.quantita}
                      onChange={onChange}
                      validations={[required]}
                    />
                  </div>
                  <div style={{ width: "200px", marginTop: "6px", fontSize: "24px" }}>
                    <DropdownMenu propsData={udm} setPropValue={(e) => setDropdownValue((prev) => ({ ...prev, "quantita": e.value, "idUnitaDiMisura": e.id }))} propDropdownValue={dropdownValue?.quantita} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-10  col-lg-11 ml-4">
              <div className="row">
                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-12 col-12">
                  <label htmlFor="classewaste" className="word-label">
                    Classe waste
                  </label>
                </div>
                <div className="col-xl-9   col-md-9 col-lg-9 col-sm-12 col-12">
                  <div style={{ fontSize: "24px", marginTop: "9px" }} className="form_middle_pagenuovo ">
                    <DropdownMenu propsData={material} setPropValue={(e) => setDropdownValue((prev) => ({
                      ...prev,
                      // eslint-disable-next-line 
                      ["classewaste"]: e.value, "idMateriale": e.id
                    }))} propDropdownValue={dropdownValue?.classewaste} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-10  col-lg-11 ml-4">
              <div className="row">
                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-12 col-12">
                  <label htmlFor="foto" className="word-label" style={{ marginRight: "10px" }}>
                    Foto
                  </label>
                </div>
                <div className="col-xl-9   col-md-9 col-lg-9 col-sm-12 col-12">
                  <input type="file" style={{ fontSize: "16px", marginTop: "12px" }} onChange={handleImageChange} accept="image/*" className="scegli_menu" />
                  {selectedImage && (
                    <div>
                      {/* <p> </p>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" /> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-10  col-lg-11 ml-4">
              <div className="row">
                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-12 col-12 ">
                  <label htmlFor="ubicazione" className="word-label">
                    Ubicazione
                  </label>
                </div>
                <div className="col-xl-9   col-md-9 col-lg-9 col-sm-12 col-12 d-flex">
                  <div className="flex-grow-1">
                    <div style={{ fontSize: "24px", marginTop: "9px" }} className="form_middle_pagenuovo ">
                      <DropdownMenu propsData={citta} setPropValue={(e) => setDropdownValue((prev) => ({ ...prev, "Ubicazione": e.value, "idLocalita": e.id }))} propDropdownValue={dropdownValue?.Ubicazione} />
                    </div>
                  </div>

                  <div className="form-group ml-2 mt-2">
                    <button className="btn btn-primary" onClick={() => handleAddLocModalOpen()}>
                      {/* {loading && <span className="spinner-border spinner-border-sm"></span>} */}
                      <span><AddBoxIcon />Aggiungi citta'</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-10  col-lg-11 ml-4">
              <div className="row">
                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-12 col-12">
                  <label htmlFor="scadenza" className="word-label">
                    Scadenza
                  </label>
                </div>
                <div className="col-xl-9   col-md-9 col-lg-9 col-sm-12 col-12">
                  <input type="date" id="scadenza" style={{ height: "40px" }} onChange={(e) => setDate(e.target.value)} className="form-control form_middle_pagenuovo mt-2 " />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mx-auto mt-4">
            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}

            {/* <CheckButton style={{ display: "none" }} ref={refCheckBtn} /> */}
          </div>

          <div className="d-flex justify-content-center form_middle_page_btn" style={{ marginRight: "20%", marginTop: "80px", paddingBottom: "130px" }}>
            {/* <SaveButton isDisabled={loading} handleAdd={saveAnnuncio} /> */}
            <div className="form-group">
              <button className="btn btn-primary btn-block" disabled={loading} onClick={handleAddAnnuncio}>
                {loading && <span className="spinner-border spinner-border-sm"></span>}
                <span><SaveIcon />Salva</span>
              </button>
            </div>
            {/* <DeleteButton /> */}
          </div>

        </Form>

      </div>
      <div>{isModalAddCitActive && <AddCitModal propShow={isModalAddCitActive} propClose={handleAddCitModalClose} propListaCitDescrAdded={citDescr} />}</div>
    </>
  );
};

export default withRouter(NuovoAnnuncio);

// export default NuovoAnnuncio;
