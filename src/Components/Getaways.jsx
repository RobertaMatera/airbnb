import React, { Component } from "react";
import HistoricDestinations from "./HistoricDestinations";
import { Tabs, Tab } from "react-bootstrap";

export default class Getaways extends Component {

  render() {
    return (
      <Tabs defaultActiveKey="historicDestination" className="my-5">
        <Tab eventKey="historicDestination" title="Historic Destinations">
          <HistoricDestinations />
        </Tab>
        <Tab eventKey="coastalDestinations" title="Coastal Destinations">
          
        </Tab>
        <Tab eventKey="islandDestinations" title="Island Destinations">
          
        </Tab>
        <Tab eventKey="lakeDestinations" title="Lake Destinations">
          
        </Tab>
        <Tab eventKey="otherDestinations" title="Other Popular Destinations">
          
        </Tab>
      </Tabs>
    );
  }
}
