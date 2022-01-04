import React, { Component } from "react";
import { Col } from "react-bootstrap";
import SmallCard from "./SmallCard.jsx";

export default class NewTrip extends Component {
  state = {
    destinations: [
      {
        key: "1",
        src: "images/trips/trip_1.png",
        title: "Courmayeur",
        text: "110",
        backgroundColor: "#BC1A6E",
      },

      {
        key: "2",
        src: "images/trips/trip_2.png",
        title: "Bormio",
        text: "89",
        backgroundColor: "#CC2D4A",
      },
      {
        key: "3",
        src: "images/trips/trip_3.png",
        title: "Madonna di Campiglio",
        text: "94",
        backgroundColor: "#D93B30",
      },
      {
        key: "4",
        src: "images/trips/trip_4.png",
        title: "Ponte di Legno",
        text: "83",
        backgroundColor: "#DE3151",
      },
    ],
  };

  render() {
    return (
      <>
        <div className="d-flex justify-content-center">
          {this.state.destinations.map((destination) => (
            <SmallCard
              key={destination.key}
              src={destination.src}
              title={destination.title}
              text={destination.text + " " + "miles away"}
              style={destination.backgroundColor}
            />
          ))}
        </div>
      </>
    );
  }
}
