import React, { useState } from "react";
/* CSS */
// import "./nuovoAnnuncio.css";
// /* COMPONENTS */
import DropdownMenu from "./Component/DropdownMenu/dropdownMenu";
import SaveButton from "./Component/SaveButton/saveButton";
import DeleteButton from "./Component/DeleteButton/deleteButton";
/* MUI MATERIAL ICONS */

const NuovoAnnuncio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  return (
    <div>
      <div className="pl-4" style={{ backgroundColor: "#f3f3f3", height: "100%", paddingTop: "40px", marginTop: "5rem" }}>
        <div className="row mt-4">
          <div className="col-10  col-lg-11 ml-4">
            <div className="row">

              <div className="col-xl-3 col-md-3 col-lg-3 col-sm-12 col-12">
                <label htmlFor="titolo" className="word-label">
                  Titolo
                </label>
              </div>
              <div className="col-xl-9   col-md-9 col-lg-9 col-sm-12 col-12">
                <div className="form_middle_pagenuovo  d-flex">
                  <input type="text" id="titolo" className="mt-2 form-control form_middle_pagenuovo custom-container"
                  />
                </div>
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
                <div className="form_middle_pagenuovo  d-flex">
                  <input type="text" id="descrizione" className="mt-2 form-control form_middle_pagenuovo  custom-container" />
                </div>
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
              <div className="col-xl-9   col-md-9 col-lg-9 col-sm-12 col-12">
                <div className="form_middle_pagenuovo  d-flex">
                  <input type="text" id="quantita" className="mt-2 form-control  custom-container" />
                  <div style={{ width: "180px", marginTop: "6px", fontSize: "24px" }}>
                    <DropdownMenu />
                  </div>
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
        <div className="d-flex justify-content-center form_middle_page_btn" style={{ marginRight: "20%", marginTop: "80px", paddingBottom: "130px" }}>
          <SaveButton />
          <DeleteButton />
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
      </div>
    </div>
  );
};

export default NuovoAnnuncio;
