import React from "react";
import NavBar from "./NavBar";
import { Modal, Icon, } from "semantic-ui-react";
import { Link, } from "react-router-dom";
import "../styles/Portfolio.css";
import Recipe from "../images/recipe_pic.jpg";

class Portfolio extends React.Component {

  state = {showModal: false}

  render() {

    return (
      <>
        <NavBar />
        <br />
        <br/>
        <Modal centered basic trigger={
        <Link>
        <p className="video-head">VIDEO PORTFOLIO  ></p> 
        </Link>
        }>
          <Modal.Header>My Videos <Icon name="video camera" /></Modal.Header>
          <Modal.Content centered>
          <iframe style={{marginLeft: "200px", marginBottom: "25px"}} width="560" height="315" src="https://www.youtube.com/embed/CTePQndfoBI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/>
          <iframe style={{marginLeft: "200px", marginBottom: "25px"}} width="560" height="315" src="https://www.youtube.com/embed/NVYeFwUdINg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/>
          <iframe style={{marginLeft: "200px", marginBottom: "25px"}} width="560" height="315" src="https://www.youtube.com/embed/c-BdgjqG09g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/>
          </Modal.Content>
        </Modal>
        <br/>
        <br/>
        <Modal centered basic trigger={
          <Link>
          <p className="video-head">DEVELOPING PORTFOLIO  ></p> 
          </Link>
        }>
          <Modal.Header>My Projects <Icon name="laptop" /></Modal.Header>
          <Modal.Content centered>
            <>
            <div style={{display: "flex", justifyContent: "center"}}>
              <img className="recipe-app-pic" src={Recipe} alt="laptop mockup" />
              <div>
              <h1>Recipes for Travis</h1>
              <p style={{fontSize: "18px"}}>A small simple React recipe app that uses an api from Edanam.</p>
              <p> </p>
              </div>
            </div>

            </>
          </Modal.Content>

        </Modal>
      
       

      </>
    );
  ;}
};

export default Portfolio;