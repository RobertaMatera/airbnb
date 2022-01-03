import React, { Component } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import Dates from "./Dates";

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

            <Dropdown.Menu
              id="flexible-menu"
              className="bg-button rounded-border-32 p-4 mt-3"
            >
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

            <Dropdown.Menu className="calendar-box p-2">
              <Dates />
              <div className="d-flex flex-row justify-content-start pl-3">
                <Button
                  type="button"
                  className="d-flex d-inline align-items-center day-button py-0 px-1 mx-1 target"
                >
                  <p className="my-auto p-2"> ± 1 day</p>
                </Button>
                <Button
                  type="button"
                  className="d-flex d-inline align-items-center day-button py-0 px-1 mx-1 target"
                >
                  <p className="my-auto p-2"> ± 2 days</p>
                </Button>
                <Button
                  type="button"
                  className="d-flex d-inline align-items-center day-button py-0 px-1 mx-1 target"
                >
                  <p className="my-auto p-2"> ± 3 days</p>
                </Button>
                <Button
                  type="button"
                  className="d-flex d-inline align-items-center day-button py-0 px-1 mx-1 target"
                >
                  <p className="my-auto p-2"> ± 7 days</p>
                </Button>
              </div>
            </Dropdown.Menu>
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
              <i
                id="search-i"
                className="bi bi-search d-flex align-self-center my-auto ml-4 red-search rounded-button-100"
              ></i>
            </Dropdown.Toggle>

            <Dropdown.Menu
              id="guests-menu"
              className="bg-button rounded-border-32 p-4 mt-3"
            >
              <div className="d-flex flex-row">
                <div className="p-4">
                  <p className="my-0">Adults</p>
                  <p className="my-0 disabled">Ages 13 or above</p>
                </div>
                <div className="d-flex flex-row align-items-center ml-auto">
                  <Button className="rounded-button rounded-button-100">
                    <p className="my-auto"> - </p>
                  </Button>
                  <p className="my-0 mx-2">0</p>
                  <Button className="rounded-button rounded-button-100">
                    <p className="my-auto"> + </p>
                  </Button>
                </div>
              </div>

              <div className="d-flex flex-row">
                <div className="p-4">
                  <p className="my-0">Children</p>
                  <p className="my-0 disabled">Ages 2-12</p>
                </div>
                <div className="d-flex flex-row align-items-center ml-auto">
                  <Button className="rounded-button rounded-button-100">
                    <p className="my-auto"> - </p>
                  </Button>
                  <p className="my-0 mx-2">0</p>
                  <Button className="rounded-button rounded-button-100">
                    <p className="my-auto"> + </p>
                  </Button>
                </div>
              </div>

              <div className="d-flex flex-row">
                <div className="p-4">
                  <p className="my-0">Infants</p>
                  <p className="my-0 disabled">Under 2</p>
                </div>
                <div className="d-flex flex-row align-items-center ml-auto">
                  <Button className="rounded-button rounded-button-100">
                    <p className="my-auto"> - </p>
                  </Button>
                  <p className="my-0 mx-2">0</p>
                  <Button className="rounded-button rounded-button-100">
                    <p className="my-auto"> + </p>
                  </Button>
                </div>
              </div>

              <div className="d-flex flex-row">
                <div className="p-4">
                  <p className="my-0">Pets</p>
                  <a id="link-animal" href="">
                    Bringing an assistance animal?
                  </a>
                </div>
                <div className="d-flex flex-row align-items-center ml-auto">
                  <Button className="rounded-button rounded-button-100">
                    <p className="my-auto"> - </p>
                  </Button>
                  <p className="my-0 mx-2">0</p>
                  <Button className="rounded-button rounded-button-100">
                    <p className="my-auto"> + </p>
                  </Button>
                </div>
              </div>

              <div className="p-4">
                <p className="disabled">
                  If you're lucky enough to have more than 2 pets with you, be
                  sure to let your Host know.
                </p>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </span>
      </div>
    );
  }
}
