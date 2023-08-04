import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBCardFooter, MDBCollapse } from "mdb-react-ui-kit";

import ForumIcon from "@mui/icons-material/Forum";

const Chat = () => {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);
  return (
    <div>
      <MDBContainer fluid className="py-5">
        <MDBBtn
          style={{
            width: "80px",
            position: "static",
            zIndex: "9999999",
            bottom: "8rem",
            right: "45rem",
            background: "linear-gradient(to right, #7c1f64, #552257)",
          }}
          onClick={toggleShow}
          size="md"
          block
        >
          <div className="l-flex justify-content-center align-items-center" style={{ cursor: "pointer" }}>
            <span style={{ fontSize: "15px" }}>Chat</span>
            { <MDBIcon fas icon="chevron-up" /> }
          </div>
        </MDBBtn>
        <MDBRow
          className="l-flex justify-content-end"
          style={{
           width: "100%",
            position : "center",
            bottom: "60px",
            right: "15px",
            zIndex: "9999999",
          }}
        >
          <MDBCol md="100" lg="100" xl="100">
            <MDBCollapse show={showShow}>
              <MDBCard id="chat4">
                <div
                  // suppressScrollX={false}
                  style={{
                      overflow: "scroll",
                    position: "relative",
                    height: "250px",
                     lenght: "1000px"
                  }}
                >
                  <div
                    style={{
                      borderTopLeftRadius: "6px",
                      borderTopRightRadius: "6px",
                      height: "55px",
                      background: "linear-gradient(to right, #7c1f64, #552257)",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                    }} 
                  >
                    <div
                      
                    >
                      <div style={{ display: "flex" }}>
                        { <img
                          img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                          alt="avatar 1"
                          style={{ width: "30px", height: "30px" }}
                        /> }
                        <div
                          style={{
                            color: "#fff",
                            marginLeft: "20px",
                            marginTop: "3px", 
                          }}
                        >
                          <ForumIcon />
                        </div>
                      </div>
                      <div
                        style={{/*
                          color: "#fff",
                          fontSize: "60px",
                          fontWeight: "300",
                          cursor: "pointer",*/
                        }}
                        onClick={toggleShow}
                      >
                        -
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                   /*   marginBottom: "45px",
                      backgroundColor: "#f5f5f5",
                      height: "50px"
                      /* position: "relative",*/                     
                    }}
                  >
                    <div
                     style={{
                        /*backgroundColor: "#e0e0e0",
                        height: "60px",
                        width: "60px",
                        borderRadius: "50%",
                        position: "absolute",
                        /*top: "32%",
                        left: "20px",*/ 
                        /*display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",*/
                     }}
                    >
                    </div>
                  </div>
                  <MDBCardBody>
                    <div /*className="d-flex flex-row justify-content-start"*/>
                     
                      <div>
                        <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: "#f5f6f7" }}>
                          Hi
                        </p>
                        <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: "#f5f6f7" }}>
                          How are you ...???
                        </p>
                        <p className="small p-2 ms-3 mb-5 rounded-3" style={{ backgroundColor: "#f5f6f7" }}>
                          What are you doing tomorrow?an we come up a bar?
                        </p>
                        <p className="small ms-3 mb-3S rounded-3 text-muted">23:58</p>
                      </div>
                    </div>

                    <div className="divider d-flex align-items-center mb-4">
                      <p className="text-center mx-3 mb-0" style={{ color: "#a2aab7" }}>
                        Today
                      </p>
                    </div>

                    <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                      <div>
                        <p
                          className="small p-2 me-3 mb-1 text-white rounded-3"
                          style={{
                            background: "linear-gradient(to right, #7c1f64, #552257)",
                          }}
                        >
                          Hiii, I'm good.
                        </p>
                        <p
                          className="small p-2 me-3 mb-1 text-white rounded-3"
                          style={{
                            background: "linear-gradient(to right, #7c1f64, #552257)",
                          }}
                        >
                          How are you doing?
                        </p>
                        <p
                          className="small p-2 me-3 mb-1 text-white rounded-3"
                          style={{
                            background: "linear-gradient(to right, #7c1f64, #552257)",
                          }}
                        >
                          Long time no see! Tomorrow office. will be free on sunday.
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:06</p>
                      </div>
                      
                    </div>

                    <div className="d-flex flex-row justify-content-start mb-4">
                    
                      <div>
                        <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: "#f5f6f7" }}>
                          Okay
                        </p>
                        <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: "#f5f6f7" }}>
                          We will go on Sunday?
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted">00:07</p>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end mb-4">
                      <div>
                        <p
                          className="small p-2 me-3 mb-1 text-white rounded-3 "
                          style={{
                            background: "linear-gradient(to right, #7c1f64, #552257)",
                          }}
                        >
                          That's awesome!
                        </p>
                        <p
                          className="small p-2 me-3 mb-1 text-white rounded-3 "
                          style={{
                            background: "linear-gradient(to right, #7c1f64, #552257)",
                          }}
                        >
                          I will meet you Sandon Square sharp at 10 AM
                        </p>
                        <p
                          className="small p-2 me-3 mb-1 text-white rounded-3 "
                          style={{
                            background: "linear-gradient(to right, #7c1f64, #552257)",
                          }}
                        >
                          Is that okay?
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:09</p>
                      </div>
                      
                    </div>

                    <div className="d-flex flex-row justify-content-start mb-4">
                      <div>
                        <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: "#f5f6f7" }}>
                          Okay i will meet you on Sandon Square
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted">00:11</p>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end mb-4">
                      <div>
                        <p
                          className="small p-2 me-3 mb-1 text-white rounded-3 "
                          style={{
                            background: "linear-gradient(to right, #7c1f64, #552257)",
                          }}
                        >
                          Do you have pictures of Matley Marriage?
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:11</p>
                      </div>
                      
                    </div>

                    <div className="d-flex flex-row justify-content-start mb-4">
                      <div>
                        <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: "#f5f6f7" }}>
                          Sorry I don't have. i changed my phone.
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted">00:13</p>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                      <div>
                        <p
                          className="small p-2 me-3 mb-1 text-white rounded-3 "
                          style={{
                            background: "linear-gradient(to right, #7c1f64, #552257)",
                          }}
                        >
                          Okay then see you on sunday!!
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:15</p>
                      </div>
                    </div>
                  </MDBCardBody>
                </div>
                <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp" alt="avatar 3" style={{ width: "45px", height: "100%" }} />
                  <input type="text" className="form-control form-control-lg" id="exampleFormControlInput3" placeholder="Type message" />
                  <a className="ms-1 text-muted" href="#!">
                    <MDBIcon fas icon="paperclip" />
                  </a>
                  <a className="ms-3 text-muted" href="#!">
                    <MDBIcon fas icon="smile" />
                  </a>
                  <a className="ms-3 link-info" href="#!">
                    <MDBIcon
                      fas
                      icon="paper-plane"
                      style={{
                        color: "#7c1f64",
                      }}
                    />
                  </a>
                </MDBCardFooter>
              </MDBCard>
            </MDBCollapse>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
export default Chat;
