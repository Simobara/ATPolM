import React, { useState } from 'react';
import "./formsPageTwo.css";
import SaveButton from '../AggSingAz/Component/saveButton';
import DeleteButton from '../AggSingAz/Component/deleteButton';


const FormsPageTwo = () => {
    // eslint-disable-next-line 
    const [selectedImageTwo, setSelectedImageTwo] = useState(null);

    const handleImageChangeTwo = (event) => {
        const file = event.target.files[0];
        setSelectedImageTwo(file);
    };
    return (
        <>
            <div className="container bg-info">
                <div className="row col-12">
                    <div className="col-md-12 mt-4 d-flex align-items-center position-relative" >
                        <label htmlFor="input1">Ragione Sociale </label>
                        <input type="text" id="input1" className="form-control form_middle_page" />
                    </div>
                    <div className="col-md-12 mt-4 d-flex align-items-center position-relative">
                        <label htmlFor="input2">Indirizzo</label>
                        <input type="text" id="input2" className="form-control form_middle_page" />
                    </div>
                    <div className="col-md-12 mt-4 d-flex align-items-center position-relative">
                        <label htmlFor="input2">Partita Iva</label>
                        <input type="text" id="input2" className="form-control form_middle_page" />
                    </div>
                    <div className="col-md-12 mt-4 d-flex align-items-center position-relative">
                        <label htmlFor="input2">Telefono</label>
                        <input type="text" id="input2" className="form-control form_middle_page" />
                    </div>
                    <div className="col-md-12 mt-4 d-flex align-items-center position-relative">
                        <label htmlFor="input2">Email</label>
                        <input type="text" id="input2" className="form-control form_middle_page" />
                    </div>
                    <div className="col-md-12 mt-4 d-flex align-items-center position-relative">
                        <label htmlFor="input2">Ruoli</label>
                        <input type="text" id="input2" className="form-control form_middle_page" />
                    </div>
                    <div className="col-md-12 mt-4 d-flex align-items-center position-relative">
                        <label htmlFor="input2">Password</label>
                        <input type="password" id="input2" className="form-control form_middle_page" />
                    </div>
                    <div className="col-md-12 mt-4 d-flex align-items-center position-relative">
                        <label htmlFor="input2">Conferma Password</label>
                        <input type="password" id="input2" className="form-control form_middle_page" />
                    </div>
                    <div className="col-md-12 mt-4 d-flex align-items-center position-relative ">
                        <label htmlFor="input5">Foto</label>
                        <input type="file" onChange={handleImageChangeTwo} accept="image/*" className="scegli_menu" />
                        {setSelectedImageTwo && (
                            <div>
                                <p> </p>
                                {/* <img src={URL.createObjectURL(selectedImageTwo)} alt="Selected" /> */}
                            </div>
                        )}
                    </div>
                </div >
                <div className="d-flex justify-content-end  form_middle_page_btn" style={{ marginRight: "10%" }}>
                    <SaveButton />
                    <DeleteButton />
                </div>
            </div >
        </>
    );
}

export default FormsPageTwo
