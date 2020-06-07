import React from "react";
import "./CompCommon.css";
import { Navbar, Nav, Container } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <div className="headerMain">
        <div className="header">
          <h1 className="headerLogo">Company Name</h1>
          <Container>
            <Navbar>
              <Nav className="m-auto">
                <Nav.Link href="#home">Shop Gifts</Nav.Link>
                <Nav.Link href="#home">Top 50 Gifts</Nav.Link>
                <Nav.Link href="#home">Timeless Roses</Nav.Link>
                <Nav.Link href="#home">Our Story</Nav.Link>
                <Nav.Link href="#home">Inspire Bracelets</Nav.Link>
              </Nav>
            </Navbar>
          </Container>
        </div>
      </div>
    );
  }
}

export default Header;
