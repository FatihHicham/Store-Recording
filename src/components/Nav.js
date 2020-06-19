import React, { useState } from "react";
import { ButtonContainer } from "./Button";
import { NavLink } from "react-router-dom";
import logo2 from "../logo2.png";
import { Textfield } from "react-mdl";
import { useTranslation } from "react-i18next";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const NavbarPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { t, i18n } = useTranslation();

  function handlClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <Navbar color="faded" light expand="lg">
        <NavbarBrand>
          <img src={logo2} alt="store" className="navbar-brand logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                to="/"
                exact
                className="nav-link text-dark"
                activeClassName="current"
              >
                <i className="fas fa-home">{t("Home.1")}</i>
              </NavLink>
            </NavItem>
            <NavItem>
              <UncontrolledDropdown>
                <DropdownToggle nav caret className="text-dark">
                  <i className="fab fa-product-hunt">
                    <b>{t("Our departments.1")}</b>
                  </i>
                </DropdownToggle>
                <DropdownMenu>
                  <NavLink to="/ProductList" activeClassName="current">
                    <DropdownItem>{t("FACE CARE.1")}</DropdownItem>
                  </NavLink>
                  <NavLink to="/ProductCosmitic" activeClassName="current">
                    <DropdownItem>{t("HAIR CARE.1")}</DropdownItem>
                  </NavLink>
                  <NavLink to="/BodyCare" activeClassName="current">
                    <DropdownItem>{t("BODY CARE.1")}</DropdownItem>
                  </NavLink>
                  <NavLink to="HealthyFood" activeClassName="current">
                    <DropdownItem>{t("HEALTHY FOOD.1")}</DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
            <NavItem>
              <NavLink
                to="/About"
                className="nav-link text-dark"
                activeClassName="current"
              >
                <i className="fas fa-users">{t("About Us.1")}</i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/Contact"
                className="nav-link text-dark"
                activeClassName="current"
              >
                <i className="fas fa-envelope">{t("Contact.1")}</i>
              </NavLink>
            </NavItem>
            <NavItem>
              <UncontrolledDropdown>
                <DropdownToggle nav caret className="text-dark">
                  <i className="fas fa-language">{t("Language.1")}</i>
                </DropdownToggle>
                <DropdownMenu>
                  <NavLink
                    to=""
                    onClick={() => handlClick("en")}
                    activeClassName="current"
                  >
                    <DropdownItem>ENG</DropdownItem>
                  </NavLink>
                  <NavLink
                    to=""
                    onClick={() => handlClick("fr")}
                    activeClassName="current"
                  >
                    <DropdownItem>FR</DropdownItem>
                  </NavLink>
                  <NavLink
                    to=""
                    onClick={() => handlClick("cze")}
                    activeClassName="current"
                  >
                    <DropdownItem>CZE</DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
          </Nav>
          <Textfield
            onChange={() => {}}
            label="Expandable Input"
            expandable
            expandableIcon="search"
          />
          <NavbarText>
            <NavLink to="/cart" className="ml-auto" activeClassName="current">
              <ButtonContainer>
                <span className="mr-2">
                  {" "}
                  <i className="fas fa-cart-plus">{t("My Cart.1")}</i>
                </span>
              </ButtonContainer>
            </NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarPage;
