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
            <p className="my-0">Abersoch</p>
            <p className="my-0 disabled">Wales</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Agadir</p>
            <p className="my-0 disabled">Souss-Massa</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Albufeira</p>
            <p className="my-0 disabled">Faro District</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Aldenburgh</p>
            <p className="my-0 disabled">England</p>
          </Col>
        </Row>
        <Row className="d-sm-block d-md-flex">
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Alicante</p>
            <p className="my-0 disabled">Valencian Community</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Almería</p>
            <p className="my-0 disabled">Andalusia</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Alnmouth</p>
            <p className="my-0 disabled">England</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Alvor</p>
            <p className="my-0 disabled">Portugal</p>
          </Col>
        </Row>
        <Row className="d-sm-block d-md-flex">
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Antibes</p>
            <p className="my-0 disabled">Provence-Alpes-Côte d'Azur</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Ayia Napa</p>
            <p className="my-0 disabled">Famagusta</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Barmouth</p>
            <p className="my-0 disabled">Wales</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <a href="#">Show More</a>
          </Col>
        </Row>
      </div>
    );
  }
}
