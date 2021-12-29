import React, { Component } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default class Search extends Component {
  render() {
    return (
      <div>
        <span className="d-flex flex-row bg-button rounded-border-32">
          <Dropdown>
            <Dropdown.Toggle className="bg-button rounded-border-32">
              <div className="d-flex flex-column text-left my-2 ml-3 mr-5">
                <p className="my-0"> Location </p>
                <p className="my-0 disabled"> Where are you going? </p>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu id="flexible-menu" className="bg-button rounded-border-32 p-4 mt-3">
              <p>
                <b>GO ANYWHERE, ANYTIME</b>
              </p>

              <Button
                id="flexible-btn"
                className="bg-button rounded-border d-flex align-items-center mt-3 px-4"
              >
                {" "}
                I'm flexible <i className="bi bi-caret-right ml-auto"></i>
              </Button>
            </Dropdown.Menu>
          </Dropdown>

          <span className="vl"></span>

          <Dropdown>
            <Dropdown.Toggle className="bg-button rounded-border-32">
              <div className="d-flex flex-column text-left my-2 ml-3 mr-5">
                <p className="my-0"> Check in </p>
                <p className="my-0 disabled"> Add dates </p>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu></Dropdown.Menu>
          </Dropdown>

          <span className="vl"></span>

          <Dropdown>
            <Dropdown.Toggle className="bg-button rounded-border-32">
              <div className="d-flex flex-column text-left my-2 ml-3 mr-5">
                <p className="my-0"> Check out </p>
                <p className="my-0 disabled"> Add dates </p>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <span className="vl"></span>

          <Dropdown>
            <Dropdown.Toggle className="d-flex flex-row bg-button rounded-border-32">
              <div className="d-flex flex-column text-left my-2 ml-3 mr-5">
                <p className="my-0"> Guests </p>
                <p className="my-0 disabled"> Add guests </p>
              </div>
              <i id="search-i" className="bi bi-search d-flex align-self-center my-auto ml-4 red-search"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </span>
      </div>
    );
  }
}
