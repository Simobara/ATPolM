import React, { Component } from "react";
import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import "./home.scss";

import categoriaService from "../services/categoria.service";


const Categorie = () => {

    const [categorieList, setCategorie] = useState([]); 

  useEffect (() => {

    categoriaService.getCategorie()
        .then(response => {
          setCategorie(response.data)
        })
        .catch(error => {
          console.error(error);
          });
  }, []);
  
  
    return (
      <div className="container">
        <header className="jumbotron">
          {/*<h3>{this.state.content}</h3>*/}
          <h3>Categorie</h3>
        </header>

        <Link to="/add-categoria">
          <button type="button" class="btn btn-primary mb-4" >Aggiungi +</button>
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
                  <React.Fragment>
                  
                    <tr>
                        <td>{categoria.descrizione}</td>
                        <td>
                          <button onClick={() => categoriaService.deleteCategoria(categoria.id)} type="button" class="btn btn-danger mb-4" >X</button>   {/* Cancelliamo l'oggetto correlato. */}
                        </td>                        
                    </tr>
                  
                  </React.Fragment> 
                    ))
                }
                </tbody>
              </table>
            </div>
            {/*<div className="col-md-6">
              <button type="button" class="btn btn-danger mb-4" >X</button>
            </div>*/}

          </div>
        </div>


        {/* Con "index" settato come indice dell'array: viene creato un indice numerato assegnato a
        ciascuno oggetto con il quale verrà replicato di volta in volta l'HTML per mostrare ogni singolo
        oggetto. */}

        {/*<table className="table">                
          <thead>
            <tr>
              <th>Descrizione</th>
            </tr>
          </thead>
          <tbody>
            {  
              categorieList.map((categoria, index) => { 
                  
                return (                  
                    <tr key={index}>
                        <td>{categoria.descrizione}</td>
                        <td>
                          <button type="button" className="btn btn-danger btn-sm mb-4" >X</button>
                        </td>
                    </tr>
                );    
                  
                    
                  })  
            }

          </tbody>  
        </table>*/}




      </div>
    );

}

export default Categorie;
