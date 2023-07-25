import React, { Component } from "react";
import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import "./home.scss";

import annuncioService from "../services/annuncio.service";


const Home = () => {

    const [annunciList, setAnnunci] = useState([]); 

  useEffect (() => {
    //Usando un servizio e il metodo "getPublicContent()" possiamo cambiare i dati mostrati nella pagina home
    //più velocemente: basta cambiare il servizio in base a dove vogliamo prendere i dati.

    annuncioService.getAnnunci()                                     //IMPORTANTE: serve responseEntity nel
        .then(response => {                                               //metodo collegato all'endpoint per ottenere
          setAnnunci(response.data)                                       //dati da inviare a React.
        })                                                                //response.data rappresenta l'oggetto response
        .catch(error => {                                                 //che viene passato dal BE.
          console.error(error);                                           //Qua tramite setAziende() i dati del BE
          });                                                             //vengono settati su AziendeList e poi più giù
                                                                          //mappati.
  }, []);
  
  
    return (
      <div className="container">
        <header className="jumbotron">
          {/*<h3>{this.state.content}</h3>*/}
          <h3>Annunci</h3>
        </header>

        <Link to="/add-annuncio">
          <button type="button" class="btn btn-primary mb-4" >Aggiungi +</button>
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
          {  
            annunciList.map(annuncio => (     /*"aziendeList" è l'array, con .map() facciamo girare */
            <React.Fragment>                 {/* il codice definito dentro map come "parametro" per ogni */}
                                             {/*elemento presente nell'array "aziendeList". */}
                                             {/* Prende l'id di ogni oggetto e ne popola i campi */}
                                             {/* sotto*/}
                
            <tbody>
              <tr>{/*Commentato per ricordare come si fa instyle dentro React JSX*/}
                  {/*<td style={{paddingRight: 20 + 'px'}}>{azienda.ragioneSociale}</td>*/}
                  <td>{annuncio.id}</td>
                  <td>{annuncio.titolo}</td>
                  <td>{annuncio.descrizione}</td>
                  <td>{annuncio.quantita}</td>
              </tr>
            </tbody>
            </React.Fragment> 
              ))
          }
        </table>

      </div>
    );

}

export default Home;
