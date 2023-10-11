import React, { useState } from 'react';


//*CSS
import "./impDatiExc.css";


const ImpDatiExcel = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setFileName(event.target.files[0] ? event.target.files[0].name : '');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedFile) {
            console.log('File selezionato:', selectedFile);
        }
    };

    return (
        <>
            <div style={{ fontSize: '20px', marginBottom: '10px', marginTop: '5rem' }}>
                <div style={{
                    height: '70px',
                    backgroundColor: '#030947',
                    width: '100%',
                    marginBottom: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 'bold'
                }} className="bold-columns text-center text-white">
                    IMPORTA DATI
                </div>
                <div className="container text-center">
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <label htmlFor="fileInput" className=""
                            style={{ width: '400px', backgroundColor: '#1143d7', color: 'white', marginTop: '10px' }}
                        >Seleziona un file:</label>
                        {fileName ?
                            <span style={{ width: '40%', backgroundColor: '#e0e0e0', padding: '10px', borderRadius: '4px', marginTop: '50px' }}>
                                {fileName}
                            </span>
                            :
                            <input
                                type="file"
                                id="fileInput"
                                onChange={handleFileChange}
                               className='input-selexiona'
                            />
                        }
                        <button type="submit" style={{ width: '400px', backgroundColor: '#1143d7', marginTop: '50px' }}>Invia</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ImpDatiExcel;
