import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "mapbox-gl/dist/mapbox-gl.css";
import { ProductsProvider } from "./context/ProductsContext";
import "@yext/answers-react-components/bundle.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
