import React from 'react';
import "./contactUsFour.css";

const ContactUsFour = () => {
    return (
        <>
            <div className="container body_contact">
                <div className="row">
                    <div className="col-md-6">
                        <div className="transparent-box">
                            <div className="contact-heading">Contact Us</div>
                            <div className="contact-info">123 Main St</div>
                            <div className="contact-info">Anytown,___</div>
                            <div className="contact-info">Phone: (123) 456-7890</div>
                            <div className="contact-info">Email: email@gmail.com</div>
                            <div className="response-box">
                                <form>
                                    <div className="form-group bg-primary text-white font-weight-bold text-lgd">
                                        <label htmlFor="name">Name:</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter your name..." required />
                                    </div>
                                    <div className="form-group bg-primary text-white font-weight-bold text-xl">
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter your email..." required />
                                    </div>
                                    <div className="form-group bg-primary text-white font-weight-bold text-xl">
                                        <label htmlFor="message">Message:</label>
                                        <textarea className="form-control noResize" id="message" placeholder="Enter your message..." rows="5" required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="transparent-box">
                            <div className="about-heading">About Us</div>
                            <div className="about-text">"Programming is not about typing, its about thinking."
                                Passionate 3rd year CS and software engineering student with a commitment to and experience of developing innovative and creative software solutions. I have a passion for coding and a relentless drive for continuous improvement within coding world and in all of my endeavours.
                                <br />
                                | 3rd year B.E Student |.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUsFour
