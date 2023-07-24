import React, { useState } from 'react';

const ValidationEmail = ({ email, setEmail, isValid, setIsValid }) => {
    const handleChange = (e) => {
        setEmail(e.target.value);
        setIsValid(true); // Reimposta lo stato di validità ad ogni cambiamento dell'email
    };

    const validateEmail = (email) => {
        // Logica di validazione dell'email
        // In questo esempio, viene utilizzata una semplice espressione regolare per la validazione
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleBlur = () => {
        setIsValid(validateEmail(email));
    };

    return (
        <div>
            <label>
                Email:
                <input
                    type="text"
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={!isValid ? 'invalid' : ''}
                />
            </label>
            {!isValid && <p className="error-message">Email non valida!</p>}
        </div>
    );
};