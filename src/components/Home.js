import React from "react";
import { Container, } from "semantic-ui-react"
import { Link, } from "react-router-dom";
import "../styles/Home.css";
import Person from "../images/site_cons/person.png";
import PersonHov from "../images/site_cons/person-hov.png";
import Bubble from "../images/site_cons/bubble.png";
import BubbleHov from "../images/site_cons/bubble-hov.png";
import Laptop from "../images/site_cons/laptop.png";
import LaptopHov from "../images/site_cons/laptop-hov.png";
import Edu from "../images/site_cons/edu.png";
import EduHov from "../images/site_cons/edu-hov.png";
import Travis from "../images/travis.jpg";

class Home extends React.Component {

  state = { showContact: false, 
    showAbout: false, 
    showEdu: false, 
    showCamera: false, 
    showSocial: false, 
    showLaptop: false, }

  render() {

    return (
      <>
      <div className="header-div">
        <img className="head-img" src={Travis} alt="travis" />
        <div style={{marginTop: "100px"}}>
          <p className="description-p1">TRAVIS CARTER</p>
        <p className="description-p">
          Jr Software Developer
        </p>
        <p className="description-p2">
          Specializing in <strong style={{color: "#FFCB9A"}}>Front-End</strong> Design, <strong style={{color: "#FFCB9A"}}>CSS</strong>
        </p>
        
        </div>
      </div>
        <div className="overall-pics">
          <Container>

          <div className="nav-pics-top">

            {this.state.showAbout === false ?
            <Link to="/about">
            <img onMouseOver={() => this.setState({showAbout: true})} className="person-pic" src={Person} alt="icons" />
            </Link>
            :
            <Link to="/about">
            <img onMouseOut={() => this.setState({showAbout: false})} className="person-pic" src={PersonHov} alt="icons" />
            </Link>
            }


            {this.state.showLaptop === false ?
            <Link to="/portfolio">
            <img onMouseOver={() => this.setState({showLaptop: true})} className="laptop-pic" src={Laptop} alt="icons" />
            </Link>
            :
            <Link to="/portfolio">
            <img onMouseOut={() => this.setState({showLaptop: false})} className="laptop-pic" src={LaptopHov} alt="icons" />
            </Link>
            }
         
            {this.state.showEdu === false ?
            <Link to="/experience">
            <img onMouseOver={() => this.setState({showEdu: true})} className="edu-pic" src={Edu} alt="icons" />
            </Link>
            :
            <Link to="/experience">
            <img onMouseOut={() => this.setState({showEdu: false})} className="edu-pic" src={EduHov} alt="icons" />
            </Link>
            }

            {this.state.showContact === false ?
            <Link to="/contact">
            <img  onMouseOver={() => this.setState({showContact: true})} className="bubble-pic" src={Bubble} alt="icons" />
            </Link>
            :
            <Link to="/contact">
            <img  onMouseOut={() => this.setState({showContact: false})} className="bubble-pic" src={BubbleHov} alt="icons" />
            </Link>
            }
            



          </div>
            </Container>

        </div>
      </>
    );
  };
};

export default Home;