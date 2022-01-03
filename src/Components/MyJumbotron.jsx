import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";

export default class MyJumbotron extends Component {
  render() {
    return (
      <div className="d-none d-md-flex flex-column align-items-center justify-content-end my-3 mx-5 py-4 bg-black">
        <h2 className="my-2">Not sure where to go? Perfect.</h2>

        <p className="my-2">
          <Button className="rounded-border py-2 px-3 bg-button">
            <p className="my-auto">I'm flexible</p>
          </Button>
        </p>
      </div>
    );
  }
}
