import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Foter from "./components/Foter";
import About from "./components/About";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import ProductCosmitic from "./components/ProductCosmitic";
import BodyCare from "./components/BodyCare";
import HealthyFood from "./components/HealthyFood";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import { CubeGrid } from "styled-loaders-react";

class App extends Component {
  state = {
    loading: true,
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 3000);
  };
  render() {
    return this.state.loading ? (
      <CubeGrid color="black" size="60px" className="load" />
    ) : (
      <React.Fragment>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ProductList" component={ProductList} />
          <Route path="/ProductCosmitic" component={ProductCosmitic} />
          <Route path="/Contact" component={Contact} />
          <Route path="/BodyCare" component={BodyCare} />
          <Route path="/HealthyFood" component={HealthyFood} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/About" component={About} />
          <Route component={Default} />
        </Switch>
        <Foter />
        <Modal />
      </React.Fragment>
    );
  }
}
export default App;
