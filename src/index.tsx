import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.css";
import "./sass/index.scss";
import App from "./App";
import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { ProductsProvider } from "./context/ProductsContext";
import "@yext/answers-react-components/bundle.css";
ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
