import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

export default class Experiences extends Component {
  state = {
    experiences: [
      {
        key: "1",
        src: "images/big_bg/big_bg_1.jpg",
        title: "Things to do on your trip",
        buttonText: "Experiences",
      },
      {
        key: "2",
        src: "images/big_bg/big_bg_2.jpg",
        title: "Things to do from home",
        buttonText: "Online Experiences",
      },
    ],
  };

  render() {
    return (
      <>
        <Row className="d-flex justify-content-center mx-md-5 mb-5">
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <Card className="border-radius-15">
              <Card.Img
                variant="top"
                src={this.state.experiences[0].src}
                className="img-small-card p-0 m-0"
                style = {{height: "80vh"}}
              />
              <h3 className="font-w-800 font-size-30pt">{this.state.experiences[0].title}</h3>
              <Button  className="py-3 px-4 bg-button">{this.state.experiences[0].buttonText}</Button>{' '}
            </Card>
          </Col>
          <Col xs={12} lg={6}>
            <Card className="border-radius-15">
              <Card.Img
                variant="top"
                src={this.state.experiences[1].src}
                className="img-small-card p-0 m-0"
                style = {{height: "80vh"}}
              />
               <h3 className="font-w-800 font-size-30pt">{this.state.experiences[1].title}</h3>
               <Button  className="py-3 px-4 bg-button">{this.state.experiences[1].buttonText}</Button>{' '}
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
