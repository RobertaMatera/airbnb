import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <>
        <section id="support" className="mr-xl-5">
          <Col className="mx-5 px-3">
            <Row className="mb-3">
              <h6>
                <b>Support</b>
              </h6>
            </Row>
            <Row className="d-flex flex-column">
              <Col
                xs={12}
                md={4}
                xl={12}
                className="d-flex flex-column flex-md-row flex-xl-column px-0"
              >
                <a href="#">Help Centre</a>
                <a href="#">Safety Information</a>
              </Col>
              <Col
                xs={12}
                md={4}
                xl={12}
                className="d-flex flex-column flex-md-row flex-xl-column px-0"
              >
                <a href="#">Cancellation options</a>
                <a href="#">Our COVID-19 Response</a>
              </Col>
              <Col
                xs={12}
                md={4}
                xl={12}
                className="d-flex flex-column flex-md-row flex-xl-column px-0"
              >
                <a href="#">Supporting people with disabilities</a>
                <a href="#">Report a neighbourhood concern</a>
              </Col>
            </Row>
          </Col>
        </section>
        <section id="community" className="mx-xl-5">
          <Col className="mx-5 px-3">
            <Row className="mb-3">
              <h6>
                <b>Community</b>
              </h6>
            </Row>
            <Row className="d-flex flex-column">
              <Col
                xs={12}
                md={4}
                xl={12}
                className="d-flex flex-column d-md-flex flex-md-row flex-xl-column px-0"
              >
                <a href="#">Airbnb.org: disaster relief housing</a>
                <a href="#">Support Afghan refugees</a>
              </Col>
              <Col
                xs={12}
                md={4}
                xl={12}
                className="d-flex flex-column flex-md-row flex-xl-column px-0"
              >
                <a href="#">Celebrating diversity & belonging</a>
                <a href="#">Combating discrimination</a>
              </Col>
              <Col
                xs={12}
                md={4}
                xl={12}
                className="d-flex flex-column flex-md-row flex-xl-column px-0"
              >
                <a href="#">Supporting people with disabilities</a>
                <a href="#">Report a neighbourhood concern</a>
              </Col>
            </Row>
          </Col>
        </section>
        <section id="hosting" className="mx-xl-5">
          <Col className="mx-5 px-3">
            <Row className="mb-3">
              <h6>
                <b>Hosting</b>
              </h6>
            </Row>
            <Row className="d-flex flex-column">
              <Col
                xs={12}
                md={4}
                xl={12}
                className="d-flex flex-column d-md-flex flex-md-row flex-xl-column px-0"
              >
                <a href="#">Try hosting</a>
                <a href="#">AirCover: protection for Hosts</a>
              </Col>
              <Col
                xs={12}
                md={4}
                xl={12}
                className="d-flex flex-column flex-md-row flex-xl-column px-0"
              >
                <a href="#">Explore hosting resources</a>
                <a href="#">Visit our community forum</a>
              </Col>
              <Col
                xs={12}
                md={4}
                xl={12}
                className="d-flex flex-column flex-md-row flex-xl-column px-0"
              >
                <a href="#">How to host responsibly</a>
              </Col>
            </Row>
          </Col>
        </section>
        <section id="about" className="ml-xl-5">
          <Col className="mx-5 px-3">
            <Row className="mb-3">
              <h6>
                <b>About</b>
              </h6>
            </Row>
            <Row className="d-flex flex-column">
              <Col
                xs={12}
                md={4}
                xl={12}
                className="d-flex flex-column d-md-flex flex-md-row flex-xl-column px-0"
              >
                <a href="#">Newsroom</a>
                <a href="#">Learn about new features</a>
              </Col>
              <Col
                xs={12}
                md={4}
                xl={12}
                className="d-flex flex-column flex-md-row flex-xl-column px-0"
              >
                <a href="#">Letter from our founders</a>
                <a href="#">Careers</a>
              </Col>
              <Col
                xs={12}
                md={4}
                xl={12}
                className="d-flex flex-column flex-md-row flex-xl-column px-0"
              >
                <a href="#">Investors</a>
                <a href="#">Airbnb Luxe</a>
              </Col>
            </Row>
          </Col>
        </section>
      </>
    );
  }
}
