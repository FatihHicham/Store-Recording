import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./Context";
import "./i18next";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ProductProvider>
    <Router>
      <Suspense fallback={<div></div>}>
        <App />
      </Suspense>
    </Router>
  </ProductProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
