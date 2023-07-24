import React from 'react';
import { Button } from 'react-bootstrap';

const SaveButton = () => {
    const handleSave = () => {
        // Logic to handle saving data goes here
        console.log('Save button clicked!');
    };

    return (
        <div className="mr-4">
            <Button onClick={handleSave}>
                <i className={"fa fa-save mr-2"} />
                Save
            </Button>
        </div>
    );
};

export default SaveButton;