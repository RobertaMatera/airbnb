import React, { Component } from "react";
import { Col } from "react-bootstrap";

export default class FooterBottom extends Component {
  render() {
    return (
      <>
        <div className="d-flex flex-row">
          <a href="#" className="p-0 px-2">
            &copy; 2022 Airbnb, Inc.
          </a>
          <p className="px-2">·</p>
          <a href="#" className="p-0 px-2">
            Privacy
          </a>
          <p className="px-2">·</p>
          <a href="#" className="p-0 px-2">
            Terms
          </a>
          <p className="px-2">·</p>
          <a href="#" className="p-0 px-2">
            Sitemap
          </a>
          <p className="px-2">·</p>
          <a href="#" className="p-0 px-2">
            UK Modern Slavery Act
          </a>
          <p className="px-2">·</p>
          <a href="#" className="p-0 px-2">
            Company details
          </a>
        </div>
        <div className="ml-auto d-flex flex-row align-items-center">
          <span className="d-flex flex-row align-items-center">
            <i className="bi bi-globe d-flex align-self-center"></i>
            <a href="#" className="px-2 py-0">
              English (GB)
            </a>
          </span>
          <span className="d-flex flex-row align-items-center pl-2">
            <p className="my-0">£</p>
            <a href="#" className="px-2 py-0">
              GBP
            </a>
          </span>
          <span className="pl-4">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-instagram"></i>
          </span>
        </div>
      </>
    );
  }
}
