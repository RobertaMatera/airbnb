import React, { Component } from "react";
import SmallCard from "./SmallCard.jsx";

export default class NewTrip extends Component {
  state = {
    destinations: [
        {
            "key": "1",
            "src": "images/trips/trip_1.png",
            "title": "Courmayeur",
            "text": "110",
        },

        {
            "key": "2",
            "src": "images/trips/trip_2.png",
            "title": "Bormio",
            "text": "89",
        },
        {
            "key": "3",
            "src": "images/trips/trip_3.png",
            "title": "Madonna di Campiglio",
            "text": "94",
        },
        {
            "key": "4",
            "src": "images/trips/trip_4.png",
            "title": "Ponte di Legno",
            "text": "83",
        }
    ]
  } 

  render() {
    return (
      <div className="d-flex flex-row justify-content-between">
          {this.state.destinations.map(destination => (<SmallCard key={destination.key} src={destination.src} title={destination.title} text={destination.text + " " + "miles away"}/>))}
      </div>
    );
  }
}
