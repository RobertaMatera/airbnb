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
            <p className="my-0">Berlin</p>
            <p className="my-0 disabled">Berlin Region</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Cork</p>
            <p className="my-0 disabled">County Cork</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Hayling Island</p>
            <p className="my-0 disabled">England</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Ingoldmells</p>
            <p className="my-0 disabled">England</p>
          </Col>
        </Row>
        <Row className="d-sm-block d-md-flex">
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">La Rochelle</p>
            <p className="my-0 disabled">Nouvelle-Aquitaine</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Windsor</p>
            <p className="my-0 disabled">England</p>
          </Col>
        </Row>
      </div>
    );
  }
}
