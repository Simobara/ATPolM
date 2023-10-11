import React, { useState, useEffect, useRef } from "react";

//* CSS */
import "./navProfileModify.css";
import { Button } from "react-bootstrap";

//* COMPONENTS */
// import ModificationButton from "./Component/saveButton";
// import ModificationButton from "./Component/modification";
// import DeleteButton from "./Component/deleteButton";

//* MUI MATERIAL ICONS */
// import UpdateModal from "./Component/Profileupdatemodal";
import EtichettaInput from "./Component/EtichettaInput/etichettaInput"





const NavProfileModify = () => {
  // const [isModalAddActive, setIsModalAddActive] = useState(false);
  const [isDisable, setIsDisable] = useState(true);

  const inputRef = useRef(null);

  const inputFocus = () => { inputRef.current.focus() }


  useEffect(() => {
    if (!isDisable && inputRef.current) {
      inputFocus();
    }
  }, [isDisable]);


  const handleModDati = () => {
    // setIsModalAddActive(true);
    setIsDisable(false)
    inputFocus()
    console.log("modalAdd open");
  };
  const handleSalvaDati = () => {
    // setIsModalAddActive(false);
    setIsDisable(true)
    console.log("modalAdd close");
  };


  return (
    <>
      <div style={{ fontSize: '20px', marginBottom: '10px', marginTop: '5rem' }}>
        <div
          style={{
            height: '70px',
            backgroundColor: '#030947',
            width: '100%',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold'
          }}
          className="bold-columns text-center text-white"
        >
          MENU IMPOSTAZIONI - MODIFICA PROFILO
        </div>


        <div className="container custom-container" style={{ backgroundColor: "#f3f3f3" }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: "100%" }}>
            <div className="word-label ml-3 mb-2" style={{ color: "black", fontSize: "16px" }}>
              Profilo dell'azienda:<span style={{ color: "#1926b6" }}> OAG SRL</span>
            </div>

            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {/* Questo contenitore manterrà i due pulsanti al centro */}
              <Button
                style={{ fontSize: "14px", background: "#3934d2", borderRadius: "5px", marginRight: "5px" }}
                onClick={handleModDati}>
                Modifica i dati
              </Button>

              <Button
                style={{ fontSize: "14px", background: "#3934d2", borderRadius: "5px" }}
                onClick={handleSalvaDati}>
                Salva
              </Button>
            </div>
          </div>




          <div className="col-9 mt-3">
            <EtichettaInput label="Ragione Sociale:" id="RagioneSociale" value="OAG SRL" propDisable={isDisable} ref={inputRef} />
            <EtichettaInput label="Rappresentante Legale:" id="RappresentanteLegale" value="Poalo Giannini" propDisable={isDisable} />
            <EtichettaInput label="Indirizzo:" id="Indirizzo" value="Via Pillea 13" propDisable={isDisable} />
            <EtichettaInput label="Codice Fiscale:" id="CodiceFiscale" value="sadas" propDisable={isDisable} />
            <EtichettaInput label="Partita IVA:" id="PartitaIva" value="343453545" propDisable={isDisable} />
            <EtichettaInput label="Telefono 1:" id="Telefono1" value="343343434" propDisable={isDisable} />
            <EtichettaInput label="Telefono 2:" id="Telefono2" value="3223232323" propDisable={isDisable} />
            <EtichettaInput label="Descrizione Telefoni:" id="DescrizioneTelefoni" value="" propDisable={isDisable} />
            <EtichettaInput label="Fax:" id="Fax" value="23232323" propDisable={isDisable} />
            <EtichettaInput label="Email:" id="Email" value="Info@gmail.com" propDisable={isDisable} />
            <EtichettaInput label="PEC:" id="Pec" value="Info@pec.it" propDisable={isDisable} />
            <EtichettaInput label="Forma Giuridica:" id="FormaGiuridica" value="SRL" propDisable={isDisable} />
            <EtichettaInput label="Associazione:" id="Associazione" value="Associazione.Descrizione" propDisable={isDisable} />
            <EtichettaInput label="Localita:" id="Localita" value="Genova" propDisable={isDisable} />
            <EtichettaInput label="Categoria:" id="Categoria" value="A" propDisable={isDisable} />
            <EtichettaInput label="Attivita' Principale:" id="AttivitaPrincipale" value="A" propDisable={isDisable} />
            <EtichettaInput label="Attivita' Secondaria:" id="AttivitaSecondaria" value="" propDisable={isDisable} />
          </div>
        </div>
        <div
          className="d-flex justify-content-center form_middle_page_btn"
          style={{ marginRight: "20%", marginTop: "50px", marginBottom: "105px" }}
        >

        </div>

        {/* <div>{isModalAddActive && <UpdateModal show={isModalAddActive} close={handleClickAddClose} />}</div> */}
      </div >
    </>
  );
};

export default NavProfileModify;