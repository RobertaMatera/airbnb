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
            <p className="my-0">Ambleseide</p>
            <p className="my-0 disabled">England</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Bowness-on-Windermere</p>
            <p className="my-0 disabled">England</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Coniston</p>
            <p className="my-0 disabled">England</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Grasmere</p>
            <p className="my-0 disabled">England</p>
          </Col>
        </Row>
        <Row className="d-sm-block d-md-flex">
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Hawkshead</p>
            <p className="my-0 disabled">England</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Keswick</p>
            <p className="my-0 disabled">England</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Kissimere</p>
            <p className="my-0 disabled">Florida</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Windermere</p>
            <p className="my-0 disabled">England</p>
          </Col>
        </Row>
        <Row className="d-sm-block d-md-flex">
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Lakeside</p>
            <p className="my-0 disabled">England</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">Morzine</p>
            <p className="my-0 disabled">Auvergne-Rhône-Alpes</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <p className="my-0">New York</p>
            <p className="my-0 disabled">New York</p>
          </Col>
          <Col sm={12} md={3} className="mb-4 pb-0">
            <a href="#">Show More</a>
          </Col>
        </Row>
      </div>
    );
  }
}
