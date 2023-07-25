import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AnnuncioService from "../services/annuncio.service";
import { withRouter } from "../common/with-router";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Questo campo è obbligatorio!
      </div>
    );
  }
};

const AddAnnuncio = (props) => {
  const form = useRef(null);
  const checkBtn = useRef(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    titolo: "",
    descrizione: "",
    quantita: ""
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddAnnuncio = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      try {
        await AnnuncioService.addAnnuncio(formData.titolo, formData.descrizione, formData.quantita);
        props.router.navigate("/home");
        window.location.reload();
      } catch (error) {
        const resMessage =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="col-md-6">
      <div>
        <Form onSubmit={handleAddAnnuncio} ref={form}>
          <div className="form-group">
            <label htmlFor="titolo">Titolo</label>
            <Input
              type="text"
              className="form-control"
              name="titolo"
              value={formData.titolo}
              onChange={onChange}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="descrizione">Descrizione</label>
            <Input
              type="text"
              className="form-control"
              name="descrizione"
              value={formData.descrizione}
              onChange={onChange}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="quantita">Quantità</label>
            <Input
              type="text"
              className="form-control"
              name="quantita"
              value={formData.quantita}
              onChange={onChange}
              validations={[required]}
            />
          </div>

          <div className="col-md-6 mx-auto mt-4">
            <div className="form-group">
              <button className="btn btn-primary btn-block" disabled={loading}>
                {loading && <span className="spinner-border spinner-border-sm"></span>}
                <span>Aggiungi</span>
              </button>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}

            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default withRouter(AddAnnuncio);
