import React from "react";
import { Button } from "react-bootstrap";

const SaveButton = (isDisabled, handleAdd = () => { }) => {


  const handleSave = () => {
    // Logic to handle saving data goes here
    console.log("Save button clicked!");
    console.log(typeof handleAdd);
    if (typeof handleAdd === 'function') {
      handleAdd();
    }
  };

  return (
    <div className="mr-4">
      <Button style={{ fontSize: "11px" }} onClick={handleSave} disabled={!isDisabled}>
        <i className={"fa fa-save mr-2"} />
        Save
      </Button>
    </div>
  );
};

export default SaveButton;
