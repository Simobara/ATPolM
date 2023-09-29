import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

/* CSS */
import "./navbar.css";
import mainlogo from "../../Assets/Images/main.png";
import Loader from "../Global/Loader/loader";

/* MUI */
import Box from "@mui/material/Box";
// import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
// import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
// import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
// import Logout from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonIcon from "@mui/icons-material/Person";
// import AccessibilityIcon from "@mui/icons-material/Accessibility";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import Fade from '@mui/material/Fade';


/* COMPONENTS */
import NavigationItem from "./NavigationItem/navigationItem";
import Sidebar from "../Sidebar/sidebar";
import NotFoundPage from "../Global/NotFoundPage/notFoundPage";

import AggSingAz from "../Sidebar/SidebarAdmin/Aziende/AggSingAz/aggSingAz";
import ImpDatiExc from "../Sidebar/SidebarAdmin/Aziende/ImpDatiExc/impDatiExc";
// import Dati from "../Sidebar/SidebarHome/UtentiEsterni/Dati/dati";
// import IntVersAnn from "../Sidebar/SidebarHome/UtentiEsterni/IntVersAnn/intVersAnn";
import NuovoAnnuncio from "../Sidebar/SidebarAdmin/Annunci/NuovoAnnuncio/nuovoAnnuncio";
import IMieiAnnunci from "../Sidebar/SidebarAdmin/Annunci/IMieiAnnunci/iMieiAnnunci";
import Materiali from "../Sidebar/SidebarAdmin/Annunci/Materiali/materiali";
import UnitaDiMisura from "../Sidebar/SidebarAdmin/Annunci/UnitaDiMisura/unitaDiMisura";

import Partec from "../Sidebar/SidebarBandi/partec";
import PartecBando from "../Sidebar/SidebarBandi/PartecBando/partecBando";
import LeMiePartec from "../Sidebar/SidebarBandi/LeMiePartec/leMiePartec";

// import Ruoli from "./Materiali/Ruoli";
// import Categorie from "../Sidebar/SidebarHome/AnagrAz/Categorie/categorie";
// import Associazioni from "../Sidebar/SidebarHome/AnagrAz/Associazioni/associazioni";
// import FormeGiuridiche from "../Sidebar/SidebarHome/AnagrAz/FormeGiuridiche/formeGiuridiche";
// import ProfileNav from "./Profile/ProfileNav";
// import ProfileDel from "./Profile/Component/ProfileDel/ProfileDel";
// import AziendeHome from "./Azindia/Aziende";

const SHome = React.lazy(() => import("../Sidebar/SidebarAdmin/SHome/home"));

const Ruoli = React.lazy(() => import("./ThreeDots/Ruoli/Ruoli"));
const AziendeHome = React.lazy(() => import("./ThreeDots/Aziende/Aziende"));
const ProfileNav = React.lazy(() => import("./ThreeDots/Profile/ProfileNav"));
const ProfileDel = React.lazy(() => import("./ThreeDots/Profile/Component/ProfileDel/ProfileDel"));

const Dati = React.lazy(() => import("../Sidebar/SidebarAdmin/UtentiEsterni/Dati/dati"));
const IntVersAnn = React.lazy(() => import("../Sidebar/SidebarAdmin/UtentiEsterni/IntVersAnn/intVersAnn"));

// const NuovoAnnuncio = React.lazy(() => import("../Sidebar/SidebarHome/Annunci/NuovoAnnuncio/nuovoAnnuncio"));
// const IMieiAnnunci = React.lazy(() => import("../Sidebar/SidebarHome/Annunci/IMieiAnnunci/iMieiAnnunci"));

const Categorie = React.lazy(() => import("../Sidebar/SidebarAdmin/AnagrAz/Categorie/categorie"));
const Associazioni = React.lazy(() => import("../Sidebar/SidebarAdmin/AnagrAz/Associazioni/associazioni"));
const FormeGiuridiche = React.lazy(() => import("../Sidebar/SidebarAdmin/AnagrAz/FormeGiuridiche/formeGiuridiche"));

const Regioni = React.lazy(() => import("../Sidebar/SidebarAdmin/AnagrAz/Localita/Regioni/regioni"));
const Province = React.lazy(() => import("../Sidebar/SidebarAdmin/AnagrAz/Localita/Province/province"));
const Citta = React.lazy(() => import("../Sidebar/SidebarAdmin/AnagrAz/Localita/Citta/citta"));



const renderRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<Loader />}> {" "} <SHome />{" "} </Suspense>} />

      <Route path="/aziende/AggSingAz" element={<AggSingAz />} />
      <Route path="/aziende/impDatiExc" element={<ImpDatiExc />} />

      <Route path="/utEsterni/dati" element={<Suspense fallback={<Loader />}>{" "} <Dati />{" "}</Suspense>} />

      <Route path="/aziende" element={<Suspense fallback={<Loader />}> {" "}<AziendeHome />{" "} </Suspense>} />
      <Route path="/ruoli" element={<Suspense fallback={<Loader />}> {" "}<Ruoli />{" "} </Suspense>} />
      <Route path="/profile/del" element={<Suspense fallback={<Loader />}> {" "} <ProfileDel />{" "}</Suspense>} />
      <Route path="/profile" element={<Suspense fallback={<Loader />}> {" "}<ProfileNav />{" "}</Suspense>} />

      <Route path="/utEsterni/intVersAnn" element={<Suspense fallback={<Loader />}>{" "}<IntVersAnn />{" "} </Suspense>} />

      {/* <Route path="/annunci/nuovoAnnuncio" element={<Suspense fallback={<Loader />}>{" "}<NuovoAnnuncio />{" "}</Suspense>} /> */}
      {/* <Route path="/annunci/iMieiAnnunci" element={<Suspense fallback={<Loader />}>{" "}<IMieiAnnunci />{" "}</Suspense>} /> */}
      <Route path="/annunci/nuovoAnnuncio" element={<NuovoAnnuncio />} />
      <Route path="/annunci/iMieiAnnunci" element={<IMieiAnnunci />} />

      <Route path="/annunci/materiali" element={<Materiali />} />
      <Route path="/annunci/unitaDiMisura" element={<UnitaDiMisura />} />

      {/* <Route path="/anagrAz/categorie" element={<Categorie />} />
      <Route path="/anagrAz/associazioni" element={<Associazioni />} />
      <Route path="/anagrAz/formeGiuridiche" element={<FormeGiuridiche />} /> */}
      <Route path="/anagrAz/categorie" element={<Suspense fallback={<Loader />}>{" "}<Categorie />{" "}</Suspense>} />
      <Route path="/anagrAz/associazioni" element={<Suspense fallback={<Loader />}> {" "} <Associazioni />{" "} </Suspense>} />
      <Route path="/anagrAz/formeGiuridiche" element={<Suspense fallback={<Loader />}> {" "} <FormeGiuridiche />{" "} </Suspense>} />

      <Route path="/anagrAz/Localita/regioni" element={<Suspense fallback={<Loader />}> {" "} <Regioni />{" "} </Suspense>} />
      <Route path="/anagrAz/Localita/province" element={<Suspense fallback={<Loader />}> {" "} <Province />{" "} </Suspense>} />
      <Route path="/anagrAz/Localita/citta" element={<Suspense fallback={<Loader />}> {" "} <Citta />{" "} </Suspense>} />

      <Route path="/partec" element={<Partec />} />
      <Route path="/partecBando" element={<PartecBando />} />
      <Route path="/leMiePartec" element={<LeMiePartec />} />

      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

const Navbar = ({ emailProp }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // eslint-disable-next-line
  const [activeLink, setActiveLink] = useState("/home");
  const navigate = useNavigate();
  // const onSwitchNavItem = (link = "/home") => {
  //   setActiveLink(link);
  // };

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("isFirstVisit");

    if (!isFirstVisit) {
      // Redirect to /home on first visit
      localStorage.setItem("isFirstVisit", "true");
      navigate("/home");
    }
  }, [navigate]);

  const handlerUser = () => {
    emailProp();
    localStorage.removeItem("signUp");
  };
  console.log("==>", handlerUser);



  return (
    <>
      <div className="navbar-mainbg-blue fixed-top smallScreen">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="navbar-brand navbar-logo">
            <img src={mainlogo} height={23} alt="igmPic" />
            <div className="nav-Polieco-Marketplac" style={{ paddingTop: "2px" }}>
              Polieco Marketplace
            </div>
          </div>
          <div id="navbarSupportedContent" style={{ display: "flex", alignItems: "center" }}>
            <div className="" style={{ display: "flex", color: "#dc73ff", fontWeight: "600", paddingTop: "4px" }}>
              <div className="NavigationItem-nav" style={{ marginTop: "7px" }}>
                <NavigationItem
                  navName={localStorage.getItem("email")}
                  activeLink={activeLink}
                  iconName="fa fa-user fa-lg"
                  exactTo="/#"
                  clicked={() => { }}
                  style={{ pointerEvents: "none", userSelect: "none" }}
                  className="customClassName"
                />
              </div>
              <Box sx={{ display: "flex", alignItems: "center", textAlign: "center", marginTop: "3px", fontSize: "38px" }}>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small" sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <MoreVertIcon style={{ color: "#fff", fontSize: "22px" }} />
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                TransitionComponent={Fade}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 12,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem sx={{ fontSize: "14px" }} onClick={() => navigate("/profile")}>
                  <ListItemIcon> <Settings className="menuNavDropdown" /> </ListItemIcon>
                  <span className="menuWidth"> Profile</span>
                </MenuItem>
                <MenuItem sx={{ fontSize: "14px" }} onClick={() => navigate("/aziende")}>
                  <ListItemIcon> <PersonIcon className="menuNavDropdown" /> </ListItemIcon>
                  Aziende
                </MenuItem>
                <MenuItem sx={{ fontSize: "14px" }} onClick={() => navigate("/ruoli")}>
                  <ListItemIcon> <LocalPoliceIcon className="menuNavDropdown" /> </ListItemIcon>
                  Ruoli
                </MenuItem>
                <MenuItem sx={{ fontSize: "14px" }} activeLink={activeLink} onClick={() => handlerUser()}>
                  <ListItemIcon> <PowerSettingsNewIcon className="menuNavDropdown" /> </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {/* <div style={{ marginTop: "64px" }}> */}
        <Sidebar />
        {/* </div> */}
        <div className="overflowX-hidden" style={{ fontSize: "1.9rem", width: "100%", height: "100vh", marginTop: "-5px", overflow: "auto" }}>
          {renderRoutes()}
        </div>
      </div>
    </>
  );
};
export default Navbar;
