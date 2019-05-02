import React from "react";

import ProductsContext from "./EleProductsProvider";

export default class EleProducts extends React.Component {
  render() {
    return (
      <div>
        <ProductsContext.Consumer>
          <div className="container">
            <table id="cart" className="table table-hover table-condensed">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th className="text-center">Subtotal</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-th="Product">
                    <div className="row">
                      <div className="col-sm-2 hidden-xs">
                        <img
                          src="http://placehold.it/100x100"
                          alt="..."
                          className="img-responsive"
                        />
                      </div>
                      <div className="col-sm-10">
                        <h4 className="nomargin">Product 1</h4>
                        <p>
                          Quis aute iure reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                          dolor sit amet.
                        </p>
                      </div>
                    </div>
                  </td>
                  <td data-th="Price">$1.99</td>
                  <td data-th="Quantity">
                    <input
                      type="number"
                      className="form-control text-center"
                      value="1"
                    />
                  </td>
                  <td data-th="Subtotal" className="text-center">
                    1.99
                  </td>
                  <td className="actions" data-th="">
                    <button className="btn btn-info btn-sm">
                      <i className="fa fa-refresh" />
                    </button>
                    <button className="btn btn-danger btn-sm">
                      <i className="fa fa-trash-o" />
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="visible-xs">
                  <td className="text-center">
                    <strong>Total 1.99</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#hello" className="btn btn-warning">
                      <i className="fa fa-angle-left" /> Continue Shopping
                    </a>
                  </td>
                  <td colspan="2" className="hidden-xs" />
                  <td className="hidden-xs text-center">
                    <strong>Total $1.99</strong>
                  </td>
                  <td>
                    <a href="#hello" className="btn btn-success btn-block">
                      Checkout <i className="fa fa-angle-right" />
                    </a>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </ProductsContext.Consumer>
      </div>
    );
  }
}
