import React, { useState } from 'react';
import "./formsPage.css";
import DropdownMenu from "./dropdownMenu";

const FormsPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };
    return (
        <>
            <div className="container bg-success">
                <div className="row">
                    <div className="col-md-12 mt-4 d-flex align-items-center position-relative" >
                        <label htmlFor="input1">Titolo </label>
                        <input type="text" id="input1" className="form-control form_middle_page" />
                    </div>
                    <div className="col-md-12 mt-4 d-flex align-items-center position-relative">
                        <label htmlFor="input2">Descrizione</label>
                        <input type="text" id="input2" className="form-control form_middle_page" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-4 d-flex align-items-center position-relative">
                        <label htmlFor="input3">Quantita'</label>
                        <input type="number" id="input3" className="form-control quantity_menu" />
                        <div className="dropdown_menu_2">
                            <DropdownMenu />
                        </div>
                    </div>

                    <div className="col-md-12 mt-4 d-flex align-items-center position-relative">
                        <label htmlFor="input4">Classe waste</label>
                        <DropdownMenu />
                        {/* <Dropdown className="dropdown_menu">
                        <Dropdown.Toggle variant="bg-white" id="dropdown-menu" className="dropdown-toggle-no-text" >

                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-wide" >
                            <Dropdown.Item href="#action1">Action 1</Dropdown.Item>
                            <Dropdown.Item href="#action2">Action 2</Dropdown.Item>
                            <Dropdown.Item href="#action3">Action 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                    </div>
                </div >
                <div className="row">
                    <div className="col-md-12 mt-4 d-flex align-items-center position-relative ">
                        <label htmlFor="input5">Foto</label>
                        <input type="file" onChange={handleImageChange} accept="image/*" className="scegli_menu" />
                        {selectedImage && (
                            <div>
                                {/* <p> </p>
                            <img src={URL.createObjectURL(selectedImage)} alt="Selected" /> */}
                            </div>
                        )}
                    </div>
                    <div className="col-md-12 mt-4 d-flex align-items-center position-relative">
                        <label htmlFor="input6">Scadenza</label>
                        <input type="date" id="input6" className="form-control form_middle_page" />
                    </div>
                </div>
            </div >
        </>
    );
}

export default FormsPage;
