import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./partec.css"


const Partec = () => {


    const navigate = useNavigate(); // Utilizza l'hook useHistory


    return (
        <>
            <div className="elems-container" style={{ fontSize: "1.9rem", marginTop: "80px" }}>
                <div className="container-fluid container-margin">
                    <div className="row row-overflow col-12">
                        <div className="col-12"> {/* Container per tutto il contenuto e la linea */}
                            <div className="row">
                                <div className="col-6">
                                    <div className="info-section info-section_text section-padding">
                                        <span className="color-lightcoral info-section_text text-title-larger">
                                            Bando 1: {""}
                                        </span>
                                    </div>
                                    <div className="header_value">
                                        <span className="header section-padding text-larger">Descrizione</span>
                                        <div className="header_accessor section-padding text-large"> Vetrina Bando1 </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="header_value">
                                        <span className="header section-padding text-azzurrino">ID Bando 2008 </span>
                                        <span className="header_accessor section-padding">{""}</span>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="header_value flex-end">
                                        <span className="header section-padding text-azzurrino">Data Chiusura 10/7/2023</span>
                                        <span className="header_accessor section-padding">{""}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">  {/* Questo assicurerà che il pulsante sia centrato */}
                                    <button className="big-button" onClick={() => navigate('/partecBando')}>VAI ALLA PAGINA</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <hr className="shorter-hr" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partec
