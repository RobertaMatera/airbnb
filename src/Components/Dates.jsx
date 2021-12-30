import "react-dates/initialize";

import { DayPickerRangeController } from "react-dates";

import React, { Component } from "react";
import moment from 'moment';

import { Button } from "react-bootstrap";

export default class Dates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: 'startDate',
    };
  }

  render() {
    return (
      <>
        <div>
          <DayPickerRangeController
            numberOfMonths = {2}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={({ startDate, endDate }) => {
              console.log('on date change', startDate, endDate)
              this.setState({ startDate, endDate });
            }}
            focusedInput={this.state.focusedInput}
            onFocusChange={(focusedInput) => {
              console.log('focus input')
              this.setState({ focusedInput });
            }}
          />
        </div>
        
      </>
    );
  }
}
