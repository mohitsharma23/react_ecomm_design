import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Box from "../containers/Box";
import "./CompCommon.css";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          name: "Baby Girl Dress Keychain",
          image: card1,
        },
        {
          name: "Baby Onesie Keychain",
          image: card2,
        },
      ],
      cardSelected: this.props.card === null ? null : this.props.card,
      charCount: 0,
      message: this.props.message !== "" ? this.props.message : "",
      noMessage: this.props.noMessage,
    };
  }

  onCardSave = () => {
    this.props.onCardSave(
      this.state.cardSelected,
      this.state.message,
      this.state.noMessage
    );
    this.props.history.push("/review");
  };

  selectCard = (card) => {
    this.setState({
      cardSelected: card,
    });
  };

  changeCard = () => {
    this.setState({
      cardSelected: null,
    });
  };

  wordCount = (e) => {
    let currentText = e.target.value;
    let charCount = currentText.length;
    this.setState({
      charCount,
      message: currentText,
    });
  };

  handleCHKChange = () => {
    this.setState((prevState) => ({
      noMessage: !prevState.noMessage,
    }));
  };

  render() {
    return (
      <div>
        <Container className="header">
          <h4>CREATE YOUR PIECE OF HEAVEN</h4>
          <span>
            Choose a perfect card for the occasion from our selection of
            exclusive designs!
          </span>
        </Container>
        {this.state.cardSelected === null ? (
          <Row>
            {this.state.cards.map((item, i) => (
              <Col key={i} onClick={() => this.selectCard(item)}>
                <Box box={item} />
              </Col>
            ))}
          </Row>
        ) : (
          <Container>
            <Row>
              <Col>
                <Row>
                  <Container className="cardImg">
                    <img src={this.state.cardSelected.image} alt="Card" />
                  </Container>
                </Row>
                <Row className="changeCardStyle">
                  <span onClick={this.changeCard}>(Change Card)</span>
                </Row>
              </Col>
              <Col>
                <Container className="messageBox">
                  <Row>Message on Card</Row>
                  <Row>{350 - this.state.charCount} Characters Remaining</Row>
                  <Row>
                    <Form>
                      <Form.Control
                        value={this.state.message}
                        as="textarea"
                        rows="7"
                        cols="100"
                        maxLength="350"
                        onChange={this.wordCount}
                      />
                    </Form>
                  </Row>
                  <Row>350 Characters Limit</Row>
                  <Row>
                    <Col md={1}>
                      <input
                        type="checkbox"
                        onChange={this.handleCHKChange}
                        checked={this.state.noMessage}
                      />
                    </Col>
                    <Col md={10}>
                      Click here if you want to hand write your message and
                      we'll send you the blank greeting card.
                    </Col>
                  </Row>
                  <Row>
                    <Button variant="primary" onClick={this.onCardSave}>
                      Save message and Card
                    </Button>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    );
  }
}

export default Cards;
