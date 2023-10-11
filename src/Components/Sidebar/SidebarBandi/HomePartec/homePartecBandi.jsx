import React from 'react';
import { useNavigate } from 'react-router-dom';

//*CSS
import "./homePartecBandi.css"

//* MUI MATERIAL ICONS
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const HomePartecBandi = () => {


    const navigate = useNavigate(); // Utilizza l'hook useNavigate

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
                        {/* <div className="col-12"> */}
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
                            <div className="col-6 d-flex justify-content-end">
                                <div className="header_value ">
                                    <span className="header section-padding text-azzurrino">Data Chiusura 10/7/2023</span>
                                    <span className="header_accessor section-padding">{""}</span>
                                </div>
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
                        {/* </div> */}
                        <div className="row">
                            <div className="col-12 text-center d-flex justify-content-center gap-3">
                                <button className="big-button ml-auto ml-3" onClick={() => navigate('/partec')}>
                                    <span> <ArrowBackIosIcon /> </span>
                                    Torna alla precedente
                                </button>
                                <p className="header_accessor section-padding">{""}</p>
                                <button className="big-button mr-auto mr-3" onClick={() => navigate('/partecBandi')}>
                                    Partecipa al Bando
                                    <span> <ArrowForwardIosIcon />  </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    <div className="col-12">
                        <hr className="hrLine" />
                    </div>
                </div>
                {/* </div> */}
            </div >
        </>
    )
}

export default HomePartecBandi;
