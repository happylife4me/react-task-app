import React from "react";

import { ProductCollection } from "./EleProductsJson";

//1. create the isContext
const ProductsContext = React.createContext();

export default class EleProductsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Products: ProductCollection };
  }

  render() {
    return (
      // Render Data in Context using Provider
      <ProductsContext.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </ProductsContext.Provider>
    );
  }
}
