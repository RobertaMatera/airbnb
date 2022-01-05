import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class HistoricDestinations extends Component {
  render() {
    return (
      <div
        id="uncontrolled-tab-example-tabpane-profile"
        aria-labelledby="uncontrolled-tab-example-tab-profile"
        role="tabpanel"
        aria-hidden="false"
        className="fade tab-pane active show"
      >
        <Row className="d-sm-block d-md-flex">
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Aberdeen</p>
            <p className="my-0 disabled">Scotland</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Aberystwyth</p>
            <p className="my-0 disabled">Wales</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Alnwick</p>
            <p className="my-0 disabled">England</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Bamburgh</p>
            <p className="my-0 disabled">England</p>
          </Col>
        </Row>
        <Row className="d-sm-block d-md-flex">
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Berwick-upon-Tweed</p>
            <p className="my-0 disabled">England</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Boscastle</p>
            <p className="my-0 disabled">England</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Brittany</p>
            <p className="my-0 disabled">Bourgogne-France-Comté</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Budapest</p>
            <p className="my-0 disabled">Hungary</p>
          </Col>
        </Row>
        <Row className="d-sm-block d-md-flex">
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Cardiff</p>
            <p className="my-0 disabled">Wales</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Castleton</p>
            <p className="my-0 disabled">England</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Cheltenham</p>
            <p className="my-0 disabled">England</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <a href="#">Show More</a>
          </Col>
        </Row>
      </div>
    );
  }
}
