import React from "react";
import "../styles/About.css";
import T_A from "../images/t_a.JPG";
import NavBar from "./NavBar"


class About extends React.Component {
 
  render() {

    return (
      <>
      <NavBar />
      
        <div className="ab_head">
            <img className="trav_aub" src={T_A} alt="travis+aubree" />
            
          
          <div className="about_p" >

            <p style={{ animation: "slideIn 1.25s", color: "#d1e8e2", fontSize: "2.75em"}} className="p_tags">My name is <strong style={{color: "#116466"}}>Travis Carter</strong>,</p>
            <p style={{animation: "slideIn 1s"}} className="p_tags">I am a Jr. Full-Stack <strong style={{color: "#ffcb9a"}}>Developer</strong>,</p>
            <p style={{animation: "slideIn .75s"}} className="p_tags">freelance Web <strong style={{color: "#ffcb9a"}}>Designer</strong>,</p>
            <p style={{animation: "slideIn .5s"}} className="p_tags">and Video <strong style={{color: "#ffcb9a"}}>Productionist</strong>.</p>
            <br />
            <br />
            <p style={{animation: "slideIn .5s"}}>I have lived in Houston Texas,
         Lihue Hawaii, and am currently living in Bountiful Utah with my wife. 
         I have worked several years in marketting and video production but 
         the tech and software world is where my true passion is.<br/>
         My experience with graphics and styling has taught me how to use many tools </p>
          </div>
        </div>
        <div>

        </div>
      </>
    );
  };
};

export default About;