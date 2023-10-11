import React, { useState, useEffect } from 'react';

//*REACT VALIDATION
import RegioneService from "../../../../../../DataAPI/services/regione.service";
import ProvinciaService from "../../../../../../DataAPI/services/provincia.service";
import CittaService from "../../../../../../DataAPI/services/citta.service";

//* COMPONENTS
import DropdownMenu from "./DropdownMenu/dropdownMenu";
import { provinceNomiCompleti, provinceSigle, provinciaRegione } from '../../../AnagrAz/Localita/Province/ProvSigleNomi/provSigleNomi';




const FilterRegPrvCit = ({ propFilterRowData, propFilterDataCitta, propFilterRegioniData,propReset }) => {
    const [regioni, setRegioni] = useState([]);
    // eslint-disable-next-line
    const [allProvincia, setAllProvincia] = useState([]);
    const [filteredProvincia, setFilteredProvincia] = useState([]);
    const [allCitta, setAllCitta] = useState([]);
    const [filteredCitta, setFilteredCitta] = useState([]);
    const [dropdownValue, setDropdownValue] = useState({
        regione: null,
        idRegione: null,
        provincia: null,
        idProvincia: null,
        citta: null,
        idCitta: null
    });





    const { getRegioni } = RegioneService();
    const { getProvince } = ProvinciaService();
    const { getCitta } = CittaService();


    const fetchRegioni = async () => {
        try {
            const response = await getRegioni();
            setRegioni(response?.map((data) => ({
                id: data.id,
                label: data.descrizione.toUpperCase(),
                value: data.id,
            })));
            // Handle the response here
        } catch (error) {
            console.error('Error while fetching regioni:', error);
        }
    };


    const fetchProvincia = async () => {
        try {
            const response = await getProvince();
            console.log(response);
            setAllProvincia(response?.map((data) => ({
                id: data.id,
                label: data.codice,
                value: data.id,
                regioni_id: data.id_regione
            })));
            // Handle the response here
        } catch (error) {
            console.error('Error while fetching provincia:', error);
        }
    };





    const fetchCitta = async () => {
        try {
            const response = await getCitta();
            console.log(response);
            setAllCitta(response?.map((data) => ({
                id: data.id,
                label: data.descrizione,
                value: data.id,
                province_id: data.id_provincia,
                provinciaCodice: data.provinciaCodice
            })));
            // Handle the response here
        } catch (error) {
            console.error('Error while fetching citta:', error);
        }
    };





    const resetFilter = () => {
        setDropdownValue((prev) => ({
            regione: null,
            idRegione: null,
            provincia: null,
            idProvincia: null,
            citta: null,
            idCitta: null
        }));
        propFilterRowData({
            regione: null,
            idRegione: null,
            provincia: null,
            idProvincia: null,
            citta: null,
            idCitta: null
        })
        propReset()
    }

    useEffect(() => {
        fetchRegioni();
        fetchProvincia();
        fetchCitta();
        // eslint-disable-next-line
    }, []);




    const capitalizeString = (str) => {
        if (str.length === 0) {
            return str;
        } return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    const findKeysByValue = (obj, value) => {
        const keys = [];
        for (const key in obj) {
            if (obj[key] === value) {
                keys.push(key);
            }
        }
        return keys;
    };






    const handleDropdReg = (e) => {
        if (dropdownValue?.regione && e.label !== dropdownValue?.regione) {
            setDropdownValue((prev) => ({
                ...prev,
                "regione": e.label,
                "idRegione": e.value,
                "provincia": null,
                "idProvincia": null,
                "citta": null,
                "idCitta": null
            }));
        }
        else {
            setDropdownValue((prev) => ({
                ...prev,
                "regione": e.label,
                "idRegione": e.value
            }));
        }

        // let filterProvince = allProvincia.filter(prov => prov.regioni_id === e.value);
        // setFilteredProvincia(filterProvince)
        propFilterRowData({ ...dropdownValue, "regione": e.label, "idRegione": e.value })
        const regionToFind = capitalizeString(e.label);
        const keysForRegion = findKeysByValue(provinciaRegione, regionToFind);
        console.log(keysForRegion, "keysForRegion1")
        const indices = keysForRegion.map(key => provinceNomiCompleti.findIndex(item => item === key));
        console.log(indices, "keysForRegion2")
        const values = indices.map(index => provinceSigle[index]);
        console.log(values, "keysForRegion3")
        setFilteredProvincia(values?.map((data, index) => ({
            id: index,
            label: data,
            value: data,
        })));

        propFilterRegioniData(values)
        console.log('Values corresponding to indices:', values);
    };

    const handleDropdProv = (e) => {
        if (dropdownValue?.provincia && e.label !== dropdownValue?.provincia) {
            setDropdownValue((prev) => ({
                ...prev,
                "provincia": e.label,
                "idProvincia": e.value,
                "citta": null,
                "idCitta": null
            }));
        }
        else {
            setDropdownValue((prev) => ({ ...prev, "provincia": e.label, "idProvincia": e.value }));
        }
        console.log(e.value, "keysForRegion4")
        let filterCitta = allCitta.filter(prov => prov.provinciaCodice.toUpperCase() === e.value.toUpperCase());
        setFilteredCitta(filterCitta)
        propFilterRowData({ ...dropdownValue, "provincia": e.label, "idProvincia": e.value })
    };

    const handleDropDCit = (e) => {
        console.log(e.value, "e.value")
        setDropdownValue((prev) => ({ ...prev, "citta": e.label, "idCitta": e.value }));
        propFilterDataCitta({ ...dropdownValue, "citta": e.label, "idCitta": e.value })
    };
    console.log(dropdownValue, "dropdownValue")



    //**************************************************************************RETURN */
    return (
        console.log(dropdownValue),
        <>
            <div style={{ display: 'inline-flex', flexDirection: 'row', alignItems: 'center',flexWrap:"wrap" }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: '20px' }}>
                    <span style={{ fontSize: '15px',fontWeight:"700" }}>Regione</span>
                    <div style={{ width: "170px", fontSize: "20px" }}>
                        <DropdownMenu
                            propsData={regioni}
                            propSetValue={handleDropdReg}
                            propDropdownValue={dropdownValue?.regione}

                        />
                    </div>
                </div>

                {dropdownValue.regione && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: '20px' }}>
                        <span style={{ fontSize: '15px' ,fontWeight:"700"}}>Provincia</span>
                        <div style={{ width: "170px", fontSize: "20px" }}>
                            <DropdownMenu
                                propsData={filteredProvincia}
                                propSetValue={handleDropdProv}
                                propDropdownValue={dropdownValue?.provincia}


                            />
                        </div>
                    </div>
                )}

                {dropdownValue.provincia && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: '20px' }}>
                        <span style={{ fontSize: '15px',fontWeight:"700" }}>Città</span>
                        <div style={{ width: "170px", fontSize: "20px" }}>
                            <DropdownMenu
                                propsData={filteredCitta}
                                propSetValue={handleDropDCit}
                                propDropdownValue={dropdownValue?.citta}
                            />
                        </div>
                    </div>
                )}

                {dropdownValue.regione && (
                    <button className='reset-btn mt-4' style={{ fontSize: 14, height: 30, width: 50 }} onClick={() => resetFilter()}>Reset</button>
                )}
            </div>
        </>
    );
}

export default FilterRegPrvCit;
