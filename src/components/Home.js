import React, { Component } from "react";
import Carousel from "./Carousel";
import ArrivalsTopsold from "./ArrivalsTopsold";
import CarD from "./CarD";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <CarD />
        <ArrivalsTopsold />
      </div>
    );
  }
}
