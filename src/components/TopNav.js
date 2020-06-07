import React from "react";
import { Navbar, Form, FormControl, Nav, NavDropdown } from "react-bootstrap";
import "./CompCommon.css";

class TopNav extends React.Component {
  render() {
    return (
      <div>
        <div className="navTop">
          <Navbar bg="light" variant="light">
            <Nav className="mr-auto">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Form>
              <Nav.Link href="#home">Currency</Nav.Link>
              <NavDropdown title="INR" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">INR</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#features">Login</Nav.Link>
              <div className="divider"></div>
              <Nav.Link href="#pricing">Create Account</Nav.Link>
            </Nav>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default TopNav;
