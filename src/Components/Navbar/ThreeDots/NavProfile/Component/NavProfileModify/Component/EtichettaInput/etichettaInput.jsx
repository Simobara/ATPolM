import React, { useState, forwardRef } from 'react'

const EtichettaInput = forwardRef(({ label, id, value, propDisable = true }, propRef) => {
    const [isFocused, setIsFocused] = useState(false);

    const labelStyle = isFocused ?
        { backgroundColor: 'blue', color: 'white', padding: '0.5rem', borderRadius: '5px' }
        :
        { color: 'black' };

    return (

        <div className="row mt-3">
            <div className="col-xl-3 col-md-3 col-lg-3 col-sm-4 col-4">
                <label htmlFor={id} style={labelStyle} >
                    {label}
                </label>
            </div>

            <div className="col-xl-9 col-md-9 col-lg-9 col-sm-8 col-8">
                <input
                    ref={propRef}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    type="text"
                    id={id}
                    disabled={propDisable}
                    placeholder={value}
                    value={value}
                    className="form-control form_middle_page custom-container inputProfileDell mt-2"
                    style={{
                        color: propDisable ? 'gray' : 'black',
                        border: propDisable ? '2px solid black' : '2px solid blue',
                    }}
                />
            </div>
        </div >
    )
}
);

export default EtichettaInput;
