import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBCardFooter, MDBCollapse } from "mdb-react-ui-kit";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//*CSS
import ForumIcon from "@mui/icons-material/Forum";
import { FaMinus } from "react-icons/fa";
const Chat = ({ propShow, setChatOpen, completeData, setCompleteData }) => {
  const getLocalStorageData = JSON.parse(localStorage.getItem(`value`));
  const [showChat, setShowChat] = useState(propShow);

  const toggleShow = () => {
    setShowChat(!showChat);
    setChatOpen(false);
    if (setChatOpen && typeof propClose === "function") {
      setChatOpen();
    }
  };

  return (
    <MDBContainer fluid style={{ position: "relative" }}>
      <MDBRow style={{ width: "100%" }} className="d-flex justify-content-end">
        <MDBCol sx="6" xs="6" sm="6" md="6" lg="5" xl="4" style={{ position: "absolute", top: "-135px" }}>
          <MDBCollapse show={showChat}>
            <MDBCard id="chat4" style={{ border: "2px solid rgb(154 16 155)" }}>
              <div
                className="overflow_Chat"
                style={{
                  height: "460px",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                }}
              >
                <div
                  style={{
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                    height: "110px",
                    background: "rgb(79 136 222)",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    position: "absolute",
                    zIndex: "1",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          color: "#fff",
                          marginLeft: "-5px",
                          marginTop: "3px",
                        }}
                      >
                        <ForumIcon />
                      </div>
                    </div>
                    <FaMinus
                      style={{
                        color: "#fff",
                        cursor: "pointer",
                        height: "20px",
                        width: "20px",
                      }}
                      onClick={toggleShow}
                    />
                  </div>
                  <div
                    className="small mt-1"
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#fff",
                    }}
                  >
                    {getLocalStorageData ? getLocalStorageData?.email : ""}
                  </div>
                  <div
                    className="small mt-1 "
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#fff",
                    }}
                  >
                    {getLocalStorageData ? getLocalStorageData?.phone : ""}
                  </div>
                  <div
                    className="small mt-1 "
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#fff",
                    }}
                  >
                    {getLocalStorageData ? getLocalStorageData?.alternatePhone : ""}
                  </div>
                </div>

                <MDBCardBody style={{ paddingLeft: "10px", paddingRight: "10px", marginTop: "110px" }}>
                  <div className="d-flex flex-row justify-content-start">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp" alt="avatar 1" style={{ width: "32px", height: "100%", borderRadius: "100px" }} />
                    <div>
                      <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: "#f5f6f7", fontSize: "14px" }}>
                        Hi
                      </p>
                      <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: "#f5f6f7", fontSize: "14px" }}>
                        How are you ...???
                      </p>

                      <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p>
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
                          background: "rgb(79 136 222)",
                        }}
                      >
                        Hiii, I'm good.
                      </p>

                      <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:06</p>
                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" alt="avatar 1" style={{ width: "35px", height: "100%" }} />
                  </div>

                  <div className="d-flex flex-row justify-content-start mb-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp" alt="avatar 1" style={{ width: "32px", height: "100%", borderRadius: "100px" }} />
                    <div>
                      <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: "#f5f6f7", fontSize: "14px" }}>
                        Okay
                      </p>
                      <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: "#f5f6f7", fontSize: "14px" }}>
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
                          background: "rgb(79 136 222)",
                          fontSize: "14px",
                        }}
                      >
                        That's awesome!
                      </p>
                      <p
                        className="small p-2 me-3 mb-1 text-white rounded-3 "
                        style={{
                          background: "rgb(79 136 222)",
                          fontSize: "14px",
                        }}
                      >
                        I will meet you sharp at 10 AM
                      </p>
                      <p
                        className="small p-2 me-3 mb-1 text-white rounded-3 "
                        style={{
                          background: "rgb(79 136 222)",
                          fontSize: "14px",
                        }}
                      >
                        Is that okay?
                      </p>
                      <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:09</p>
                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" alt="avatar 1" style={{ width: "35px", height: "100%" }} />
                  </div>

                  <div className="d-flex flex-row justify-content-start mb-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp" alt="avatar 1" style={{ width: "32px", height: "100%", borderRadius: "100px" }} />
                    <div>
                      <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: "#f5f6f7", fontSize: "14px" }}>
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
                          background: "rgb(79 136 222)",
                          fontSize: "14px",
                        }}
                      >
                        Do you have pictures of Matley?
                      </p>
                      <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:11</p>
                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" alt="avatar 1" style={{ width: "37px", height: "100%" }} />
                  </div>

                  <div className="d-flex flex-row justify-content-start mb-4">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp" alt="avatar 1" style={{ width: "32px", height: "100%", borderRadius: "100px" }} />
                    <div>
                      <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: "#f5f6f7", fontSize: "14px" }}>
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
                          background: "rgb(79 136 222)",
                          fontSize: "14px",
                        }}
                      >
                        Okay then see you on sunday!!
                      </p>
                      <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:15</p>
                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" alt="avatar 1" style={{ width: "37px", height: "100%" }} />
                  </div>
                </MDBCardBody>
              </div>
              <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                  alt="avatar 3"
                  style={{ width: "32px", height: "100%", borderRadius: "100px", marginRight: "8px" }}
                />
                <input type="text" className="form-control form-control-lg" id="exampleFormControlInput3" style={{ fontSize: "18px", marginRight: "5px" }} placeholder="Type message" />
                <a className="ms-1 text-muted" href="#!" style={{ fontSize: "19px" }}>
                  <MDBIcon fas icon="paperclip" />
                </a>
                <a className="ms-3 text-muted" href="#!" style={{ fontSize: "19px" }}>
                  <MDBIcon fas icon="smile" />
                </a>
                <a className="ms-3 link-info" href="#!" style={{ fontSize: "19px" }}>
                  <MDBIcon
                    fas
                    icon="paper-plane"
                    style={{
                      color: "rgb(79 136 222)",
                    }}
                  />
                </a>
              </MDBCardFooter>
            </MDBCard>
          </MDBCollapse>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default Chat;
