import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

/* CSS */
import "./sidebar.css";
import farfallaRight from "../../Assets/Images/farfallaRight.jpg";
// import farfallaLeft from "../../Assets/Images/farfallaLeft.jpg";
// import arrowDown from "../../Assets/Images/black-arrow-down.png";

/* COMPONENTS */
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ClearIcon from "@mui/icons-material/Clear";

/* MUI MATERIAL ICONS */
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import FileUploadIcon from "@mui/icons-material/FileUploadOutlined";
// import StartOutlinedIcon from "@mui/icons-material/StartOutlined";
// import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const Sidebar = () => {
  // const [menu, setMenu] = useState(true);
  const [isArrowAziendeOpen, setIsArrowAziendeOpen] = useState(false);
  const [isArrowUtEsterniOpen, setIsArrowUtEsterniOpen] = useState(false);
  const [isArrowAnnunciOpen, setIsArrowAnnunciOpen] = useState(false);
  const [isArrowAnagrAzOpen, setIsArrowAnagrAzOpen] = useState(false);
  const [isArrowLocalitaOpen, setIsArrowLocalitaOpen] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);

  const [isSelectedLink, setIsSelectedLink] = useState("");
  const [active, setActive] = useState("");

  const handleClickLinkSidebar = (event) => {
    const linkId = event.target.id;
    setIsSelectedLink(linkId);
    setDisplayMenu(false);
  };

  useEffect(() => {
    // Logica per applicare la classe "text-blue" all'elemento selezionato

    // if (document.getElementById('submenu menu-link')) ==

    const menuLinks = document.getElementsByClassName("submenu menu-link");
    for (let i = 0; i < menuLinks.length; i++) {
      const link = menuLinks[i];
      if (link.id === isSelectedLink) {
        link.classList.add("sidebar-text-link");
      } else {
        link.classList.remove("sidebar-text-link");
      }
    }
  }, [isSelectedLink]);

  return (
    <>
      {/* {menu && ( */}
      {/* <div className="menu-Documents-close"> */}
      {/* <div>
            <h3
              style={{
                textAlign: "center",
                fontWeight: "600",
                color: "purple",
                marginTop: "10px",
                fontSize: "40px",
              }}
            >
              <img src={farfallaLeft} height={70} alt="igmPic" />
            </h3>
          </div> */}
      {/* <MenuList>
            <M onClick={() => setMenu(true)}>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ textAlign: "center", width: "100%" }}
                component="span"
              >
                <div className="doubleArrowTwo">
                  <KeyboardDoubleArrowRightTwoToneIcon />
                </div>
              </Typography>
            </M

              <MenuItem component={Link} to="/annunci" className="MenuItem">
                <ListItemIcon className="ListItemIcon">
                  <StartOutlinedIcon fontSize="small" />
                </ListItemIcon>
              </MenuItem>

              <MenuItem component={Link} to="/anagrAz" className="MenuItem">
                <ListItemIcon className="ListItemIcon">
                  <StartOutlinedIcon fontSize="small" />
                </ListItemIcon>
              </MenuItem>
            </MenuList> */}
      {/* </div> */}
      {/* </div> */}
      {/* )} */}
      {/* {menu && ( */}
      <MenuIcon className="MenuIcon-toggle" onClick={() => setDisplayMenu(!displayMenu)} />
      {displayMenu && (
        <div className="menu-Documents-openSmall">
          <div>
            <h3
              style={{
                textAlign: "center",
                fontWeight: "600",
                color: "purple",
                marginTop: "10px",
                fontSize: "40px",
              }}
            >
              <img src={farfallaRight} height={70} alt="igmPicc" />
            </h3>
            <div className="Polieco-Marketplace-heading">Polieco - Marketplace</div>
          </div>
          <ClearIcon className="crossIcon-toggle " onClick={() => setDisplayMenu(!displayMenu)} />
          <MenuList>{/* {" "}---------------------------------------------------- */}</MenuList>
          <div className="menuHeight">
            <MenuList>
              <MenuItem component={Link} to="/" className="MenuMainItemHome" onClick={() => setDisplayMenu(false)}>
                <Typography variant="body2" className="ListItemTypo" component="span">
                  <div className="item-arrow">
                    <div className="item">Home</div>
                  </div>
                </Typography>
              </MenuItem>
              <MenuItem className="MenuMainItem">
                {/* <ListItemIcon className="ListItemIcon icon">
                <StartOutlinedIcon fontSize="small" locali/>
              </ListItemIcon> */}
                <Typography variant="body2" className="ListItemTypo" component="span">
                  <div className="item-arrow">
                    <div className="item">Aziende</div>
                    <div className="arrow">
                      {isArrowAziendeOpen === true ? (
                        <IoIosArrowUp style={{ color: "#fff" }} onClick={() => setIsArrowAziendeOpen(!isArrowAziendeOpen)} />
                      ) : (
                        <IoIosArrowDown style={{ color: "#fff" }} onClick={() => setIsArrowAziendeOpen(!isArrowAziendeOpen)} />
                      )}
                    </div>
                  </div>
                  {isArrowAziendeOpen && (
                    <>
                      <div className="submenu-open">
                        <div className="submenu menu-content">
                          <NavLink
                            id="aggSingAz"
                            to="/aziende/aggSingAz"
                            className={`submenu menu-link sott ${isSelectedLink === "aggSingAz" ? "sidebar-text-link" : ""}`}
                            onClick={handleClickLinkSidebar}
                          >
                            Aggiungi azienda
                          </NavLink>
                        </div>
                        <div className="submenu menu-content">
                          <NavLink
                            id="impDatiExc"
                            to="/aziende/impDatiExc"
                            className={`submenu menu-link sott ${isSelectedLink === "impDatiExc" ? "sidebar-text-link" : ""}`}
                            onClick={handleClickLinkSidebar}
                          >
                            Importa Dati Excel
                          </NavLink>
                        </div>
                      </div>
                    </>
                  )}
                </Typography>
              </MenuItem>
              <MenuItem className="MenuMainItem">
                <Typography variant="body2" className="ListItemTypo" component="span">
                  <div className="item-arrow">
                    <div className="item">Utenti Esterni</div>
                    <div className="arrow">
                      {isArrowUtEsterniOpen === true ? (
                        <IoIosArrowUp style={{ color: "#fff" }} onClick={() => setIsArrowUtEsterniOpen(!isArrowUtEsterniOpen)} />
                      ) : (
                        <IoIosArrowDown style={{ color: "#fff" }} onClick={() => setIsArrowUtEsterniOpen(!isArrowUtEsterniOpen)} />
                      )}
                    </div>
                  </div>
                  {isArrowUtEsterniOpen && (
                    <>
                      <div className="submenu-open">
                        <div className="submenu menu-content">
                          <NavLink id="dati" to="/utEsterni/dati" className={`submenu menu-link sott ${isSelectedLink === "impDatiExc" ? "sidebar-text-link" : ""}`} onClick={handleClickLinkSidebar}>
                            Dati
                          </NavLink>
                        </div>
                        <div className="submenu menu-content">
                          <NavLink
                            id="intVersAnn"
                            to="/utEsterni/intVersAnn"
                            className={`submenu menu-link sott ${isSelectedLink === "impDatiExc" ? "sidebar-text-link" : ""}`}
                            onClick={handleClickLinkSidebar}
                          >
                            Interessi su Annunci
                          </NavLink>
                        </div>
                      </div>
                    </>
                  )}
                </Typography>
              </MenuItem>

              <MenuItem className="MenuMainItem">
                <Typography variant="body2" className="ListItemTypo" component="span">
                  <div className="item-arrow">
                    <div className="item">Annunci</div>
                    <div className="arrow">
                      {isArrowAnnunciOpen === true ? (
                        <IoIosArrowUp style={{ color: "#fff" }} onClick={() => setIsArrowAnnunciOpen(!isArrowAnnunciOpen)} />
                      ) : (
                        <IoIosArrowDown style={{ color: "#fff" }} onClick={() => setIsArrowAnnunciOpen(!isArrowAnnunciOpen)} />
                      )}
                    </div>
                  </div>
                  {isArrowAnnunciOpen && (
                    <>
                      <div className="submenu-open">
                        <div className="submenu menu-content">
                          <NavLink
                            id="nuovoAnnuncio"
                            to="/annunci/nuovoAnnuncio"
                            className={`submenu menu-link sott ${isSelectedLink === "nuovoAnnuncio" ? "sidebar-text-link" : ""}`}
                            onClick={handleClickLinkSidebar}
                          >
                            Nuovo Annuncio
                          </NavLink>
                        </div>
                        <div className="submenu menu-content">
                          <NavLink id="iMieiAnnunci" onClick={() => setDisplayMenu(false)} to="/annunci/iMieiAnnunci" className="submenu menu-link">
                            I miei Annunci
                          </NavLink>
                        </div>
                        <div className="submenu menu-content">
                          <NavLink id="materiali" onClick={() => setDisplayMenu(false)} to="/annunci/materiali" className="submenu menu-link">
                            Materiali
                          </NavLink>
                        </div>
                        <div className="submenu menu-content">
                          <NavLink id="unitaDiMisura" onClick={() => setDisplayMenu(false)} to="/annunci/unitaDiMisura" className="submenu menu-link">
                            Unita' di misura
                          </NavLink>
                        </div>
                      </div>
                    </>
                  )}
                </Typography>
              </MenuItem>

              <MenuItem
                // component={Link}
                // to="/anagrafAziende"
                className="MenuMainItem"
              >
                <Typography variant="body2" className="ListItemTypo" component="span">
                  <div className="item-arrow">
                    <div className="item">Anagrafica aziende</div>
                    <div className="arrow">
                      {isArrowAnagrAzOpen === true ? (
                        <IoIosArrowUp style={{ color: "#fff" }} onClick={() => setIsArrowAnagrAzOpen(!isArrowAnagrAzOpen)} />
                      ) : (
                        <IoIosArrowDown style={{ color: "#fff" }} onClick={() => setIsArrowAnagrAzOpen(!isArrowAnagrAzOpen)} />
                      )}
                    </div>
                  </div>
                  {isArrowAnagrAzOpen && (
                    <>
                      <div className="submenu-open submenu-open-height">
                        <div className="submenu menu-content">
                          <NavLink id="categorie" onClick={() => setDisplayMenu(false)} to="/anagrAz/categorie" className="menu-link">
                            Categorie
                          </NavLink>
                        </div>
                        <div className="submenu menu-content">
                          <NavLink id="associazioni" onClick={() => setDisplayMenu(false)} to="/anagrAz/associazioni" className="submenu menu-link">
                            Associazioni
                          </NavLink>
                        </div>
                        <div className="submenu menu-content">
                          <NavLink id="formeGiuridiche" onClick={() => setDisplayMenu(false)} to="/anagrAz/formeGiuridiche" className="submenu menu-link">
                            Forme Giuridiche
                          </NavLink>
                        </div>
                        <div className=" menu-content" style={{ paddingLeft: "10px" }}>
                          <Typography variant="body2" className="ListItemTypo" component="span">
                            <div className="item-arrow">
                              <div className="item">Localita'</div>
                              <div className="arrow-Menu">
                                {isArrowLocalitaOpen === true ? (
                                  <IoIosArrowUp style={{ color: "#fff" }}
                                    onClick={() => setIsArrowLocalitaOpen(!isArrowLocalitaOpen)} />
                                ) : (
                                  <IoIosArrowDown style={{ color: "#fff" }}
                                    onClick={() => setIsArrowLocalitaOpen(!isArrowLocalitaOpen)} />
                                )}
                              </div>
                            </div>
                            {isArrowLocalitaOpen && (
                              <>
                                <div className="submenu-open">
                                  <div className="submenu sub-submenu menu-content">
                                    <NavLink id="regioni"
                                      onClick={() => setDisplayMenu(false)}
                                      to="/anagrAz/Localita/regioni" className="sub-menu-link">
                                      Regioni
                                    </NavLink>
                                  </div>
                                  <div className="submenu sub-submenu menu-content">
                                    <NavLink id="province"
                                      onClick={() => setDisplayMenu(false)}
                                      to="/anagrAz/Localita/province" className="sub-menu-link">
                                      Province
                                    </NavLink>
                                  </div>
                                  <div className="submenu sub-submenu menu-content">
                                    <NavLink id="citta"
                                      onClick={() => setDisplayMenu(false)}
                                      to="/anagrAz/Localita/citta" className="sub-menu-link">
                                      Citta'
                                    </NavLink>
                                  </div>
                                </div>
                              </>
                            )}
                          </Typography>
                          {/* </div> */}
                        </div>
                      </div>
                    </>
                  )}
                </Typography>
              </MenuItem>
            </MenuList>
            <div style={{ marginTop: "10px" }}>
              <div className="Polieco-Marketplace-heading" style={{ color: "#c4c2c2" }}>
                Polieco v1.0.0
              </div>
              <div className="Polieco-Marketplace-heading" style={{ color: "#c4c2c2" }}>
                Copyright <span style={{ MarginTop: "20px" }}>©</span> 2023
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="menu-Documents-open" style={{ marginTop: "64px" }}>
        <div>
          <h3
            style={{
              textAlign: "center",
              fontWeight: "600",
              color: "purple",
              marginTop: "10px",
              fontSize: "40px",
            }}
          >
            <img src={farfallaRight} height={70} alt="igmPicc" />
          </h3>
          <div className="Polieco-Marketplace-heading">Polieco - Marketplace</div>
        </div>
        <MenuList>{/* {" "}---------------------------------------------------- */}</MenuList>
        <div className="menuHeight">
          <MenuList>
            <MenuItem component={Link} to="/" className={`MenuMainItemHome   ${active === "Home" ? " " : ""}`} onClick={() => setActive("Home")}>
              <Typography variant="body2" className="ListItemTypo" component="span">
                <div className="item-arrow">
                  <div className="item">Home</div>
                </div>
              </Typography>
            </MenuItem>
            <MenuItem className="MenuMainItem">
              {/* <ListItemIcon className="ListItemIcon icon">
                <StartOutlinedIcon fontSize="small" />
              </ListItemIcon> */}
              <Typography variant="body2" className="ListItemTypo" component="span">
                <div className="item-arrow">
                  <div className="item">Aziende</div>
                  <div className="arrow">
                    {isArrowAziendeOpen === true ? (
                      <IoIosArrowUp style={{ color: "#fff" }} onClick={() => setIsArrowAziendeOpen(!isArrowAziendeOpen)} />
                    ) : (
                      <IoIosArrowDown style={{ color: "#fff" }} onClick={() => setIsArrowAziendeOpen(!isArrowAziendeOpen)} />
                    )}
                  </div>
                </div>
                {isArrowAziendeOpen && (
                  <>
                    <div className="submenu-open">
                      <div className={`submenu menu-content  ${active === "Aggiungi azienda" ? "activeTab " : ""}`} onClick={() => setActive("Aggiungi azienda")}>
                        <NavLink id="aggSingAz" to="/aziende/aggSingAz" className="submenu menu-link">
                          Aggiungi azienda
                        </NavLink>
                      </div>
                      <div className={`submenu menu-content  ${active === "Importa Dati Excel" ? "activeTab " : ""}`} onClick={() => setActive("Importa Dati Excel")}>
                        <NavLink id="impDatiExc" to="/aziende/impDatiExc" className="submenu menu-link">
                          Importa Dati Excel
                        </NavLink>
                      </div>
                    </div>
                  </>
                )}
              </Typography>
            </MenuItem>
            <MenuItem className="MenuMainItem">
              <Typography variant="body2" className="ListItemTypo" component="span">
                <div className="item-arrow">
                  <div className="item">Utenti Esterni</div>
                  <div className="arrow">
                    {isArrowUtEsterniOpen === true ? (
                      <IoIosArrowUp style={{ color: "#fff" }} onClick={() => setIsArrowUtEsterniOpen(!isArrowUtEsterniOpen)} />
                    ) : (
                      <IoIosArrowDown style={{ color: "#fff" }} onClick={() => setIsArrowUtEsterniOpen(!isArrowUtEsterniOpen)} />
                    )}
                  </div>
                </div>
                {isArrowUtEsterniOpen && (
                  <>
                    <div className="submenu-open">
                      <div className={`submenu menu-content  ${active === "Dati" ? "activeTab " : ""}`} onClick={() => setActive("Dati")}>
                        <NavLink id="dati" to="/utEsterni/dati" className="submenu menu-link">
                          Dati
                        </NavLink>
                      </div>
                      <div className={`submenu menu-content  ${active === "Interessi su Annunci" ? "activeTab " : ""}`} onClick={() => setActive("Interessi su Annunci")}>
                        <NavLink id="intVersAnn" to="/utEsterni/intVersAnn" className="submenu menu-link">
                          Interessi su Annunci
                        </NavLink>
                      </div>
                    </div>
                  </>
                )}
              </Typography>
            </MenuItem>
            <MenuItem className="MenuMainItem">
              <Typography variant="body2" className="ListItemTypo" component="span">
                <div className="item-arrow">
                  <div className="item">Annunci</div>
                  <div className="arrow">
                    {isArrowAnnunciOpen === true ? (
                      <IoIosArrowUp style={{ color: "#fff" }} onClick={() => setIsArrowAnnunciOpen(!isArrowAnnunciOpen)} />
                    ) : (
                      <IoIosArrowDown style={{ color: "#fff" }} onClick={() => setIsArrowAnnunciOpen(!isArrowAnnunciOpen)} />
                    )}
                  </div>
                </div>
                {isArrowAnnunciOpen && (
                  <>
                    <div className="submenu-open">
                      <div className={`submenu menu-content  ${active === "Nuovo Annuncio" ? "activeTab " : ""}`} onClick={() => setActive("Nuovo Annuncio")}>
                        <NavLink id="nuovoAnnuncio" to="/annunci/nuovoAnnuncio" className="menu-link" style={{ paddingLeft: "10px" }}>
                          Nuovo Annuncio
                        </NavLink>
                      </div>
                      <div className={`submenu menu-content  ${active === "I miei Annunci" ? "activeTab " : ""}`} onClick={() => setActive("I miei Annunci")}>
                        <NavLink id="iMieiAnnunci" to="/annunci/iMieiAnnunci" className="menu-link" style={{ paddingLeft: "10px" }}>
                          I miei Annunci
                        </NavLink>
                      </div>
                      <div className={`submenu menu-content  ${active === "Materiali" ? "activeTab " : ""}`} onClick={() => setActive("Materiali")}>
                        <NavLink id="materiali" to="/annunci/materiali" className="menu-link" style={{ paddingLeft: "10px" }}>
                          Materiali
                        </NavLink>
                      </div>
                      <div className={`submenu menu-content  ${active === "Unita' di misura" ? "activeTab " : ""}`} onClick={() => setActive("Unita' di misura")}>
                        <NavLink id="unitaDiMisura" to="/annunci/unitaDiMisura" className="menu-link" style={{ paddingLeft: "10px" }}>
                          Unita' di misura
                        </NavLink>
                      </div>
                    </div>
                  </>
                )}
              </Typography>
            </MenuItem>
            <MenuItem className="MenuMainItem">
              <Typography variant="body2" className="ListItemTypo" component="span">
                <div className="item-arrow">
                  <div className="item">Anagrafica aziende</div>
                  <div className="arrow">
                    {isArrowAnagrAzOpen === true ? (
                      <IoIosArrowUp style={{ color: "#fff" }} onClick={() => setIsArrowAnagrAzOpen(!isArrowAnagrAzOpen)} />
                    ) : (
                      <IoIosArrowDown style={{ color: "#fff" }} onClick={() => setIsArrowAnagrAzOpen(!isArrowAnagrAzOpen)} />
                    )}
                  </div>
                </div>
                {isArrowAnagrAzOpen && (
                  <>
                    <div className="submenu-open submenu-open-height">
                      <div className={`submenu menu-content  ${active === "Categorie" ? "activeTab " : ""}`} onClick={() => setActive("Categorie")}>
                        <NavLink id="categorie" to="/anagrAz/categorie" className="menu-link" style={{ paddingLeft: "10px" }}>
                          Categorie
                        </NavLink>
                      </div>
                      <div className={`submenu menu-content  ${active === "Associazioni" ? "activeTab " : ""}`} onClick={() => setActive("Associazioni")}>
                        <NavLink id="associazioni" to="/anagrAz/associazioni" className="menu-link" style={{ paddingLeft: "10px" }}>
                          Associazioni
                        </NavLink>
                      </div>
                      <div className={`submenu menu-content  ${active === "Forme Giuridiche" ? "activeTab " : ""}`} onClick={() => setActive("Forme Giuridiche")}>
                        <NavLink id="formeGiuridiche" to="/anagrAz/formeGiuridiche" className="menu-link" style={{ paddingLeft: "10px" }}>
                          Forme Giuridiche
                        </NavLink>
                      </div>
                      <div className=" menu-content" style={{ paddingLeft: "10px" }}>
                        <Typography variant="body2" className="ListItemTypo" component="span">
                          <div className="item-arrow">
                            <div className="item">Localita'</div>
                            <div className="arrow-Menu">
                              {isArrowLocalitaOpen === true ? (
                                <IoIosArrowUp style={{ color: "#fff" }} onClick={() => setIsArrowLocalitaOpen(!isArrowLocalitaOpen)} />
                              ) : (
                                <IoIosArrowDown style={{ color: "#fff" }} onClick={() => setIsArrowLocalitaOpen(!isArrowLocalitaOpen)} />
                              )}
                            </div>
                          </div>
                          {isArrowLocalitaOpen && (
                            <>
                              <div className="submenu-open">
                                <div className={`submenu sub-submenu menu-content  ${active === "Regioni" ? "activeSubTab " : ""}`} onClick={() => setActive("Regioni")}>
                                  <NavLink id="regioni" to="/anagrAz/Localita/regioni" className="sub-menu-link" style={{ paddingLeft: "10px" }}>
                                    Regioni
                                  </NavLink>
                                </div>
                                <div className={`submenu sub-submenu menu-content  ${active === "Province" ? "activeSubTab " : ""}`} onClick={() => setActive("Province")}>
                                  <NavLink id="province" to="/anagrAz/Localita/province" className="sub-menu-link" style={{ paddingLeft: "10px" }}>
                                    Province
                                  </NavLink>
                                </div>
                                <div className={`submenu sub-submenu menu-content  ${active === "Citta'" ? "activeSubTab " : ""}`} onClick={() => setActive("Citta'")}>
                                  <NavLink id="citta" to="/anagrAz/Localita/citta" className="sub-menu-link" style={{ paddingLeft: "10px" }}>
                                    Citta'
                                  </NavLink>
                                </div>
                              </div>
                            </>
                          )}
                        </Typography>
                      </div>
                    </div>
                  </>
                )}
              </Typography>
            </MenuItem>
          </MenuList>
          <div style={{ marginTop: "10px" }}>
            <div className="Polieco-Marketplace-heading" style={{ color: "#c4c2c2" }}>
              Polieco v1.0.0
            </div>
            <div className="Polieco-Marketplace-heading" style={{ color: "#c4c2c2" }}>
              Copyright <span style={{ MarginTop: "20px" }}>©</span> 2023
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
      <>
        {/* <div className="menu-Documents-small">
        <MenuList>
          {" "}
          <MenuItem onClick={() => setMenu(true)}>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ textAlign: "center", width: "100%" }}
              component="span"
            >
              <img src={farfallaRight} height={60} alt="igmPiccc" />
            </Typography>
          </MenuItem>
        </MenuList>

        <div className="menuHeight">
          <MenuList style={{}}>
            <MenuItem className="MenuItem">
              <ListItemIcon className="ListItemIcon">
                <DashboardIcon fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem className="MenuItem">
              <ListItemIcon className="ListItemIcon">
                <FileDownloadOutlinedIcon fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem className="MenuItem">
              <ListItemIcon className="ListItemIcon">
                <FileUploadOutlinedIcon fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <br />
            <br />
            <span style={{ backgroundColor: 'rgb(216, 59, 216)', color: 'white' }}>__<FactoryIcon />__ANAGRAFICA AZIENDE</span>
            <br />
            <br />
            <MenuItem className="MenuItem">
              <ListItemIcon className="ListItemIcon">
                <CompareArrowsOutlinedIcon fontSize="small" />
              </ListItemIcon>
            </MenuItem >
            <MenuItem className="MenuItem">
              <ListItemIcon className="ListItemIcon">
                <ShareOutlinedIcon fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem className="MenuItem">
              <ListItemIcon className="ListItemIcon">
                <CreditCardOutlinedIcon fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <br />
            <br />
            <span style={{ height: '60px', backgroundColor: 'rgb(216, 59, 216)', color: 'white' }}>__<LocationOnTwoToneIcon />__LOCALITA'____________</span>
            <br />
            <br />
            <MenuItem className="MenuItem">
              <ListItemIcon className="ListItemIcon">
                <LocationCityIcon fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem className="MenuItem">
              <ListItemIcon className="ListItemIcon">
                <MapsHomeWorkIcon fontSize="small" />
              </ListItemIcon>
            </MenuItem >
            <MenuItem className="MenuItem">
              <ListItemIcon className="ListItemIcon">
                <Diversity3Icon fontSize="small" />
              </ListItemIcon>
            </MenuItem>
          </MenuList>
        </div>
      </div> */}
      </>
    </>
  );
};

export default Sidebar;
