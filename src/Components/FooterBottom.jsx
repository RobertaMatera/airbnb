import React, { Component } from "react";
import { Col } from "react-bootstrap";

export default class FooterBottom extends Component {
  render() {
    return (
      <>
        <div className="d-flex flex-row">
          <a href="#" className="px-2">
            &copy; 2022 Airbnb, Inc.
          </a>
          <p className="px-2">·</p>
          <a href="#" className="px-2">
            Privacy
          </a>
          <p className="px-2">·</p>
          <a href="#" className="px-2">
            Terms
          </a>
          <p className="px-2">·</p>
          <a href="#" className="px-2">
            Sitemap
          </a>
          <p className="px-2">·</p>
          <a href="#" className="px-2">
            UK Modern Slavery Act
          </a>
          <p className="px-2">·</p>
          <a href="#" className="px-2">
            Company details
          </a>
        </div>
        <div className="ml-auto">
          <a href="#" className="px-2">
            English (GB)
          </a>
        </div>
      </>
    );
  }
}
