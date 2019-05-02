import React from "react";

//import "./EleProducts.css";

import EleProductsProvider from "./EleProductsProvider";
import EleProducts from "./EleProducts";

export default class EleContext extends React.Component {
  render() {
    return (
      <EleProductsProvider>
        <div className="container">
          <div>
            <strong>Shopping Cart : </strong>
          </div>
          <EleProducts />
        </div>
      </EleProductsProvider>
    );
  }
}
