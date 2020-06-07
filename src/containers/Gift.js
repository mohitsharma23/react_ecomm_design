import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Common.css";

class Gift extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseInside: false,
      inBag: this.props.gift.count > 0 ? true : false,
      gift: {
        name: this.props.gift.name,
        price: this.props.gift.price,
        count: this.props.gift.count,
      },
    };
  }

  addToBag = () => {
    // console.log(this.props.gift);
    this.setState(
      (prevState) => ({
        inBag: true,
        gift: {
          ...prevState.gift,
          count: prevState.gift.count++,
        },
      }),
      () => {
        this.props.addToBag(this.state.gift);
      }
    );
  };

  addGift = () => {
    this.setState(
      (prevState) => ({
        inBag: true,
        gift: {
          ...prevState.gift,
          count: prevState.gift.count++,
        },
      }),
      () => {
        this.props.addToBag(this.state.gift);
      }
    );
  };

  removeGift = () => {
    this.setState(
      (prevState) => ({
        inBag: true,
        gift: {
          ...prevState.gift,
          count: prevState.gift.count--,
        },
      }),
      () => {
        if (this.state.gift.count < 1) {
          this.setState({
            inBag: false,
          });
        }
        this.props.addToBag(this.state.gift);
      }
    );
  };
  mouseEnter = () => {
    this.setState({
      isMouseInside: true,
    });
  };

  mouseLeave = () => {
    this.setState({
      isMouseInside: false,
    });
  };
  render() {
    return (
      <Container>
        <Container
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          className="mainGift"
          style={{
            backgroundImage: `url(${this.props.gift.image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <img src={this.props.gift.image} alt="Gift" /> */}
          {this.state.inBag ? (
            <Container className="changeButtons">
              <Row>
                <Col md={2} className="incrdecreBtn" onClick={this.removeGift}>
                  -
                </Col>
                <Col md={8}>{this.state.gift.count} in Bag</Col>
                <Col md={2} className="incrdecreBtn" onClick={this.addGift}>
                  +
                </Col>
              </Row>
            </Container>
          ) : (
            this.state.isMouseInside && (
              <Button
                className="button"
                variant="primary"
                block
                onClick={this.addToBag}
              >
                Add
              </Button>
            )
          )}
        </Container>
        <Row>
          <Col sm={10}>{this.props.gift.name}</Col>
          <Col>Info</Col>
        </Row>
        Rs {this.props.gift.price}
      </Container>
    );
  }
}

export default Gift;
