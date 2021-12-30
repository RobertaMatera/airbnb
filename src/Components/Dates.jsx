import "react-dates/initialize";

import { DateRangePicker } from "react-dates";

import React, { Component } from "react";

import { Button } from "react-bootstrap";

export default class Dates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  render() {
    return (
      <>
        <div>
          <DateRangePicker
            startDateId="startDate"
            endDateId="endDate"
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={({ startDate, endDate }) => {
              this.setState({ startDate, endDate });
            }}
            focusedInput={this.state.focusedInput}
            onFocusChange={(focusedInput) => {
              this.setState({ focusedInput });
            }}
          />
        </div>
        <div className="d-flex flex-row">
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
      </>
    );
  }
}
