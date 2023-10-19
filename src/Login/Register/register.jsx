import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { faCheck, faTimes, faInfoCircle, faKey } from "@fortawesome/free-solid-svg-icons";
import sfondoLogin from "../../Assets/Images/sfondoLogin.png";
import imagePoliecoLogo from './../../Assets/Images/Polieco_logo_Nuovo.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "../../Api/axios";
import "../../index.css";
import './register.css';
import authService from "../../DataAPI/services/auth.service";
import { Password } from "@mui/icons-material";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@¥$%+-=]).{8,24}$/;

// const REGISTER_URL = "/api/register";

const Register = ({ setIsRegistered }) => {

  const emailRef = useRef();

  const [email, setEmail] = useState("");
  const [validNameEmail, setValidNameEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  // const [success, setSuccess] = useState(false);
  // eslint-disable-next-line
  const [isSigned, setIsSigned] = useState(false);


  useEffect(() => {
    userRef.current.focus();
  }, []); //happen when the components loads

  useEffect(() => {
    const result = EMAIL_REGEX.test(user);
    if (PWD_REGEX.test(pwd)) {
      setValidPwd(true);
    }

    console.log(result);
    console.log(pwd);
    setValidName(result);
    const match = pwd === matchPwd;
    setValidMatch(match); //match quindi puo' essere true o false
  }, [user, pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    /*const v1 = EMAIL_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }*/

    console.log("I dati: " + user, email, pwd);
    authService.register(user, email, pwd);

    //localStorage.setItem("email", user);
    //localStorage.setItem("password", pwd);
    //localStorage.setItem("name", pwd);
    setIsRegistered(true);
    // try {
    //   const response = await axios.post(
    //     REGISTER_URL,
    //     JSON.stringify({ user, pwd }),
    //     {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     }
    //   );
    //   console.log(response?.data);
    //   console.log(response?.accessToken);
    //   console.log(JSON.stringify(response));
    //   setSuccess(true);
    //   //clear state and controlled inputs
    //   //need value attrib on inputs for this
    //   setUser("");
    //   setPwd("");
    //   setMatchPwd("");
    // } catch (err) {
    //   if (!err?.response) {
    //     setErrMsg("No Server Response");
    //   } else if (err.response?.status === 409) {
    //     setErrMsg("Username Taken");
    //   } else {
    //     setErrMsg("Registration Failed");
    //   }
    //   errRef.current.focus();
    // }
  };

  return (
    <>
      {isSigned ? (
        <>

          <div className="centered-container">
            <form className="centered-section">
              <h1 className="success">Success!</h1>
              <button>
                <NavLink exactTo="/">Sign In</NavLink>
              </button>
            </form>
          </div>
        </>
      ) : (
        <div className="background-image" style={{ backgroundImage: `url(${sfondoLogin})` }}>
          <Container className="mt-5 pt-5">
            <Row className="justify-content-center position-relative bg-transparent">
              <section className="centered-section">
                <Col md={4}>
                  <img
                    src={imagePoliecoLogo}
                    alt="Your Igm Pic"
                    className="igm-fluid"
                    style={{ position: 'absolute', float: 'left', marginLeft: '-118%', width: '60%', height: '50%' }}
                  />
                  <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                  <h1 className="text-center mb-5">
                    {" "}
                    R E G<FontAwesomeIcon icon={faKey} className="fa-lg" /> S T E R {" "}
                  </h1>
                  <form onSubmit={handleSubmit}>


                  {/* ----------------EMAIL---------------------- */}
                  <label htmlFor="email">
                      Email:
                      <FontAwesomeIcon
                        icon={faCheck}
                        //className={validNameEmail ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        //className={validNameEmail || !email ? "hide" : "invalid"}
                      />
                    </label>
                    <input
                      type="text"
                      id="email"
                      ref={emailRef}
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                      //aria-invalid={validNameEmail ? "false" : "true"}
                      //aria-describedby="uidnote"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    />
                    <p id="uidnote" className={emailFocus && email && !validNameEmail ? "instructions" : "offscreen"}>
                      <FontAwesomeIcon icon={faInfoCircle} />
                      4 to 24 characters.
                      <br />
                      Must begin with a letter.
                      <br />
                      Letters, numbers, underscores, hyphens allowed.
                    </p>


                    {/* ----------------USERNAME---------------------- */}
                    <label htmlFor="username">
                      Username:
                      <FontAwesomeIcon
                        icon={faCheck}
                        //className={validName ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        //className={validName || !user ? "hide" : "invalid"}
                      />
                    </label>
                    <input
                      type="text"
                      id="username"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setUser(e.target.value)}
                      value={user}
                      required
                      //aria-invalid={validName ? "false" : "true"}
                      //aria-describedby="uidnote"
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                    />
                    <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                      <FontAwesomeIcon icon={faInfoCircle} />
                      4 to 24 characters.
                      <br />
                      Must begin with a letter.
                      <br />
                      Letters, numbers, underscores, hyphens allowed.
                    </p>


                    {/* ----------------PASSWORD---------------------- */}
                    <label htmlFor="password">
                      Password:
                      <FontAwesomeIcon
                        icon={faCheck}
                        //className={validPwd ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        //className={validPwd || !pwd ? "hide" : "invalid"}
                      />
                    </label>
                    <input
                      type="password"
                      id="password"
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      required
                      //   aria-invalid={validPwd ? "false" : setValidPwd(true)}
                      //aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                    />
                    <p
                      id="pwdnote"
                      //className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      8 to 24 characters.
                      <br />
                      Must include uppercase and lowercase letters, a number and a
                      special character.
                      <br />
                      Allowed special characters:{" "}
                      <span aria-label="exclamation mark">!</span>{" "}
                      <span aria-label="at symbol">@</span>{" "}
                      <span aria-label="hashtag">#</span>{" "}
                      <span aria-label="dollar sign">$</span>{" "}
                      <span aria-label="percent">%</span>
                    </p>



                    {/* ----------------CONFIRM PASSWORD---------------------- */}
                    <label htmlFor="confirm_pwd">
                      Confirm Password:
                      <FontAwesomeIcon
                        icon={faCheck}
                        //className={validMatch && matchPwd ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        //className={validMatch || !matchPwd ? "hide" : "invalid"}
                      />
                    </label>
                    <input
                      type="password"
                      id="confirm_pwd"
                      onChange={(e) => setMatchPwd(e.target.value)}
                      value={matchPwd}
                      required
                      //aria-invalid={validMatch ? "false" : "true"}
                      //aria-describedby="confirmnote"
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                    />
                    <p
                      id="confirmnote"
                      //className={matchFocus && !validMatch ? "instructions" : "offscreen"}
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Must match the first password input field.
                    </p>
                    {/* ----------------SIGN UP-------------------------------- */}
                    <button
                      //disabled={!validName || !validPwd || !validMatch ? true : false}
                    >
                      Sign Up
                    </button>
                  </form>
                  <h2 className="text-center mt-5 small">
                    Already registered?{" "}
                    <NavLink onClick={() => setIsRegistered(true)}>Sign In</NavLink>
                  </h2>
                </Col>
              </section>
            </Row>
          </Container>
        </div >
      )}
      {/* {renderRoutes()} */}
    </>
  );
};

export default Register;
