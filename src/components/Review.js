import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./CompCommon.css";
import ThumbNail from "../containers/ThumbNail";

class Review extends React.Component {
  render() {
    return (
      <div>
        <Container className="header">
          <h5>Your Gift Box</h5>
        </Container>
        <Container>
          <Row>
            <Col>
              {this.props.box !== null && (
                <Container className="cardImg">
                  <img src={this.props.box.image} alt="Box" />
                </Container>
              )}
            </Col>
            <Col>
              <Container>
                <Row>
                  <div className="reviewHeading">
                    <h6>Your Gift Box</h6>
                  </div>
                  {this.props.box !== null && (
                    <div>
                      <ul>
                        <li>Box Color: {this.props.box.name}</li>
                        <li>Box Price: {this.props.box.price}</li>
                      </ul>
                    </div>
                  )}
                </Row>
                <Row>
                  <div className="reviewHeading">
                    <h6>Your Items</h6>
                  </div>
                  <ul>
                    {this.props.items !== null &&
                      this.props.items.map((item, i) => {
                        if (item.count > 0) {
                          return (
                            <li>
                              {item.count} - {item.name} - {item.price}
                            </li>
                          );
                        }
                      })}
                  </ul>
                </Row>
                <Row>
                  <div className="reviewHeading">
                    <h6>Your Message</h6>
                  </div>
                  {this.props.message !== "" &&
                    this.props.noMessage === false && (
                      <p>{this.props.message}</p>
                    )}
                </Row>
                <Row>
                  <div className="reviewHeading">
                    <h6>Your Card</h6>
                  </div>
                  {this.props.card !== null && (
                    <ThumbNail image={this.props.card.image} />
                  )}
                </Row>
                {this.props.total !== 0 && (
                  <Row>
                    <div className="reviewHeading">
                      <h6>
                        Total Price: {this.props.total + this.props.box.price}
                      </h6>
                    </div>
                    <Button variant="primary">Add To Cart</Button>
                  </Row>
                )}
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Review;
