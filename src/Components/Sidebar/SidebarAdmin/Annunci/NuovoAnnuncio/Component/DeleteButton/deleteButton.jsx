import React from "react";
import { Button } from "react-bootstrap";

const DeleteButton = () => {
  const handleDelete = () => {
    // Logic to handle deleting data goes here
    console.log("Delete button clicked!");
  };

  return (
    <div className="mr-4 ">
      <Button style={{ fontSize: "11px" }} variant="secondary" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteButton;
