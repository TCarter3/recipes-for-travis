import React from "react";
import NavBar from "./NavBar";
import Cert from "../images/cert.jpg";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <>
    <NavBar />
    <div>
      <img className="cert-img" src={Cert} alt="certificate" />
    </div>
    </>
  );
};

export default Experience;