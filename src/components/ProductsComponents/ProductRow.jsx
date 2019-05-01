import React from "react";

export default class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      Product: props.Product
    };
  }

  inputTextChange = e => {
    console.log(e.target.value);
    let { Product } = this.state;
    Product.qty = e.target.value;
    const total = Product.qty * Product.price;
    this.setState({
      Product,
      total
    });
    this.props.updateProdAndTotal(Product);
  };

  render() {
    let { Product } = this.state;
    return (
      <tr>
        <td vertical-align="center">
          <img
            src={Product.thumbImg}
            alt={Product.title}
            height="50"
            width="50"
          />
        </td>
        <td>{Product.title}</td>
        <td>In stock</td>
        <td className="text-left">&#8360; {Product.price.toFixed(2)}</td>
        <td>
          <div>
            <b>x</b>
          </div>
        </td>
        <td>
          <input
            className="form-control"
            type="text"
            value={Product.qty}
            onChange={this.inputTextChange}
          />
        </td>
        <td>
          {this.state.total > 0 && (
            <div>
              <b>&#8360; {this.state.total.toFixed(2)}</b>
            </div>
          )}
        </td>
      </tr>
    );
  }
}
