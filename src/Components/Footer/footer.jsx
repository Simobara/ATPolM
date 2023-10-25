import React from "react";
import "./footer.css";  // Import the CSS file
import farfalla from "../../Assets/Images/farfalla.jpeg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// eslint-disable-next-line 
import CloseIcon from "@mui/icons-material/Close";
// eslint-disable-next-line 
import AddIcon from "@mui/icons-material/Add";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <Row>
          <Col md={1} className="d-md-block d-none"><img src={farfalla} height={100} alt="igmPicc" /></Col>
          <Col md={11}>
            <h5 className="d-md-block d-none">Marketplace</h5>
            <p>ll portale Marketplace consente di pubblicare annunci per vendere sui territorio nazionate materiali plastici, garantendo ta pubblicita di chi propone e la riservatezza di chi acquista.</p>
            <p>ll Consorzio polieco supporta cosi i propri associati e iscritti a regol are il flusso di materiali plastici.</p>
          </Col>
        </Row>
      </div>
    </>
  );
};


export default Footer;
