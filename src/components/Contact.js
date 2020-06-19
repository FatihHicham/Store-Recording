import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import SocialFollow from "./SocialFollow";
import logo2 from "../logo2.png";

class Contic extends Component {
  render() {
    return (
      <Grid className="text-center">
        <Cell phone={4} tablet={4} col={3}>
          <img src={logo2} alt="store" className="logo3" />
        </Cell>
        <Cell phone={4} tablet={4} col={3}>
          <h6 className="text-title">Billing information</h6>
          <i className="fas fa-address-card"> Australia </i>
        </Cell>
        <Cell phone={4} tablet={4} col={3}>
          <h6 className="text-title">Contact us</h6>
          <i className="fas fa-envelope-open-text">
            {" "}
            jamal-business-group@hotmail.com
          </i>
          <i className="fas fa-phone-square-alt"> (+43) 676-471-638-3</i>
        </Cell>
        <Cell phone={4} tablet={4} col={3}>
          <h6 className="text-title">Social networks</h6>
          <SocialFollow />
        </Cell>
      </Grid>
    );
  }
}

export default Contic;
