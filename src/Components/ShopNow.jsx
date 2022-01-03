import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class ShopNow extends Component {
  render() {
    return (
      <div className="d-none d-md-flex flex-row align-items-center mx-auto rounded-border bg-gray bg-shop">
        <div className="mx-auto my-5">
          <span className="text-center">
            <p className="font-w-800 my-3">Introducing</p>
            <h2 className="font-w-800 my-3 font-size-30pt">Airbnb gift <br /> cards</h2>
            <Button variant="dark" className="bg-btn-shop-dark">Shop Now</Button>{' '}
          </span>
        </div>
        <div className="d-flex justify-content-center align-items-center mx-auto">
          <img src="images/airbnb_cards.png" alt="airbnb cards" />
        </div>
      </div>
    );
  }
}
