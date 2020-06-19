import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../Context";

export default class BodyCare extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="back1">
              <Title name="Body Care " title="products" />
            </div>
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products
                    .filter((product) => product.category === "BODY CARE")
                    .map((product) => {
                      return <Product key={product.id} product={product} />;
                    });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
