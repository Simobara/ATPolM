import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import annuncioService from "../services/annuncio.service";

const Home = () => {
  const [annunciList, setAnnunci] = useState([]);

  useEffect(() => {
    const fetchAnnunci = async () => {
      try {
        const response = await annuncioService.getAnnunci();
        setAnnunci(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnnunci();
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Annunci</h3>
      </header>

      <Link to="/add-annuncio">
        <button type="button" className="btn btn-primary mb-4">Aggiungi +</button>
      </Link>

      <table className="table-home">
        <thead>
          <tr>
            <th>Id</th>
            <th>Titolo</th>
            <th>Descrizione</th>
            <th>Quantità</th>
          </tr>
        </thead>
        <tbody>
          {annunciList.map((annuncio) => (
            <tr key={annuncio.id}>
              <td style={{ paddingRight: "20px" }}>{annuncio.id}</td>
              <td style={{ paddingRight: "20px" }}>{annuncio.titolo}</td>
              <td style={{ paddingRight: "20px" }}>{annuncio.descrizione}</td>
              <td style={{ paddingRight: "20px" }}>{annuncio.quantita}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
