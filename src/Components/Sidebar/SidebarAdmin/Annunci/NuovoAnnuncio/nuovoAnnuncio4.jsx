import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import DropdownMenu from "./Component/DropdownMenu/dropdownMenu";
import SaveButton from "./Component/SaveButton/saveButton";
import DeleteButton from "./Component/DeleteButton/deleteButton";
import "./nuovoAnnuncio.css";




const NuovoAnnuncio4 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <Container className="pt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={3}>
          <Form>
            <Form.Group controlId="Titolo">
              <Form.Label>Titolo</Form.Label>
              <Form.Control type="text" className="w-100" />
            </Form.Group>

            <Form.Group controlId="Descrizione">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control type="text" className="w-100" />
            </Form.Group>

            <Form.Group controlId="Quantita">
              <Form.Label>Quantità</Form.Label>
              <Form.Row>
                <Col xs={8}>
                  <Form.Control type="text" className="w-100" />
                </Col>
                <Col xs={4}>
                  <DropdownMenu />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group controlId="ClasseWaste">
              <Form.Label>Classe waste</Form.Label>
              <DropdownMenu />
            </Form.Group>

            <Form.Group controlId="Scadenza">
              <Form.Label>Scadenza</Form.Label>
              <Form.Control type="date" className="w-100" />
            </Form.Group>

            <Form.Group controlId="Foto">
              <Form.Label>Foto</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleImageChange} className="w-100" />
              {selectedImage && (
                <div>
                  {/* <img src={URL.createObjectURL(selectedImage)} alt="Selected" /> */}
                </div>
              )}
            </Form.Group>

            <Row className="justify-content-center">
              <Col xs={6} className="d-flex">
                <SaveButton />
              </Col>
              <Col xs={6} className="d-flex">
                <DeleteButton />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NuovoAnnuncio4;