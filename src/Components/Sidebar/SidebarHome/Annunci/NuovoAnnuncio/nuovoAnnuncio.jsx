import React, { useState, useRef } from "react";

//*CSS
// import "./nuovoAnnuncio.css";

//*REACT VALIDATION
// import CheckButton from "react-validation/build/button";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import withRouter from "../../../../../DataAPI/common/with-router";
import AnnuncioService from "../../../../../DataAPI/services/annuncio.service";

//*COMPONENTS
// import SaveButton from "./Component/SaveButton/saveButton";
// import DeleteButton from "./Component/DeleteButton/deleteButton";
import DropdownMenu from "./Component/DropdownMenu/dropdownMenu";
import AddCitModal from "./Component/AddCitModal/addCitModal";

//* MUI MATERIAL ICONS
import AddBoxIcon from '@mui/icons-material/AddBox'
import { useEffect } from "react";
import axios from "axios";





const NuovoAnnuncio = (props) => {
  const refForm = useRef(null);
  const refCheckBtn = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    titolo: "",
    descrizione: "",
    quantita: "",
  });
  const [citta, setCitta] = useState([]);

  const [isModalAddCitActive, setIsModalAddCitActive] = useState(false);

  function capitalizeText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  const getCitta = async () => {
    const result = await axios.get("http://localhost:8080/api/localita");
    console.log(result)
    setCitta(result?.data);

    // eslint-disable-next-line 
    const descrIdCittaFiltered = (result?.data).map((citta) => ({
      id: citta.id,
      descrizione: capitalizeText(citta.descrizione),
    }));


    // console.log("descrIdCittaFiltered: ", descrIdCittaFiltered);
  };


  useEffect(() => {
    getCitta();
    // eslint-disable-next-line 
  }, [isModalAddCitActive]);





  const citDescr = citta.map(cit => cit.descrizione)
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

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
    setMessage("");
    setLoading(true);
    refForm.current.validateAll();

    if (refCheckBtn.current && refCheckBtn.current.context._errors.length === 0) {
      try {
        await addAnnuncio(formData.titolo, formData.descrizione, formData.quantita);
        // props.router.navigate("/");
        // window.location.reload();
        setFormData({
          titolo: "",
          descrizione: "",
          quantita: "",
        });
        console.log("set form data annunci --- dati salvati");
      } catch (error) {
        const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        setMessage(resMessage);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
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
        <Form onSubmit={handleAddAnnuncio} ref={refForm}>
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
                  <Input
                    id="descrizione"
                    type="text"
                    className="mt-2 form-control form_middle_pagenuovo custom-container"
                    name="descrizione"
                    value={formData.descrizione}
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
                  <label htmlFor="quantita" className="word-label">
                    Quantità
                  </label>
                </div>
                {/* FORM' **********************************************************  */}
                <div className="col-xl-9 col-md-9 col-lg-9 col-sm-12 col-12  d-flex">
                  <div className="flex-grow-1">
                    <Input
                      id="quantita"
                      type="text"
                      className="mt-2 form-control"
                      name="quantita"
                      value={formData.quantita}
                      onChange={onChange}
                      validations={[required]}
                    />
                  </div>
                  <div style={{ width: "200px", marginTop: "6px", fontSize: "24px" }}>
                    <DropdownMenu />
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
                    <DropdownMenu />
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
                  <div style={{ fontSize: "24px", marginTop: "9px" }} className="form_middle_pagenuovo ">
                    <DropdownMenu />
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
                  <input type="date" id="scadenza" style={{ height: "40px" }} className="form-control form_middle_pagenuovo mt-2 " />
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
              <button className="btn btn-primary btn-block" disabled={loading}>
                {loading && <span className="spinner-border spinner-border-sm"></span>}
                <span><AddBoxIcon />Aggiungi</span>
              </button>
            </div>
            {/* <DeleteButton /> */}
          </div>
          {/* <div className="row col-12">
          <div className="col-md-8 mt-4 d-flex align-items-start form form-main">
            <label htmlFor="Titolo" className="word-label">
              Titolo
            </label>
            <input type="text" id="Titolo" className="form-control form_middle_page" />
          </div>
          <div className="col-md-8 mt-4 d-flex align-items-start position-relative">
            <label htmlFor="Descrizione" className="word-label">
              Descrizione
            </label>
            <input type="text" id="Descrizione" className="form-control form_middle_page" />
          </div>
        </div> */}
          {/* <div className="row">
          <div className="col-md-10 mt-4 d-flex align-items-start position-relative">
            <label htmlFor="input3">Quantità</label>
            <input type="number" id="input3" className="form-control quantity_menu" />
            <div className="dropdown_menu_2">
              <DropdownMenu />
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-start position-relative">
            <label htmlFor="input4">Classe waste</label>
            <DropdownMenu />
          </div>
        </div> */}
          {/* <div className="col-md-12 mt-4 d-flex align-items-start position-relative ml-4">
            <label htmlFor="Foto" className="word-label" style={{ marginRight: "10px" }}>
              Foto
            </label>
            <input type="file" style={{ fontSize: "16px", marginTop: "12px" }} onChange={handleImageChange} accept="image/*" className="scegli_menu" />
            {selectedImage && (
              <div>
                <p> </p>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
              </div>
            )}
          </div> */}

          {/* <div className="col-md-12 mt-4 d-flex align-items-start position-relative">
            <label htmlFor="Scadenza">Scadenza</label>
            <input type="date" id="Scadenza" className="form-control form_middle_page" />
          </div> */}
        </Form>
      </div>
      <div>{isModalAddCitActive && <AddCitModal show={isModalAddCitActive} close={handleAddCitModalClose} listaCitDescrAdded={citDescr} />}</div>
    </>
  );
};

export default withRouter(NuovoAnnuncio);

// export default NuovoAnnuncio;
