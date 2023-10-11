import React from 'react';
import { useNavigate } from 'react-router-dom';

//*CSS
import "./homePartec.css"

//* MUI MATERIAL ICONS
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const HomePartec = () => {


    const navigate = useNavigate(); // Utilizza l'hook useHistory


    return (
        <>
            <div className="elems-container">
                <div style={{ fontSize: '20px', marginTop: '5rem' }}>
                    <div style={{
                        height: '70px',
                        backgroundColor: '#44a556',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 'bold',
                    }} className="bold-columns text-center text-white">
                        HOME PARTECIPAZIONI
                    </div>
                    {/* <div className="container-fluid container-margin"> */}
                    <div className="row row-overflow col-12 mt-3">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
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
                            <div className="row align-items-center">
                                <div className="col-6 d-flex align-items-center">
                                    <div className="header_value">
                                        <span className="header section-padding text-azzurrino">ID Bando 2008 </span>
                                        <span className="header_accessor section-padding">{""}</span>
                                    </div>
                                </div>
                                <div className="col-6 d-flex align-items-center justify-content-end">
                                    <div className="header_value ">
                                        <span className="header section-padding text-azzurrino">Data Chiusura 10/7/2023</span>
                                        <span className="header_accessor section-padding">{""}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row ml-2">
                                <div className="col-4 text-center ml-4">
                                    <button className="big-button" onClick={() => navigate('/partecBandi')}> Vedi il Bando
                                        <span> <ArrowForwardIosIcon />  </span></button>
                                </div>
                                {/* <div className="row"> */}
                                <div className="col-12">
                                    <hr className="shorter-hr" />
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div > */}
        </>
    )
}

export default HomePartec;
