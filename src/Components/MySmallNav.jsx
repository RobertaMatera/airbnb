import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

export default class MySmallNav extends Component {
  render() {
    return (
      <div className="d-block d-md-none">
        <div className="text-center my-3">
          <input
            className="mainLoginInput text-center rounded-border"
            type="text"
            placeholder="&#61442; Where are you going?"
          />
        </div>
        <div id="bottom-nav" className="d-flex flex-row justify-content-center py-2 fixed-bottom">
          <div className="mx-2">
            <i id="bottom-nav-search" className="bi bi-search d-flex justify-content-center mb-2"></i>
            <p>Explore</p>
          </div>
          <div className="mx-2 disabled">
            <i className="bi bi-heart d-flex justify-content-center mb-2 disabled"></i>
            <p>Whishlist</p>
          </div>
          <div className="mx-2 disabled">
            <i className="bi bi-person-circle d-flex justify-content-center mb-2 disabled"></i>
            <p>Login</p>
          </div>
        </div>
      </div>
    );
  }
}
