import React, { useState } from 'react';
import "./forms.css";

const NumberSpinnerForm = () => {
    const [value, setValue] = useState(0);

    const handleKeyDown = (event) => {
        if (event.keyCode === 38) { // Freccia verso l'alto
            setValue(value + 1);
        } else if (event.keyCode === 40) { // Freccia verso il basso
            setValue(value - 1);
        }
    };

    const incrementValue = () => {
        setValue(value + 1);
    };

    const decrementValue = () => {
        setValue(value - 1);
    };

    return (
        <div className="spinner_menu">
            <button onClick={incrementValue}>&#9650;</button>
            <input type="text" value={value} readOnly onKeyDown={handleKeyDown} />
            <button onClick={decrementValue}>&#9660;</button>
        </div>
    );
};

export default NumberSpinnerForm;
