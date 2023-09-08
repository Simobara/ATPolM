import React, { useState, useEffect } from 'react';

//*REACT VALIDATION
import RegioneService from "../../../../../../DataAPI/services/regione.service";
// import axios from "axios";

//* COMPONENTS
import DropdownMenu from "./DropdownMenu/dropdownMenu";


const FilterRegPrvCit = () => {
    const [regioni, setRegioni] = useState([]);

    if (regioni) {
        console.log('Regioni:', regioni);  // Console log per visualizzare i dati
    }


    const [dropdownValue, setDropdownValue] = useState({
        regione: null,
        idRegione: null,
        provincia: null,
        idProvincia: null,
        citta: null,
        idCitta: null
    });

    useEffect(() => {
        const fetchRegioni = async () => {
            try {
                const response = await RegioneService.getRegioni();

                if (Array.isArray(response?.data)) {
                    setRegioni(response?.data);
                    console.log("Dati grezzi delle regioni:", response?.data);  // Controllo aggiuntivo
                } else {
                    console.warn("La risposta dell'API non è un array");
                }
            } catch (error) {
                console.error("Errore nel recuperare le regioni:", error);
            }
        };

        fetchRegioni();
    }, []);



    const handleDropDReg = (e) => {
        setDropdownValue((prev) => ({ ...prev, "regione": e.label, "idRegione": e.value }));
    };

    const handleDropDProv = (e) => {
        setDropdownValue((prev) => ({ ...prev, "provincia": e.label, "idProvincia": e.value, "citta": null, "idCitta": null }));
    };

    const handleDropDCit = (e) => {
        setDropdownValue((prev) => ({ ...prev, "citta": e.label, "idCitta": e.value }));
    };

    return (
        <>
            <div style={{ display: 'inline-flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: '20px' }}>
                    <span style={{ fontSize: '14px' }}>Regione</span>
                    <div style={{ width: "170px", fontSize: "20px" }}>
                        <DropdownMenu
                            propsData={regioni}
                            setPropValue={handleDropDReg}
                            propDropdownValue={dropdownValue?.regione}
                        />
                    </div>
                </div>

                {dropdownValue.regione && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: '20px' }}>
                        <span style={{ fontSize: '14px' }}>Provincia</span>
                        <div style={{ width: "170px", fontSize: "20px" }}>
                            <DropdownMenu
                                // propsData={province}
                                setPropValue={handleDropDProv}
                                propDropdownValue={dropdownValue?.provincia}
                            />
                        </div>
                    </div>
                )}

                {dropdownValue.provincia && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: '20px' }}>
                        <span style={{ fontSize: '14px' }}>Città</span>
                        <div style={{ width: "170px", fontSize: "20px" }}>
                            <DropdownMenu
                                // propsData={citta}
                                setPropValue={handleDropDCit}
                                propDropdownValue={dropdownValue?.citta}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default FilterRegPrvCit;
