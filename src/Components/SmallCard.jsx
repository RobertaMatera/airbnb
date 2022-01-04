import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class SmallCard extends Component {
  render() {
    return (
        <Card className="small-card border-radius-15 mx-md-3">
          <Card.Img
            variant="top"
            src={this.props.src}
            className="img-small-card p-0 m-0"
          />
          <Card.Body style={{ background: this.props.style }}>
            <Card.Title> {this.props.title} </Card.Title>
            <Card.Text> {this.props.text} </Card.Text>
          </Card.Body>
        </Card>
    );
  }
}
