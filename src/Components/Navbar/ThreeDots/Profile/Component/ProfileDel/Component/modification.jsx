import React from "react";
import { Button } from "react-bootstrap";

const ModificationButton = () => {
  const handleSave = () => {
    // Logic to handle saving data goes here
    console.log("Save button clicked!");
  };

  return (
    <div className="mr-4">
      <Button style={{ fontSize: "14px", background: "#3934d2", borderRadius: "5px" }} onClick={handleSave}>
        Modifica i dati
      </Button>
    </div>
  );
};

export default ModificationButton;
