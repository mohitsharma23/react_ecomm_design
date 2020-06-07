import React from "react";
import "./CompCommon.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <div className="footerMain">
        <Container>
          <Row>
            <Col className="footerCol">
              <Row className="footerHeading">
                Stay in the Loop on what's new
              </Row>
              <Row>
                <InputGroup className="mb-3">
                  <FormControl placeholder="Search" aria-label="Search" />
                  <InputGroup.Append>
                    <Button variant="dark">Button</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Row>
            </Col>
            <Col className="footerCol">
              <Row className="footerHeading">Customer Care</Row>
              <Row className="footerSubHeading">
                Get answers to your questions
              </Row>
              <Row>Our Story</Row>
              <Row>Terms and Privacy</Row>
              <Row>Contact</Row>
              <Row>Shipping and Returns</Row>
            </Col>
            <Col className="footerCol">
              <Row className="footerHeading">Featured Collections</Row>
              <Row className="footerSubHeading">
                Browse our popular products
              </Row>
              <Row>Top 50 Best Sellers</Row>
              <Row>Unisex Gifts</Row>
              <Row>Timeless Roses</Row>
              <Row>Inspire Braceltes</Row>
            </Col>
            <Col className="footerCol">
              <Row className="footerHeading">Keep in Touch</Row>
              <Row className="footerSubHeading">
                +91-22-12345678 | Contact Us
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
