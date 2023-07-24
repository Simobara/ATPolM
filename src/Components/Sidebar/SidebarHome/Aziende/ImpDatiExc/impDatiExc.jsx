import React, { useState } from 'react';

const ImpDatiExcel = () => {
    const [selectedFile, setSelectedFile] = useState('null');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Esegui le operazioni desiderate con il file selezionato
        if (selectedFile) {
            console.log('File selezionato:', selectedFile);
            // Esegui il caricamento del file o altre operazioni
        }
    };

    return (
        <>
            <div className="container text-center " style={{ marginTop: "5rem" }}>
                <form onSubmit={handleSubmit} >
                    <label htmlFor="fileInput" style={{ width: '40%' }}>Seleziona un file:</label>
                    <input
                        type="file"
                        id="fileInput"
                        onChange={handleFileChange}
                    />
                    <button type="submit" style={{ width: '40%' }}>Invia</button>
                </form >
            </div>
        </>
    );
}

export default ImpDatiExcel;