import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { withRouter } from "../common/with-router";
import CategoriaService from "../services/categoria.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Questo campo è obbligatorio!
      </div>
    );
  }
};

const AddCategoria = (props) => {
  const form = useRef(null);
  const checkBtn = useRef(null);

  const [formData, setFormData] = useState({
    descrizione: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddCategoria = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      const { descrizione } = formData;
      CategoriaService.addCategoria(descrizione)
        .then(
          () => {
            props.router.navigate("/categorie");
            window.location.reload();
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

            setLoading(false);
            setMessage(resMessage);
          }
        );
    }
  };

  return (
    <div className="col-md-6">
      <div>
        <Form onSubmit={handleAddCategoria} ref={form}>
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

          <div className="col-md-6 mx-auto mt-4">
            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
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

export default withRouter(AddCategoria);