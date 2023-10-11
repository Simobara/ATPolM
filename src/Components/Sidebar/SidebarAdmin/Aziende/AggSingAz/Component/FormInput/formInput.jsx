import React, { useState, useEffect } from 'react';

//* MUI MATERIAL ICONS
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

//* VALIDATIONS
import { required, email } from "./Validations/validations"; //(e' di supporto)

//* CSS
import './formInput.css'




const FormInput = ({ id, label, type, options = [], propOnChange, propValue, propIsFormReset }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [isFocused, setIsFocused] = useState(false);


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



    //* -------------------------RENDER ERROR------------------------------------------

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



    //* ----------------------------RENDER INPUT------------------------------------------

    const renderInput = () => {
        switch (type) {
            case "email":
                return (
                    <input
                        id={id}
                        type={type}
                        value={propValue}
                        className="mt-2 form-control form_middle_pagenuovo custom-container borderField"
                        onChange={handleChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}

                    />
                );
            case "select":
                return (
                    <select
                        id={id}
                        type={type}
                        value={propValue}
                        className="mt-2 form-control form_middle_pagenuovo custom-container borderField"
                        onChange={handleChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}

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
                            id={id}
                            type={showPassword ? 'text' : 'password'}
                            value={propValue}
                            className="mt-2 form-control form_middle_pagenuovo custom-container borderField"
                            style={{ flex: '1', fontSize: '18px', height: '40px' }}
                            onChange={handleChange}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        />
                    </div>
                );
            default:
                return (
                    <input
                        type={type}
                        id={id}
                        value={propValue}
                        className="mt-2 form-control form_middle_pagenuovo custom-container borderField"
                        onChange={handleChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                );
        }
    }


    //* ----------------------------------------- RETURN -------------------------------------------------------
    return (
        // <div className="centered-form">
        <div className="row mt-3 mb-3 ">
            {/* <div className={`col-xl-2 col-md-2 col-lg-2 col-sm-6 col-6 text-label-style-azinde ${isFocused ? "text-label-Focus" : "text-label-NoFocus"}`}> */}
            <div className={`col-xl-2 col-md-2 col-lg-2 col-sm-6 col-6 text-label-style-azinde`}>
                <label htmlFor={id}>
                    {label}
                </label>
            </div>
            <div className="col-xl-8 col-md-8 col-lg-8 col-sm-12 col-12 shift-right">
                {renderInput()}
                {renderError()}
            </div>
        </div>
        // </div>
    );
}

export default FormInput;
