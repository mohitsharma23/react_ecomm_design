import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Boxes from "./Boxes";
import "./CompCommon.css";
import Gifts from "./Gifts";
import Cards from "./Cards";
import Review from "./Review";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      box: null,
      gifts: null,
      total: 0,
      message: "",
      card: null,
      noMessage: false,
    };
  }

  onSaveBox = (item) => {
    this.setState({
      box: item,
    });
  };

  onSaveGifts = (gifts, total) => {
    this.setState({
      gifts: gifts,
      total: total,
    });
  };

  onCardSave = (card, message, noMessage) => {
    this.setState({
      card: card,
      message: message,
      noMessage: noMessage,
    });
  };

  render() {
    return (
      <div>
        <Container>
          <hr />
          <Router>
            <Container className="mainNavContainer">
              <Row>
                <Col className="mainNavItem">
                  <Link to="/">
                    <div>STEP 1</div>
                    <div>SELECT YOUR PACKAGING</div>
                  </Link>
                </Col>

                <Col className="mainNavItem">
                  <Link to="/gifts">
                    <div>STEP 2</div>
                    <div>CHOOSE YOUR GIFTS</div>
                  </Link>
                </Col>

                <Col className="mainNavItem">
                  <Link to="/personalise">
                    <div>STEP 3</div>
                    <div>PERSONALISE IT</div>
                  </Link>
                </Col>

                <Col className="mainNavItem">
                  <Link to="/review">
                    <div>STEP 4</div>
                    <div>REVIEW</div>
                  </Link>
                </Col>
              </Row>
            </Container>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Boxes
                    {...props}
                    onSaveBox={this.onSaveBox}
                    box={this.state.box}
                  />
                )}
              />
              <Route
                path="/gifts"
                render={(props) => (
                  <Gifts
                    {...props}
                    onSaveGifts={this.onSaveGifts}
                    gifts={this.state.gifts}
                    total={this.state.total}
                  />
                )}
              />
              <Route
                path="/personalise"
                render={(props) => (
                  <Cards
                    {...props}
                    onCardSave={this.onCardSave}
                    card={this.state.card}
                    message={this.state.message}
                    noMessage={this.state.noMessage}
                  />
                )}
              />
              <Route path="/review">
                <Review
                  box={this.state.box}
                  items={this.state.gifts}
                  card={this.state.card}
                  message={this.state.message}
                  total={this.state.total}
                  noMessage={this.state.noMessage}
                />
              </Route>
            </Switch>
          </Router>
        </Container>
      </div>
    );
  }
}

export default Main;
