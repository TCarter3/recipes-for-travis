import React from "react";
import "../styles/LeftName.css";
import { Link, } from "react-router-dom";
import { Icon, Button, } from "semantic-ui-react";



class LeftName extends React.Component {

  state = { showSocial: false, }

  render() {

    return (
      <div className="name-div">
        <Link to="/">
          <Button size="big" style={{backgroundColor: "black", color: "#116466"}} animated="vertical" className="bars" >
            <Button.Content hidden ><Icon style={{color: "#116466"}} name="home" /></Button.Content>
            <Button.Content visible >TC</Button.Content>
          </Button>
          </Link>
      </div>

    );
  };
}

export default LeftName;