import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.scss";

import categoriaService from "../services/categoria.service";

const Categorie = () => {
  const [categorieList, setCategorie] = useState([]);

  useEffect(() => {
    categoriaService.getCategorie()
      .then(response => {
        setCategorie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDeleteCategoria = (categoriaId) => {
    categoriaService.deleteCategoria(categoriaId)
      .then(() => {
        // Refreshing the categorie list after successful deletion
        setCategorie(prevCategorie => prevCategorie.filter(categoria => categoria.id !== categoriaId));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Categorie</h3>
      </header>

      <Link to="/add-categoria">
        <button type="button" className="btn btn-primary mb-4">Aggiungi +</button>
      </Link>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <table className="table">
              <thead>
                <tr>
                  <th>Descrizione</th>
                </tr>
              </thead>
              <tbody>
                {
                  categorieList.map(categoria => (
                    <React.Fragment key={categoria.id}>
                      <tr>
                        <td>{categoria.descrizione}</td>
                        <td>
                          <button
                            onClick={() => handleDeleteCategoria(categoria.id)}
                            type="button"
                            className="btn btn-danger mb-4"
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorie;
