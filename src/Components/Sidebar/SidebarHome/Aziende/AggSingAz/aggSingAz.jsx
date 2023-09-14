import React, { useState, useRef } from "react";

//* VALIDATIONS
import AziendaService from "../../../../../DataAPI/services/azienda.service";
import CheckButton from "react-validation/build/button";

//* COMPONENTS
import Form from "react-validation/build/form";
import FormInput from "./Component/FormInput/formInput";

//* CSS
import "./aggSingAz.css";

//* MUI MATERIAL ICONS
import SaveIcon from '@mui/icons-material/Save';




const AggSingAz = () => {
  const refForm = useRef(null);
  const refCheckBtn = useRef(null);
  // eslint-disable-next-line
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    Email: "",
    Ruoli: "",
    Password: "",
    ConfermaPassword: "",
    RagioneSociale: "",
    RappresentanteLegale: "",
    Indirizzo: "",
    CodiceFiscale: "",
    PartitaIva: "",
    Telefono1: "",
    Telefono2: "",
    DescrizioneTelefoni: "",
    Fax: "",
    Pec: "",
    FormaGiuridica: "",
    Associazione: "",
    Localita: "",
    Categoria: "",
    "Attivita'Principale": "",
    "Attivita'Secondaria": ""
  });



  // OPTIONS
  const ruoliOptions = ["Ruolo1", "Ruolo2"];
  const formaGiuridicaOptions = ["Forma Giuridica 1", "Forma Giuridica 2"];
  const associazioneOptions = ["Associazione 1", "Associazione 2"];
  const localitaOptions = ["Località 1", "Località 2"];
  const categoriaOptions = ["Categoria 1", "Categoria 2"];
  const attivitaPrincipaleOptions = ["Attività Principale 1", "Attività Principale 2"];
  const attivitaSecondariaOptions = ["Attività Secondaria 1", "Attività Secondaria 2"];


  const formDatiLogin = [
    { id: 'Email', label: 'Email', type: 'email' },
    { id: 'Ruoli', label: 'Ruoli', type: 'select', options: ruoliOptions },
    { id: 'Password', label: 'Password', type: 'password' },
    { id: 'ConfermaPassword', label: 'Conferma Password', type: 'password' },
  ]

  const formDatiAzienda = [
    { id: 'RagioneSociale', label: 'Ragione Sociale', type: 'text' },
    { id: 'RappresentanteLegale', label: 'Rappresentante Legale', type: 'text' },
    { id: 'Indirizzo', label: 'Indirizzo', type: 'text' },
    { id: 'CodiceFiscale', label: 'Codice Fiscale', type: 'text' },
    { id: 'PartitaIva', label: 'Partita Iva', type: 'text' },
    { id: 'Telefono1', label: 'Telefono1', type: 'number' },
    { id: 'Telefono2', label: 'Telefono2', type: 'number' },
    { id: 'DescrizioneTelefoni', label: 'Descrizione Telefoni', type: 'text' },
    { id: 'Fax', label: 'Fax', type: 'number' },
    { id: 'Pec', label: 'Pec', type: 'email' },
    { id: 'FormaGiuridica', label: 'Forma Giuridica', type: 'select', options: formaGiuridicaOptions },
    { id: 'Associazione', label: 'Associazione', type: 'select', options: associazioneOptions },
    { id: 'Localita', label: 'Localita', type: 'select', options: localitaOptions },
    { id: 'Categoria', label: 'Categoria', type: 'select', options: categoriaOptions },
    { id: 'Attivita\'Principale', label: 'Attivita\' Principale', type: 'select', options: attivitaPrincipaleOptions },
    { id: 'Attivita\'Secondaria', label: 'Attivita\' Secondaria', type: 'select', options: attivitaSecondariaOptions },
  ];





  const { addAzienda } = AziendaService();

  const handleSection = (sectionTitle, sectionData) => (
    <>
      <div className="word-label ml-2 mb-4 titolo-sezione titolo-blu">{sectionTitle}</div>
      <div className="col-9 ml-2">
        {sectionData.map(inputData => ( //SECTION DATA ==> {FORM DATI LOGIN}, {FORM DATA AZIENDE}
          <FormInput
            key={inputData.id}
            {...inputData}
            propOnChange={handleChange}
            propValue={formData[inputData.id]}
          />
        ))}
      </div>
    </>
  );

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({ ...prevState, [id]: value }));
  };

  const handleAddAzienda = async (e) => {
    e.preventDefault();
    setMessage("");
    refForm.current.validateAll();

    if (refCheckBtn.current.context._errors.length === 0) {
      try {
        // Aggiorna questa chiamata con i parametri corretti
        await addAzienda(formData);
        setFormData({
          Email: "",
          Ruoli: "",
          Password: "",
          ConfermaPassword: "",
          RagioneSociale: "",
          RappresentanteLegale: "",
          Indirizzo: "",
          CodiceFiscale: "",
          PartitaIva: "",
          Telefono1: "",
          Telefono2: "",
          DescrizioneTelefoni: "",
          Fax: "",
          Pec: "",
          FormaGiuridica: "",
          Associazione: "",
          Localita: "",
          Categoria: "",
          "Attivita'Principale": "",
          "Attivita'Secondaria": ""
        });
        console.log("set form data annunci --- dati salvati");
      } catch (error) {
        const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        setMessage(resMessage);
      }
    }
  };







  return (
    <>
      <div className="container custom-container mt-5" style={{ backgroundColor: "#f3f3f3" }}>
        <Form onSubmit={handleAddAzienda} ref={refForm}>
          <div className="row mt-5">
            {handleSection("DATI LOGIN", formDatiLogin)}
            {handleSection("DATI AZIENDA", formDatiAzienda)}
          </div>
          <div className="d-flex justify-content-center form_middle_page_btn"
            style={{ marginRight: "20%", marginTop: "80px", paddingBottom: "130px" }}>
            <div className="form-group">
              <button className="btn btn-primary btn-block" type="submit">
                <span><SaveIcon />Salva</span>
              </button>
            </div>
            <CheckButton style={{ display: "none" }} ref={refCheckBtn} />
          </div>
        </Form>
      </div>
    </>
  );
};

export default AggSingAz;