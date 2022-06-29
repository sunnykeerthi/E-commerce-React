import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.css";
import "./sass/index.scss";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { ProductsProvider } from "./context/ProductsContext";
ReactDOM.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>,
  document.getElementById("root")
);

registerServiceWorker();
