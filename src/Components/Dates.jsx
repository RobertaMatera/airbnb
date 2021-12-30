import "react-dates/initialize";

import { DayPickerRangeController } from "react-dates";

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
          <DayPickerRangeController
            numberOfMonths={2}
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
        
      </>
    );
  }
}
