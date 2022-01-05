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
            <p className="my-0">Aberfeldy</p>
            <p className="my-0 disabled">Scotland</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Amsterdam</p>
            <p className="my-0 disabled">North Holland</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Athens</p>
            <p className="my-0 disabled">Greece</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Aviemore</p>
            <p className="my-0 disabled">Scotland</p>
          </Col>
        </Row>
        <Row className="d-sm-block d-md-flex">
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Bakewell</p>
            <p className="my-0 disabled">England</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Barcelona</p>
            <p className="my-0 disabled">Catalonia</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Bath</p>
            <p className="my-0 disabled">England</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Betws-y-Coed</p>
            <p className="my-0 disabled">Wales</p>
          </Col>
        </Row>
        <Row className="d-sm-block d-md-flex">
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Birmingam</p>
            <p className="my-0 disabled">England</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Boreaux</p>
            <p className="my-0 disabled">Nouvelle-Aquitaine</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Bourton-on-the-Water</p>
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
