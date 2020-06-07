import React from "react";
import { Container } from "react-bootstrap";
import "./Common.css";

class Box extends React.Component {
  render() {
    return (
      <Container>
        <Container className="mainBox">
          <img src={this.props.box.image} alt="Box" />
        </Container>
        <div className="boxName">
          <p>{this.props.box.name}</p>
        </div>
      </Container>
    );
  }
}

export default Box;
