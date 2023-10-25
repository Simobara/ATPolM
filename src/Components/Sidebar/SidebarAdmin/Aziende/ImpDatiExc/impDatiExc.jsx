import React, { useState } from 'react';
import * as XLSX from 'xlsx';

// Assicurati che il percorso sia corretto!
import AziendaService from "../../../../../DataAPI/services/azienda.service";

//*CSS
import "./impDatiExc.css";

const ImpDatiExcel = () => {
    // eslint-disable-next-line 
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState('');

    const { addAziendaFromExcel } = AziendaService();


    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setFileName(event.target.files[0] ? event.target.files[0].name : '');
    };

    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = XLSX.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json(worksheet);
                console.log(json)
                addAziendaFromExcel(json); // Supponendo che sia una funzione importata  
            };
            reader.readAsArrayBuffer(e.target.file[0]);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        readUploadFile(event);
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
                        <button
                            type="submit"
                            style={{ width: '400px', backgroundColor: '#1143d7', marginTop: '50px' }}>Invia</button>
                    </form>
                </div>
            </div >
        </>
    );
}

export default ImpDatiExcel;
