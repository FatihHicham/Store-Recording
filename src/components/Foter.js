import React, { Component } from "react";
import SocialFollow from "./SocialFollow";
import logoF from "../logoF.png";

import {
  Footer,
  FooterSection,
  FooterDropDownSection,
  FooterLinkList,
} from "react-mdl";

export default class Foter extends Component {
  render() {
    return (
      <Footer size="mega">
        <FooterSection type="middle">
          <FooterDropDownSection title="Company info">
            <FooterLinkList>
              <img src={logoF} alt="store" className="logo2" />
              <a>
                {" "}
                <i className="fas fa-envelope-open-text">
                  {" "}
                  jamal-business-group@hotmail.com
                </i>
              </a>
              <a>
                <i className="fas fa-phone-square-alt"> (+43) 676-471-638-3</i>
              </a>
              <a>
                <i className="fas fa-address-card"> Australia</i>
              </a>
            </FooterLinkList>
          </FooterDropDownSection>
          <FooterDropDownSection title="Information">
            <FooterLinkList>
              <a>
                <i>Delivery</i>
              </a>
              <a>
                <i>Delivery information</i>
              </a>
            </FooterLinkList>
          </FooterDropDownSection>
          <FooterDropDownSection title="Customer service">
            <FooterLinkList>
              <a>
                <i>CGV</i>
              </a>
              <a>
                {" "}
                <i>Privacy policy</i>
              </a>
              <a>
                {" "}
                <i>Merchandise return</i>
              </a>
            </FooterLinkList>
          </FooterDropDownSection>
          <FooterDropDownSection title="FAQ">
            <FooterLinkList>
              <a>
                {" "}
                <i>Questions</i>
              </a>
              <a>
                <i>Answers</i>
              </a>
              <a>
                {" "}
                <i>Contact Us</i>
              </a>
            </FooterLinkList>
          </FooterDropDownSection>
        </FooterSection>
        <SocialFollow />
        <FooterSection type="bottom">
          <div className="text-center">
            <h4>
              We discover Moroccan secrets for you to be naturally beautiful and
              healthy !
            </h4>
            &copy; Copyright {new Date().getFullYear()} | Moroccan Spirit All
            Right Reserved | Terms Of Service | Privacy
          </div>
        </FooterSection>
      </Footer>
    );
  }
}
