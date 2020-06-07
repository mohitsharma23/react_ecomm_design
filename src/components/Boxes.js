import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Box from "../containers/Box";
import "./CompCommon.css";
import blackBox from "../images/blackGiftBox.jpg";
import pinkBox from "../images/pinkGiftBox.jpg";

class Boxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        {
          name: "Black",
          price: 100,
          image: blackBox,
        },
        {
          name: "Peach",
          price: 80,
          image: pinkBox,
        },
      ],
    };
  }

  saveBox = (item) => {
    //console.log(item.color);
    this.props.onSaveBox(item);
    this.props.history.push("/gifts");
  };
  render() {
    return (
      <div>
        <Container className="header">
          <h4>SELECT A BOX</h4>
          <span>Choose a packaging that speaks to your loved one's style!</span>
        </Container>
        <Container>
          <Row>
            {this.state.boxes.map((item, i) => (
              <Col key={i} onClick={() => this.saveBox(item)}>
                <Box box={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Boxes;
