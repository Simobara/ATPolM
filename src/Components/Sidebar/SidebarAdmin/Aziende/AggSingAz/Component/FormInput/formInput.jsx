import React, { useState, useEffect } from 'react';

//* MUI MATERIAL ICONS
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

//* VALIDATIONS
import { required, email } from "./Validations/validations"; //(e' di supporto)






const FormInput = ({ id, label, type, options = [], propOnChange, propValue, propIsFormReset }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    };



    const handleValidation = (value) => {
        if (type === 'email') {
            setError(email(value) || required(value)); //required => validation.jsx
        } else {
            setError(required(value));//required => validation.jsx
        }
    }

    useEffect(() => {
        if (propIsFormReset) {
            setError(null);
        }
    }, [propIsFormReset]);

    useEffect(() => {
        if (propValue) handleValidation(propValue);
        // eslint-disable-next-line 
    }, [propValue]);

    const handleChange = (e) => {
        propOnChange(e);
        handleValidation(e.target.value);
    }

    const renderError = () => {
        if (error) {
            // Personalizza lo stile del messaggio di errore qui
            const errorStyle = {
                color: 'red',           // colore del testo
                fontSize: '24px',       // dimensione del font
                // height: '12px',         // altezza
                lineHeight: '12px',     // allinea il testo verticalmente al centro
                padding: '0',           // rimuove il padding
                marginTop: '5px',        // aggiunge un piccolo margine sopra
                marginBottom: '5px',
            };
            return <div style={errorStyle} role="alert">{error}</div>;
        }
        return null;
    };





    const renderInput = () => {
        switch (type) {
            case "email":
                return (
                    <input
                        type={type}
                        id={id}
                        className="mt-2 form-control form_middle_pagenuovo custom-container"
                        onChange={handleChange}
                        value={propValue}
                    />
                );
            case "select":
                return (
                    <select
                        id={id}
                        className="mt-2 form-control form_middle_pagenuovo custom-container"
                        onChange={handleChange}
                        value={propValue}
                    >
                        <option value="" disabled>Seleziona</option>
                        {options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                );
            case "password":
                return (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span onClick={handleTogglePasswordVisibility} style={{ marginRight: '10px' }}>
                            {showPassword ? <VisibilityOff fontSize="large" /> : <Visibility fontSize="large" />}
                        </span>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id={id}
                            className="mt-2 form-control form_middle_pagenuovo custom-container"
                            onChange={handleChange}
                            value={propValue}
                            style={{ flex: '1', fontSize: '18px', height: '40px' }}
                        // Assicura che l'input occupi tutto lo spazio disponibile
                        />
                    </div>
                );
            default:
                return (
                    <input
                        type={type}
                        id={id}
                        className="mt-2 form-control form_middle_pagenuovo custom-container"
                        onChange={handleChange}
                        value={propValue}
                    />
                );
        }
    }

    return (
        <div className="row mt-3 mb-3">
            <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor={id} className="word-label">
                    {label}
                </label>
            </div>
            <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                {renderInput()}
                {renderError()}
            </div>
        </div>
    );
}

export default FormInput;
