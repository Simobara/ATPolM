// NuovaPagina.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./partecBando.css"

const PartecipaBando = () => {


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
                                        <span className="color-lightcoral info-section_text text-title-larger text-azzurrino">
                                            Bando 1: {""}
                                        </span>
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
                                <div className="header_value">
                                    <div className="header section-padding text-normal">
                                        <div className="text-box">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia
                                            deserunt mollit anim id est laborum.
                                        </div>
                                    </div>
                                </div>
                                <div className="header_accessor section-padding text-large"> {""}</div>
                                <div className="header_value">
                                    <span className="header section-padding text-normal-small">Allegati </span>
                                    <span className="header_accessor section-padding">{""}</span>
                                </div>

                                <div className="row">
                                    <div className="col-12 text-center">  {/* Questo assicurerà che il pulsante sia centrato */}
                                        <button className="big-button" onClick={() => navigate('/partecBando')}>PARTECIPA AL BANDO</button>
                                        <p className="header_accessor section-padding">{""}</p>
                                        <button className="big-button" onClick={() => navigate('/partec')}>torna alla precedente</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 text-center">  {/* Questo assicurerà che il pulsante sia centrato */}
                                <div className="col-12">
                                    <hr className="shorter-hr" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default PartecipaBando;
