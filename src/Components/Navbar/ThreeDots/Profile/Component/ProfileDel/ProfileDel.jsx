import React, { useState } from "react";
/* CSS */
import "./aggSingAz.css";
import { Button } from "react-bootstrap";
/* COMPONENTS */
// import ModificationButton from "./Component/saveButton";
// import ModificationButton from "./Component/modification";
// import DeleteButton from "./Component/deleteButton";
// /* MUI MATERIAL ICONS */
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import UpdateModal from "./Component/Profileupdatemodal";




const ProfileDel = () => {
  // eslint-disable-next-line
  // const [selectedImageTwo, setSelectedImageTwo] = useState(null);

  // const handleImageChangeTwo = (event) => {
  //     const file = event.target.files[0];
  //     setSelectedImageTwo(file);
  // };
  // const [isEyePswOpen, setIsEyePswOpen] = useState(false);
  // const [isEyeConfPswOpen, setIsEyeConfPswOpen] = useState(false);
  const [isModalAddActive, setIsModalAddActive] = useState(false);
  const handleClickAddOpen = () => {
    setIsModalAddActive(true);
    console.log("modalAdd open");
  };
  const handleClickAddClose = () => {
    setIsModalAddActive(false);
    console.log("modalAdd close");
  };


  // const handleSave = () => {
  //   // Logic to handle saving data goes here
  //   console.log("Save button clicked!");

  // };

  return (
    <>
      <div className="container  custom-container mt-5" style={{ backgroundColor: "#f3f3f3" }}>
        <div className="row mt-5">
          <div className="word-label ml-3  mb-4" style={{ color: "black", fontSize: "16px" }}>
            Profilo dell'azienda:<span style={{ color: "rgb(70, 74, 183)" }}> OAG SRL</span>
          </div>

          {/* <div className="row mt-3">
              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor="Ruoli" className="word-label">
                  Ruoli
                </label>
              </div>
              <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <input type="text" id="Ruoli" className="mt-2 form-control form_middle_page custom-container" />
              </div>
            </div> */}
          {/* <form>
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
                      <div className="items-icon" onClick={() => setIsEyePswOpen(!isEyePswOpen)}>
                        <VisibilityIcon fontSize="large" />
                      </div>
                    </>
                  ) : (
                    <>
                      <input type="password" id="Password" className="form-control form_middle_page custom-container mt-2" />
                      <div className="items-icon" onClick={() => setIsEyePswOpen(!isEyePswOpen)}>
                        <VisibilityOffIcon fontSize="large" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </form> */}
          {/* <form>
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
                      <div className="items-icon" style={{ bottom: "15px" }} onClick={() => setIsEyeConfPswOpen(!isEyeConfPswOpen)}>
                        <VisibilityIcon fontSize="large" />
                      </div>
                    </>
                  ) : (
                    <>
                      <input type="password" id="ConfPassword" className="form-control form_middle_page custom-container mt-1" />
                      <div className="items-icon" style={{ bottom: "15px" }} onClick={() => setIsEyeConfPswOpen(!isEyeConfPswOpen)}>
                        <VisibilityOffIcon fontSize="large" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </form> */}
        </div>

        <div className="col-9 mt-3">
          <div className="row mt-3">
            <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
              <label htmlFor="RagioneSociale" className="word-label">
                Ragione Sociale:
              </label>
            </div>
            <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
              <input type="text" id="RagioneSociale" disabled placeholder="OAG SRL" className="form-control form_middle_page custom-container inputProfileDell mt-2" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
              <label htmlFor="RappresentanteLegale" className="word-label">
                Rappresentante Legale:
              </label>
            </div>
            <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
              <input type="text" id="RappresentanteLegale" disabled placeholder="Poalo Giannini" className="form-control form_middle_page custom-container inputProfileDell  mt-2" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
              <label htmlFor="Indirizzo" className="word-label">
                Indirizzo:
              </label>
            </div>
            <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
              <input type="text" id="Indirizzo" disabled placeholder="Via Pillea 13" className="form-control form_middle_page custom-container inputProfileDell mt-2" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
              <label htmlFor="CodiceFiscale" className="word-label">
                Codice Fiscale:
              </label>
            </div>
            <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
              <input type="text" id="CodiceFiscale" disabled placeholder="sadas" className="form-control form_middle_page custom-container inputProfileDell mt-3" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
              <label htmlFor="PartitaIva" className="word-label">
                Partita IVA:
              </label>
            </div>
            <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
              <input type="text" id="PartitaIva" disabled placeholder="343453545" className="form-control form_middle_page custom-container inputProfileDell mt-2" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
              <label htmlFor="Telefono1" className="word-label">
                Telefono 1:
              </label>
            </div>
            <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
              <input type="text" id="Telefono1" disabled placeholder="343343434" className="form-control form_middle_page custom-container inputProfileDell mt-2" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
              <label htmlFor="Telefono2" className="word-label">
                Telefono 2:
              </label>
            </div>
            <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
              <input type="text" id="Telefono2" disabled placeholder="" className="form-control form_middle_page custom-container inputProfileDell mt-3" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
              <label htmlFor="DescrizioneTelefoni" className="word-label">
                Descrizione Telefoni:
              </label>
            </div>
            <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
              <input type="text" id="DescrizioneTelefoni" disabled placeholder="3223232323" className="form-control form_middle_page custom-container inputProfileDell mt-1" />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
              <label htmlFor="Fax" className="word-label">
                Fax:
              </label>
            </div>
            <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
              <input type="text" id="Fax" disabled placeholder="23232323" className="form-control form_middle_page custom-container inputProfileDell mt-3" />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
              <label htmlFor="Fax" className="word-label">
                Email:
              </label>
            </div>
            <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
              <input type="text" id="Fax" disabled placeholder="Info@gmail.com" className="form-control form_middle_page custom-container inputProfileDell mt-3" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
              <label htmlFor="Pec" className="word-label">
                PEC:
              </label>
            </div>
            <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
              <input type="text" id="Pec" disabled placeholder="Info@pec.it" className="form-control form_middle_page custom-container inputProfileDell mt-3" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
              <label htmlFor="FormaGiuridica" className="word-label">
                Forma Giuridica:
              </label>
            </div>
            <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
              <input type="text" id="FormaGiuridica" disabled placeholder="SRL" className="form-control form_middle_page custom-container inputProfileDell mt-2" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
              <label htmlFor="Associazione" className="word-label">
                Associazione:
              </label>
            </div>
            <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
              <input type="text" id="Associazione" disabled placeholder="Associazione.Descrizione" className="form-control form_middle_page custom-container inputProfileDell mt-2" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
              <label htmlFor="Localita" className="word-label">
                Localita:
              </label>
            </div>
            <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
              <input type="text" id="Localita" disabled placeholder="Genova" className="form-control form_middle_page custom-container inputProfileDell mt-3" />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
              <label htmlFor="Categoria" className="word-label">
                Categoria:
              </label>
            </div>
            <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
              <input type="text" id="Categoria" disabled placeholder="A" className="form-control form_middle_page custom-container inputProfileDell mt-3" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
              <label htmlFor="AttivitaPrincipale" className="word-label">
                Attivita' Principale:
              </label>
            </div>
            <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
              <input type="text" id="AttivitaPrincipale" disabled placeholder="A" className="form-control form_middle_page custom-container inputProfileDell mt-2" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
              <label htmlFor="AttivitaSecondaria" className="word-label">
                Attivita' Secondaria:
              </label>
            </div>
            <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
              <input type="text" id="AttivitaSecondaria" disabled placeholder="" className="form-control form_middle_page custom-container inputProfileDell mt-2" />
            </div>
          </div>
        </div>
        <div
          className="d-flex justify-content-center form_middle_page_btn"
          style={{ marginRight: "20%", marginTop: "50px", marginBottom: "105px" }}
        >
          <div className="mr-4">
            <Button style={{ fontSize: "14px", background: "#3934d2", borderRadius: "5px" }} onClick={handleClickAddOpen}>
              Modifica i dati
            </Button>
          </div>
        </div>
        <div>{isModalAddActive && <UpdateModal show={isModalAddActive} close={handleClickAddClose} />}</div>
      </div>
    </>
  );
};

export default ProfileDel;
