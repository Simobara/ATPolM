import React from 'react'

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Questo campo è obbligatorio!
            </div>
        );
    }
};

const email = value => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                Questo non è un indirizzo email valido!
            </div>
        );
    }
};

export { required, email };
