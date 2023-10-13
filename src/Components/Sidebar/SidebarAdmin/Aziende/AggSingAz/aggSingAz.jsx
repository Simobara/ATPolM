import React, { useState, useEffect, useRef } from "react";
import Input from "react-validation/build/input";

//* VALIDATIONS
import AziendaService from "../../../../../DataAPI/services/azienda.service";
// eslint-disable-next-line
import CheckButton from "react-validation/build/button";

//* COMPONENTS
import Form from "react-validation/build/form";
import FormInput from "./Component/FormInput/formInput";

//* CSS
import "./aggSingAz.css";

//* MUI MATERIAL ICONS
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import RuoloService from "../../../../../DataAPI/services/ruolo.service";
//import RuoloService from "../../../../../DataAPI/services/ruolo.service";

import axios from "axios";

const API_URL = 'http://localhost:8080/api/auth/';
const API_URL_API = 'http://localhost:8080/api/';

const AggSingAz = () => {
  const refForm = useRef(null);
  const refCheckBtn = useRef(null);
  // eslint-disable-next-line
  const [message, setMessage] = useState("");
  const [isFormReset, setIsFormReset] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    ragioneSociale: "",
    legaleRappresentante: "",
    indirizzo: "",
    codiceFiscale: "",
    pIva: "",
    telefono: "",
    telefono2: "",
    descrizioneTelefoni: "",
    fax: "",
    pec: "",
    idRuolo: "",
    idFormaGiuridica: "",
    idAssociazione: "",
    idLocalita: "",
    idCategoria: "",
    idAttivitaPrincipale: "",
    idAttivitaSecondaria: ""
  });

  const handleResetForm = (e) => {
    e.preventDefault();
    setFormData({
      username: "",
      email: "",
      password: "",
      ragioneSociale: "",
      legaleRappresentante: "",
      indirizzo: "",
      codiceFiscale: "",
      pIva: "",
      telefono: "",
      telefono2: "",
      descrizioneTelefoni: "",
      fax: "",
      pec: "",
      idRuolo: "",
      idFormaGiuridica: "",
      idAssociazione: "",
      idLocalita: "",
      idCategoria: "",
      idAttivitaPrincipale: "",
      idAttivitaSecondaria: ""
    });
    setIsFormReset(true);
  };

  // OPTIONS
  const ruoliOptions = ["Ruolo1", "Ruolo2"];
  const formaGiuridicaOptions = ["Forma Giuridica 1", "Forma Giuridica 2"];
  const associazioneOptions = ["Associazione 1", "Associazione 2"];
  const localitaOptions = ["Località 1", "Località 2"];
  const categoriaOptions = ["Categoria 1", "Categoria 2"];
  const attivitaPrincipaleOptions = ["Attività Principale 1", "Attività Principale 2"];
  const attivitaSecondariaOptions = ["Attività Secondaria 1", "Attività Secondaria 2"];

  const formDatiLogin = [
    { id: "Email", label: "Email", type: "email" },
    //{ id: "Ruoli", label: "Ruoli", type: "select", options: ruoliOptions },
    { id: "Password", label: "Password", type: "password" },
    { id: "ConfermaPassword", label: "Conferma Password", type: "password" },
  ];

  const formDatiAzienda = [
    { id: "RagioneSociale", label: "Ragione Sociale", type: "text" },
    { id: "RappresentanteLegale", label: "Rappresentante Legale", type: "text" },
    { id: "Indirizzo", label: "Indirizzo", type: "text" },
    { id: "CodiceFiscale", label: "Codice Fiscale", type: "text" },
    { id: "PartitaIva", label: "Partita Iva", type: "text" },
    { id: "Telefono1", label: "Telefono1", type: "number" },
    { id: "Telefono2", label: "Telefono2", type: "number" },
    { id: "DescrizioneTelefoni", label: "Descrizione Telefoni", type: "text" },
    { id: "Fax", label: "Fax", type: "number" },
    { id: "Pec", label: "Pec", type: "email" },
    /*{ id: "FormaGiuridica", label: "Forma Giuridica", type: "select", options: formaGiuridicaOptions },
    { id: "Associazione", label: "Associazione", type: "select", options: associazioneOptions },
    { id: "Localita", label: "Localita", type: "select", options: localitaOptions },
    { id: "Categoria", label: "Categoria", type: "select", options: categoriaOptions },
    { id: "Attivita'Principale", label: "Attivita' Principale", type: "select", options: attivitaPrincipaleOptions },
    { id: "Attivita'Secondaria", label: "Attivita' Secondaria", type: "select", options: attivitaSecondariaOptions },*/
  ];

  
  const postUtenteData = async (username, email, password, ragioneSociale, legaleRappresentante, indirizzo, codiceFiscale, pIva, telefono,
                                telefono2, descrizioneTelefoni, fax, pec, idRuolo, idFormaGiuridica, idAssociazione, idLocalita,
                                idCategoria, idAttivitaPrincipale, idAttivitaSecondaria) => {
    //const response = await getRuoli()
    console.log("Tutti i dati vengono passati? " + username, email, password, ragioneSociale, legaleRappresentante, indirizzo, codiceFiscale, pIva, telefono,
    telefono2, descrizioneTelefoni, fax, pec, idRuolo, idFormaGiuridica, idAssociazione, idLocalita,
    idCategoria, idAttivitaPrincipale, idAttivitaSecondaria)

    axios.post(API_URL + `aggiungi-azienda-singola/${idLocalita}/${idCategoria}/${idAttivitaPrincipale}/${idAttivitaSecondaria}` +
                                                  `/${idAssociazione}/${idFormaGiuridica}/${idRuolo}`, {
      username,
      email,
      password,
      ragioneSociale,
      legaleRappresentante,
      indirizzo,
      codiceFiscale,
      pIva,
      telefono,
      telefono2,
      descrizioneTelefoni,
      fax,
      pec,
      idFormaGiuridica,            
      idAssociazione,
      idLocalita,
      idCategoria,
      idAttivitaPrincipale,
      idAttivitaSecondaria,
      idRuolo

    })
  }

  const { addAzienda } = AziendaService();
  //const { addAzienda } = AziendaService();
  const { getRuoli } = RuoloService();

  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [ragioneSociale, setRagioneSociale] = useState([]);
  const [rappresentanteLegale, setRappresentanteLegale] = useState([]);
  const [indirizzo, setIndirizzo] = useState([]);
  const [codiceFiscale, setCodiceFiscale] = useState([]);
  const [partitaIva, setPartitaIva] = useState([]);
  const [telefonoUno, setTelefonoUno] = useState([]);
  const [telefonoDue, setTelefonoDue] = useState([]);
  const [descrizioneTelefoni, setDescrizioneTelefoni] = useState([]);
  const [fax, setFax] = useState([]);
  const [pec, setPec] = useState([]);

  const [ruoliList, setRuoli] = useState([]);
  const [formaGiuridicaList, setFormeGiuridiche] = useState([]);
  const [associazioneList, setAssociazioni] = useState([]);
  const [localitaList, setLocalita] = useState([]);
  const [categoriaList, setCategoria] = useState([]);
  const [attivitaPrincipaleList, setAttivitaPrincipale] = useState([]);
  const [attivitaSecondariaList, setAttivitaSecondaria] = useState([]);

  const [idRuolo, onChangeIdRuolo] = useState([]);
  const [idFormaGiuridica, onChangeIdFormaGiuridica] = useState([]);
  const [idAssociazione, onChangeIdAssociazione] = useState([]);
  const [idLocalita, onChangeIdLocalita] = useState([]);
  const [idCategoria, onChangeIdCategoria] = useState([]);
  const [idAttivitaPrincipale, onChangeIdAttivitaPrincipale] = useState([]);
  const [idAttivitaSecondaria, onChangeIdAttivitaSecondaria] = useState([]);

  const handleSection = (sectionTitle, sectionData) => (
    <>
      <div className="word-label ml-2 mb-4 titolo-sezione titolo-blu">{sectionTitle}</div>
      <div className="col-9 ml-2">
        {sectionData.map(
          (
            inputData //SECTION DATA ==> {FORM DATI LOGIN}, {FORM DATA AZIENDE}
          ) => (
            <FormInput key={inputData.id} {...inputData} propOnChange={handleChange} propValue={formData[inputData.id]} propIsFormReset={isFormReset} />
          )
        )}
      </div>
    </>
  );

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleAddAzienda = async (e) => {
    e.preventDefault();
    setMessage("");
    refForm.current.validateAll();

    // if (refCheckBtn.current.context._errors.length === 0) {
    //if (refCheckBtn.current && refCheckBtn.current.context && refCheckBtn.current.context._errors && refCheckBtn.current.context._errors.length === 0) {
      try {
        //Aggiorna questa chiamata con i parametri corretti
        //await addAzienda(formData);
        await addAzienda(username, email, password, ragioneSociale, rappresentanteLegale, indirizzo, codiceFiscale, partitaIva, telefonoUno,
                            telefonoDue, descrizioneTelefoni, fax, pec, idRuolo, idFormaGiuridica, idAssociazione, idLocalita,
                            idCategoria, idAttivitaPrincipale, idAttivitaSecondaria);
        //await postUtenteData(formData);        
        //await postUtenteData(username, email, password, ragioneSociale, rappresentanteLegale, indirizzo, codiceFiscale, partitaIva, telefonoUno,
        //                    telefonoDue, descrizioneTelefoni, fax, pec, idRuolo, idFormaGiuridica, idAssociazione, idLocalita,
        //                    idCategoria, idAttivitaPrincipale, idAttivitaSecondaria);
        //await postUtenteData();

        setFormData({
          username: "",
          email: "",
          password: "",
          ragioneSociale: "",
          legaleRappresentante: "",
          indirizzo: "",
          codiceFiscale: "",
          pIva: "",
          telefono: "",
          telefono2: "",
          descrizioneTelefoni: "",
          fax: "",
          pec: "",
          idRuolo: "",
          idFormaGiuridica: "",
          idAssociazione: "",
          idLocalita: "",
          idCategoria: "",
          idAttivitaPrincipale: "",
          idAttivitaSecondaria: ""
        });
        console.log("set form data annunci --- dati salvati");
      } catch (error) {
        const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        setMessage(resMessage);
      }
    //}
  };

  const getRuoliData = async () => {
    //const response = await getRuoli()
    const response = await axios.get(API_URL + 'ruoli')       //Messo direttamente va, se richiamo il servizio da undefined
    //console.log("Qua va??? " + JSON.stringify(response.data))
    setRuoli(response.data);
  }

  const getFormeGiuridicheData = async () => {
    //const response = await getRuoli()
    const response = await axios.get(API_URL_API + 'forme-giuridiche')       //Messo direttamente va, se richiamo il servizio da undefined
    setFormeGiuridiche(response.data);
  }

  const getAssociazioniData = async () => {
    //const response = await getRuoli()
    const response = await axios.get(API_URL_API + 'associazioni')       //Messo direttamente va, se richiamo il servizio da undefined
    setAssociazioni(response.data);
  }

  const getLocalitaData = async () => {
    //const response = await getRuoli()
    const response = await axios.get(API_URL_API + 'localita')       //Messo direttamente va, se richiamo il servizio da undefined
    setLocalita(response.data);
  }

  const getCategoriaData = async () => {
    //const response = await getRuoli()
    const response = await axios.get(API_URL_API + 'categorie')       //Messo direttamente va, se richiamo il servizio da undefined
    setCategoria(response.data);
  }

  const getAttivitaPrincipaleData = async () => {
    //const response = await getRuoli()
    const response = await axios.get(API_URL_API + 'categorie')       //Messo direttamente va, se richiamo il servizio da undefined
    setAttivitaPrincipale(response.data);
  }

  const getAttivitaSecondariaData = async () => {
    //const response = await getRuoli()
    const response = await axios.get(API_URL_API + 'categorie')       //Messo direttamente va, se richiamo il servizio da undefined
    setAttivitaSecondaria(response.data);
  }

  


  /*useEffect(() => {
    if (isFormReset) {
      setIsFormReset(false);
    }

    getRuoli()
    //RuoloService.getRuoli()
      .then(response => {                         //sono funzioni e vanno chiamate con le "()".
        console.log("getRuoli stuff: " + JSON.stringify(response.data))
        setRuoli(response.data)
    });

  }, [isFormReset] 

  );*/

  useEffect(() => {

    getRuoliData()
    getFormeGiuridicheData()
    getAssociazioniData()
    getLocalitaData()
    getCategoriaData()
    getAttivitaPrincipaleData()
    getAttivitaSecondariaData()

    /*getRuoli()
      .then(response => {
        console.log("getRuoli stuff: " + JSON.stringify(response.data))
        setRuoli(response.data)
    });*/

  }, []);

  return (
    <>
      <div className="container custom-container mt-5" style={{ backgroundColor: "#f3f3f3" }}>
        <Form onSubmit={handleAddAzienda} ref={refForm}>
          <div className="row mt-5">
            {handleSection("DATI LOGIN", formDatiLogin)}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                //validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                //validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="text"
                className="form-control"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                //validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ragioneSociale">Ragione Sociale</label>
              <Input
                type="text"
                className="form-control"
                name="ragioneSociale"
                value={ragioneSociale}
                onChange={e => setRagioneSociale(e.target.value)}
                //validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="rappresentanteLegale">Rappresentante Legale</label>
              <Input
                type="text"
                className="form-control"
                name="rappresentanteLegale"
                value={rappresentanteLegale}
                onChange={e => setRappresentanteLegale(e.target.value)}
                //validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="indirizzo">Indirizzo</label>
              <Input
                type="text"
                className="form-control"
                name="indirizzo"
                value={indirizzo}
                onChange={e => setIndirizzo(e.target.value)}
                //validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="codiceFiscale">Codice Fiscale</label>
              <Input
                type="text"
                className="form-control"
                name="codiceFiscale"
                value={codiceFiscale}
                onChange={e => setCodiceFiscale(e.target.value)}
                //validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="partitaIva">Partita IVA</label>
              <Input
                type="text"
                className="form-control"
                name="partitaIva"
                value={partitaIva}
                onChange={e => setPartitaIva(e.target.value)}
                //validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefonoUno">Telefono Uno</label>
              <Input
                type="text"
                className="form-control"
                name="telefonoUno"
                value={telefonoUno}
                onChange={e => setTelefonoUno(e.target.value)}
                //validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefonoDue">Telefono Due</label>
              <Input
                type="text"
                className="form-control"
                name="telefonoDue"
                value={telefonoDue}
                onChange={e => setTelefonoDue(e.target.value)}
                //validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="descrizioneTelefoni">Descrizione Telefoni</label>
              <Input
                type="text"
                className="form-control"
                name="descrizioneTelefoni"
                value={descrizioneTelefoni}
                onChange={e => setDescrizioneTelefoni(e.target.value)}
                //validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fax">Fax</label>
              <Input
                type="text"
                className="form-control"
                name="fax"
                value={fax}
                onChange={e => setFax(e.target.value)}
                //validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pec">Pec</label>
              <Input
                type="text"
                className="form-control"
                name="pec"
                value={pec}
                onChange={e => setPec(e.target.value)}
                //validations={[required]}
              />
            </div>
            <select value={idRuolo} onChange={e => onChangeIdRuolo(e.target.value)}>
              {ruoliList.map((ruolo) => (
                //<option value={ruolo.descrizione} key={ruolo.id}>
                <option value={ruolo.id}>{ruolo.descrizione}</option>                  
                //</option>
              ))}
            </select>
            {handleSection("DATI AZIENDA", formDatiAzienda)}
            <select value={idFormaGiuridica} onChange={e => onChangeIdFormaGiuridica(e.target.value)}>
              {formaGiuridicaList.map((formaGiuridica) => (
                //<option value={ruolo.descrizione} key={ruolo.id}>
                <option value={formaGiuridica.id}>{formaGiuridica.descrizione}</option>                  
                //</option>
              ))}
            </select>
            <select value={idAssociazione} onChange={e => onChangeIdAssociazione(e.target.value)}>
              {associazioneList.map((associazione) => (
                //<option value={ruolo.descrizione} key={ruolo.id}>
                <option value={associazione.id}>{associazione.descrizione}</option>                  
                //</option>
              ))}
            </select>
            <select value={idLocalita} onChange={e => onChangeIdLocalita(e.target.value)}>
              {localitaList.map((localita) => (
                //<option value={ruolo.descrizione} key={ruolo.id}>
                <option value={localita.id}>{localita.descrizione}</option>                  
                //</option>
              ))}
            </select>
            <select value={idCategoria} onChange={e => onChangeIdCategoria(e.target.value)}>
              {categoriaList.map((categoria) => (
                //<option value={ruolo.descrizione} key={ruolo.id}>
                <option value={categoria.id}>{categoria.descrizione}</option>                  
                //</option>
              ))}
            </select>
            <select value={idAttivitaPrincipale} onChange={e => onChangeIdAttivitaPrincipale(e.target.value)}>
              {attivitaPrincipaleList.map((attivitaPrincipale) => (
                //<option value={ruolo.descrizione} key={ruolo.id}>
                <option value={attivitaPrincipale.id}>{attivitaPrincipale.descrizione}</option>                  
                //</option>
              ))}
            </select>
            <select value={idAttivitaSecondaria} onChange={e => onChangeIdAttivitaSecondaria(e.target.value)}>
              {attivitaSecondariaList.map((attivitaSecondaria) => (
                //<option value={ruolo.descrizione} key={ruolo.id}>
                <option value={attivitaSecondaria.id}>{attivitaSecondaria.descrizione}</option>                  
                //</option>
              ))}
            </select>
          </div>
          <div className="row justify-content-center form_middle_page_btn" style={{ marginTop: "80px", paddingBottom: "130px" }}>
            <div className="form-group col-md-2 mr-3">
              <button
                className="btn btn-primary btn-block"
              // onClick={"#"}
              >
                {/* {loading && <span className="spinner-border spinner-border-sm"></span>} */}
                <span>
                  <SaveIcon />
                  Salva
                </span>
              </button>
            </div>
            <div className="form-group col-md-2 ml-5">
              <button className="btn btn-danger btn-block" onClick={handleResetForm}>
                <span>
                  <DeleteIcon /> Cancella
                </span>
              </button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AggSingAz;
