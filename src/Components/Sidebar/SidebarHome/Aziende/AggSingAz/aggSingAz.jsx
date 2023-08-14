import React, { useState, useRef } from "react";
/* CSS */
import "./aggSingAz.css";

/*REACT VALIDATION*/
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";

// /* COMPONENTS */
// import DropdownMenu from "./Component/DropdownMenu/dropdownMenu";
// import SaveButton from "./Component/saveButton";
// import DeleteButton from "./Component/deleteButton";
import AziendaService from "../../../../../DataAPI/services/azienda.service";


/* MUI MATERIAL ICONS */
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";





const AggSingAz = () => {
  const refForm = useRef(null);
  const refCheckBtn = useRef(null);
  // const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line 
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    indirizzo: "",
    ragioneSociale: "",
    telefono1: ""
  });


  const [isEyePswOpen, setIsEyePswOpen] = useState(false);
  const [isEyeConfPswOpen, setIsEyeConfPswOpen] = useState(false);


  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
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




  const { addAzienda } = AziendaService();




  const handleAddAzienda = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    refForm.current.validateAll();

    if (refCheckBtn.current.context._errors.length === 0) {
      try {
        await addAzienda(formData.titolo, formData.descrizione, formData.quantita);
        // props.router.navigate("/");
        // window.location.reload();
        setFormData({
          email: "",
          indirizzo: "",
          ragioneSociale: "",
          telefono1: ""
        })
        console.log("set form data annunci --- dati salvati")

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








  return (
    <>
      <div className="container  custom-container mt-5" style={{ backgroundColor: "#f3f3f3" }}>

        <Form onSubmit={handleAddAzienda} ref={refForm}></Form>
        <div className="row mt-5">
          <div className="word-label ml-2  mb-4" style={{ color: "black", fontSize: "16px" }}>
            Dati Login
          </div>
          <div className="col-9 ml-2">
            <div className="row mt-2">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="email" className="word-label">
                  Email
                </label>
              </div>

              <div className="col-xl-9  col-md-9 col-lg-9 col-sm-8 col-8">
                <Input
                  id="email"
                  type="email"
                  className="mt-2 form-control form_middle_pagenuovo custom-container"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  validations={[required]}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="Ruoli" className="word-label">
                  Ruoli
                </label>
              </div>
              <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <input type="text" id="Ruoli" className="mt-2 form-control form_middle_page custom-container" />
              </div>
            </div>
            <form>
              <div className="row mt-4">
                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                  <label htmlFor="Password" className="word-label ">
                    Password
                  </label>
                </div>
                <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                  {isEyePswOpen ? (
                    <>
                      <input type="text" id="Password" className="form-control form_middle_page custom-container mt-2" />
                      <div className="items-icon items-container" onClick={() => setIsEyePswOpen(!isEyePswOpen)}>
                        <VisibilityIcon fontSize="large" />
                      </div>
                    </>
                  ) : (
                    <>
                      <input type="password" id="Password" className="form-control form_middle_page custom-container mt-2" />
                      <div className="items-icon items-container" onClick={() => setIsEyePswOpen(!isEyePswOpen)}>
                        <VisibilityOffIcon fontSize="large" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </form>
            <form>
              <div className="row mt-3">
                <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                  <label htmlFor="ConfPassword" className="word-label ">
                    Conferma Password
                  </label>
                </div>
                <div className="col-xl-9   col-md-9 col-lg-9 col-sm-8 col-8">
                  {isEyeConfPswOpen ? (
                    <>
                      <input type="text" id="ConfPassword" className="form-control form_middle_page custom-container mt-1" />
                      <div className="items-icon items-container" style={{ bottom: "15px" }} onClick={() => setIsEyeConfPswOpen(!isEyeConfPswOpen)}>
                        <VisibilityIcon fontSize="large" />
                      </div>
                    </>
                  ) : (
                    <>
                      <input type="password" id="ConfPassword" className="form-control form_middle_page custom-container mt-1" />
                      <div className="items-icon items-container" style={{ bottom: "15px" }} onClick={() => setIsEyeConfPswOpen(!isEyeConfPswOpen)}>
                        <VisibilityOffIcon fontSize="large" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </form>
          </div>

          <div className="word-label ml-2 mt-4" style={{ color: "black", fontSize: "16px" }}>
            Dati Azienda
          </div>
          <div className="col-9 ml-2 mt-3">
            <div className="row mt-3">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="RagioneSociale" className="word-label">
                  Ragione Sociale
                </label>
              </div>
              <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <Input
                  id="ragioneSociale"
                  type="text"
                  className="mt-2 form-control form_middle_pagenuovo custom-container"
                  name="ragioneSociale"
                  value={formData.ragioneSociale}
                  onChange={onChange}
                  validations={[required]}
                />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="RappresentanteLegale" className="word-label">
                  Rappresentante Legale
                </label>
              </div>
              <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <input type="text" id="RappresentanteLegale" className="form-control form_middle_page custom-container  mt-2" />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="Indirizzo" className="word-label">
                  Indirizzo
                </label>
              </div>
              <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <Input
                  id="indirizzo"
                  type="text"
                  className="mt-2 form-control form_middle_pagenuovo custom-container"
                  name="indirizzo"
                  value={formData.indirizzo}
                  onChange={onChange}
                  validations={[required]}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="CodiceFiscale" className="word-label">
                  Codice Fiscale
                </label>
              </div>
              <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <input type="text" id="CodiceFiscale" className="form-control form_middle_page custom-container mt-3" />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="PartitaIva" className="word-label">
                  Partita Iva
                </label>
              </div>
              <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <input type="text" id="PartitaIva" className="form-control form_middle_page custom-container mt-2" />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="Telefono1" className="word-label">
                  Telefono 1
                </label>
              </div>
              <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <Input
                  id="telefono1"
                  type="number"
                  className="mt-2 form-control form_middle_pagenuovo custom-container"
                  name="telefono1"
                  value={formData.telefono1}
                  onChange={onChange}
                  validations={[required]}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="Telefono2" className="word-label">
                  Telefono 2
                </label>
              </div>
              <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <input type="text" id="Telefono2" className="form-control form_middle_page custom-container mt-3" />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="DescrizioneTelefoni" className="word-label">
                  Descrizione Telefoni
                </label>
              </div>
              <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <input type="text" id="DescrizioneTelefoni" className="form-control form_middle_page custom-container mt-1" />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="Fax" className="word-label">
                  Fax
                </label>
              </div>
              <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <input type="text" id="Fax" className="form-control form_middle_page custom-container mt-3" />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="Pec" className="word-label">
                  Pec
                </label>
              </div>
              <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <input type="text" id="Pec" className="form-control form_middle_page custom-container mt-3" />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="FormaGiuridica" className="word-label">
                  Forma Giuridica
                </label>
              </div>
              <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <input type="text" id="FormaGiuridica" className="form-control form_middle_page custom-container mt-2" />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="Associazione" className="word-label">
                  Associazione
                </label>
              </div>
              <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <input type="text" id="Associazione" className="form-control form_middle_page custom-container mt-2" />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="Localita" className="word-label">
                  Localita
                </label>
              </div>
              <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <input type="text" id="Localita" className="form-control form_middle_page custom-container mt-3" />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="Categoria" className="word-label">
                  Categoria
                </label>
              </div>
              <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <input type="text" id="Categoria" className="form-control form_middle_page custom-container mt-3" />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="AttivitaPrincipale" className="word-label">
                  Attivita' Principale
                </label>
              </div>
              <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <input type="text" id="AttivitaPrincipale" className="form-control form_middle_page custom-container mt-2" />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="AttivitaSecondaria" className="word-label">
                  Attivita' Secondaria
                </label>
              </div>
              <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <input type="text" id="AttivitaSecondaria" className="form-control form_middle_page custom-container mt-2" />
              </div>
            </div>

          </div>
          <div className="d-flex justify-content-center form_middle_page_btn" style={{ marginRight: "20%", marginTop: "80px", paddingBottom: "130px" }}>
            {/* <SaveButton isDisabled={loading} handleAdd={saveAnnuncio} /> */}
            <div className="form-group">
              <button className="btn btn-primary btn-block" disabled={loading}>
                {loading && <span className="spinner-border spinner-border-sm"></span>}
                <span>Aggiungi</span>
              </button>
            </div>
            {/* <DeleteButton /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AggSingAz;
