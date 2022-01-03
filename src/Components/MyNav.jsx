import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

export default class MyNav extends Component {
  render() {
    return (
      <div className="d-none d-md-block">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img
              src="images/Airbnb_Logo_White.png"
              alt="airbnb"
              className="nav-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav-links">
              <Nav.Link href="#">Places to stay</Nav.Link>
              <Nav.Link href="#">Experiences</Nav.Link>
              <Nav.Link href="#">Online Experiences</Nav.Link>
            </Nav>
            <Nav className="d-flex justify-content-between">
              <Button className="d-flex d-inline align-items-center rounded-border py-2 px-3 mx-1 button-transparent">
                {"Become a Host"}
              </Button>
              <Button className="d-flex d-inline align-items-center rounded-border py-2 px-3 mx-1 button-transparent">
                <i className="bi bi-globe d-flex align-self-center" style={{color: "white"}}></i>
              </Button>

              <Button
                variant="light"
                className="d-flex d-inline align-items-center rounded-border py-0 px-1 mx-1"
              >
                <i className="bi bi-list mx-1">
                  {/*   <NavDropdown title="">
                    <NavDropdown.Item href="#action/3.1">
                      Actio
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </i>

                <i className="bi bi-person-circle mx-1"></i>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
