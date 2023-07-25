import React, { useState } from "react";
/* CSS */
import "./aggSingAz.css";
/* COMPONENTS */
import SaveButton from "./Component/saveButton";
import DeleteButton from "./Component/deleteButton";
/* MUI MATERIAL ICONS */
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const AggSingAz = () => {
  // eslint-disable-next-line
  // const [selectedImageTwo, setSelectedImageTwo] = useState(null);

  // const handleImageChangeTwo = (event) => {
  //     const file = event.target.files[0];
  //     setSelectedImageTwo(file);
  // };
  const [isEyePswOpen, setIsEyePswOpen] = useState(false);
  const [isEyeConfPswOpen, setIsEyeConfPswOpen] = useState(false);

  return (
    <>
      <div className="container  custom-container mt-5" style={{ backgroundColor: "#f3f3f3" }}>
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
                <input type="text" id="email" className=" form-control form_middle_page custom-container mt-2" />
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
          {/* <div className="word-label">Dati Login</div>
            <div className="col-md-12 mt-4 d-flex  form form-main ">
              <label htmlFor="email" className="word-label">
                Email
              </label>

              <input type="text" id="email" className="form-control form_middle_page custom-container" />
            </div>
            <div className="col-md-12 mt-4 d-flex align-items-center form form-main">
              <label htmlFor="Ruoli" className="word-label">
                Ruoli
              </label>
              <input type="text" id="Ruoli" className="form-control form_middle_page custom-container" />
            </div>
            <form>
              <div className="col-md-12 mt-4 d-flex align-items-center form form-main">
                <label htmlFor="Password" className="word-label ">
                  Password
                </label>

                {isEyePswOpen ? (
                  <>
                    <input type="text" id="Password" className="form-control form_middle_page custom-container" />
                    <div className="items-icon" onClick={() => setIsEyePswOpen(!isEyePswOpen)}>
                      <VisibilityIcon fontSize="large" />
                    </div>
                  </>
                ) : (
                  <>
                    <input type="password" id="Password" className="form-control form_middle_page custom-container" />
                    <div className="items-icon" onClick={() => setIsEyePswOpen(!isEyePswOpen)}>
                      <VisibilityOffIcon fontSize="large" />
                    </div>
                  </>
                )}
              </div>
            </form>
            <form>
              <div className="col-md-12 mt-4 d-flex align-items-center  form form-main">
                <label htmlFor="ConfPassword" className="word-label">
                  Conferma Password
                </label>
                {isEyeConfPswOpen ? (
                  <>
                    <input type="text" id="ConfPassword" className="form-control form_middle_page custom-container" />
                    <div className="items-icon" onClick={() => setIsEyeConfPswOpen(!isEyeConfPswOpen)}>
                      <VisibilityIcon fontSize="large" />
                    </div>
                  </>
                ) : (
                  <>
                    <input type="password" id="ConfPassword" className="form-control form_middle_page custom-container" />
                    <div className="items-icon" onClick={() => setIsEyeConfPswOpen(!isEyeConfPswOpen)}>
                      <VisibilityOffIcon fontSize="large" />
                    </div>
                  </>
                )}
              </div>
            </form> */}
          {/* </div> */}
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
                <input type="text" id="RagioneSociale" className="form-control form_middle_page custom-container mt-2" />
              </div>
            </div>
            {/* <label htmlFor="RagioneSociale" className="word-label">
                Ragione Sociale
              </label>
              <input type="text" id="RagioneSociale" className="form-control form_middle_page custom-container" /> */}
            {/* </div> */}
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
            {/* <div className="col-md-12 mt-4 d-flex align-items-center  form form-main">
              <label htmlFor="RappresentanteLegale" className="word-label">
                Rappresentante Legale
              </label>
              <input type="text" id="RappresentanteLegale" className="form-control form_middle_page custom-form" />
            </div> */}
            <div className="row mt-4">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="Indirizzo" className="word-label">
                  Indirizzo
                </label>
              </div>
              <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <input type="text" id="Indirizzo" className="form-control form_middle_page custom-container mt-2" />
              </div>
            </div>
            {/* <div className="col-md-12 mt-4 d-flex align-items-center  form form-main">
              <label htmlFor="Indirizzo" className="word-label">
                Indirizzo
              </label>
              <input type="text" id="Indirizzo" className="form-control form_middle_page custom-form" />
            </div> */}
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
            {/* <div className="col-md-12 mt-4 d-flex align-items-center  form form-main">
              <label htmlFor="CodiceFiscale" className="word-label">
                Codice Fiscale
              </label>
              <input type="text" id="CodiceFiscale" className="form-control form_middle_page custom-container" />
            </div> */}
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
            {/* <div className="col-md-12 mt-4 d-flex align-items-center  form form-main">
              <label htmlFor="PartitaIva" className="word-label">
                Partita Iva
              </label>
              <input type="text" id="PartitaIva" className="form-control form_middle_page custom-container" />
            </div> */}
            <div className="row mt-4">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="Telefono1" className="word-label">
                  Telefono 1
                </label>
              </div>
              <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <input type="text" id="Telefono1" className="form-control form_middle_page custom-container mt-2" />
              </div>
            </div>
            {/* <div className="col-md-12 mt-4 d-flex align-items-center  form form-main">
              <label htmlFor="Telefono1" className="word-label">
                Telefono 1
              </label>
              <input type="text" id="Telefono1" className="form-control form_middle_page custom-container" />
            </div> */}
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
            {/* <div className="col-md-12 mt-4 d-flex align-items-center  form form-main">
              <label htmlFor="Telefono2" className="word-label">
                Telefono 2
              </label>
              <input type="text" id="Telefono2" className="form-control form_middle_page custom-container" />
            </div> */}
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
            {/* <div className="col-md-12 mt-4 d-flex align-items-center  form form-main">
              <label htmlFor="DescrizioneTelefoni" className="word-label">
                Descrizione Telefoni
              </label>
              <input type="text" id="DescrizioneTelefoni" className="form-control form_middle_page custom-container" />
            </div> */}
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
            {/* <div className="col-md-12 mt-4 d-flex align-items-center  form form-main">
              <label htmlFor="Fax" className="word-label">
                Fax
              </label>
              <input type="text" id="Fax" className="form-control form_middle_page custom-container" />
            </div> */}
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
            {/* <div className="col-md-12 mt-4 d-flex align-items-center  form form-main">
              <label htmlFor="Pec" className="word-label">
                Pec
              </label>
              <input type="text" id="Pec" className="form-control form_middle_page custom-container" />
            </div> */}
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
            {/* <div className="col-md-12 mt-4 d-flex align-items-center  form form-main">
              <label htmlFor="FormaGiuridica" className="word-label">
                Forma Giuridica
              </label>
              <input type="text" id="FormaGiuridica" className="form-control form_middle_page custom-container" />
            </div> */}
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
            {/* <div className="col-md-12 mt-4 d-flex align-items-center  form form-main">
              <label htmlFor="Associazione" className="word-label">
                Associazione
              </label>
              <input type="text" id="Associazione" className="form-control form_middle_page custom-container" />
            </div> */}
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
            {/* <div className="col-md-12 mt-4 d-flex align-items-center  form form-main">
              <label htmlFor="Localita" className="word-label">
                Localita'
              </label>
              <input type="text" id="Localita" className="form-control form_middle_page custom-container" />
            </div> */}
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
            {/* <div className="col-md-12 mt-4 d-flex align-items-center  form form-main">
              <label htmlFor="Categoria" className="word-label">
                Categoria
              </label>
              <input type="text" id="Categoria" className="form-control form_middle_page custom-container" />
            </div> */}
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
            {/* <div className="col-md-12 mt-4 d-flex align-items-center  form form-main">
              <label htmlFor="AttivitaPrincipale" className="word-label">
                Attivita' Principale
              </label>
              <input type="text" id="AttivitaPrincipale" className="form-control form_middle_page custom-container" />
            </div> */}
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
            {/* <div className="col-md-12 mt-4 d-flex align-items-center  form form-main">
              <label htmlFor="AttivitaSecondaria" className="word-label">
                Attivita' Secondaria
              </label>
              <input type="text" id="AttivitaSecondaria" className="form-control form_middle_page custom-container" />
            </div> */}
          </div>
          <div className="d-flex justify-content-center form_middle_page_btn" style={{ marginRight: "20%", marginTop: "15px", marginBottom: "105px" }}>
            <SaveButton />
            <DeleteButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default AggSingAz;
