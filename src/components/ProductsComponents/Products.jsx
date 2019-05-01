import React, { Component } from "react";
import "./Products.css";
import ProductRow from "./ProductRow";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: [
        {
          id: 1,
          qty: 0,
          thumbImg:
            "https://www.whiskas.de/content/img/product/thumb/5900951265358.png",
          detailImg:
            "https://www.whiskas.de/content/img/product/detail/5900951265358.png",
          title: "1+ Mit Huhn 800g",
          detail:
            "Wir von Whiskas® verstehen was Ihre Katze von Natur aus braucht und liebt. Deshalb ist Whiskas® 1+ zu 100% komplett und ausgewogen, mit einem optimalen Verhältnis an Vitaminen und Mineralien, damit Sie Ihrer Katze die bestmögliche Fürsorge zukommen lassen können. Unsere Mahlzeiten bieten alles, was Ihre Katze für ein langes und glückliches Leben benötigt.",
          price: 80
        },
        {
          id: 2,
          qty: 0,
          thumbImg:
            "https://www.whiskas.de/content/img/product/thumb/5900951259098.png",
          detailImg:
            "https://www.whiskas.de/content/img/product/detail/5900951259098.png",
          title: "1+ Mit Rind 800g",
          detail:
            "Wir von Whiskas® verstehen was Ihre Katze von Natur aus braucht und liebt. Deshalb ist Whiskas® 1+ zu 100% komplett und ausgewogen, mit einem optimalen Verhältnis an Vitaminen und Mineralien, damit Sie Ihrer Katze die bestmögliche Fürsorge zukommen lassen können. Unsere Mahlzeiten bieten alles, was Ihre Katze.",
          price: 90
        },
        {
          id: 3,
          qty: 0,
          thumbImg:
            "https://www.whiskas.de/content/img/product/thumb/5900951259289.png",
          detailImg:
            "https://www.whiskas.de/content/img/product/detail/5900951259289.png",
          title: "Indoor mit Huhn 800g",
          detail:
            "Wir von Whiskas® verstehen, was ihre Katze von Natur aus braucht und liebt. Indoor Katzen können weniger aktiv sein als Outdoor Katzen. Deshalb wurde Whiskas® Indoor mit hochwertigen Inhaltsstoffen entwickelt.",
          price: 198.98
        },
        {
          id: 4,
          qty: 0,
          thumbImg:
            "https://www.whiskas.de/content/img/product/thumb/5900951259470.png",
          detailImg:
            "https://www.whiskas.de/content/img/product/detail/5900951259470.png",
          title: "7+ Mit Huhn 800g",
          detail:
            "Wir von Whiskas® verstehen was Ihre Katze von Natur aus braucht und liebt.Im Laufe der Zeit ändern sich die Ernährungsbedürfnisse Ihrer Katze. Deshalb wurde Whiskas® 7+ speziell mit den richtigen Gehalt an Nährstoffen entwickelt, um die Vitalität Ihrer Katze zu bewahren und Ihnen zu ermöglichen Ihr die bestmögliche Fürsorge zukommen lassen zu können.",
          price: 9.99
        },
        {
          id: 5,
          qty: 0,
          thumbImg:
            "https://www.whiskas.de/content/img/product/thumb/5900951265310.png",
          detailImg:
            "https://www.whiskas.de/content/img/product/detail/5900951265310.png",
          title: "Junior Mit Lachs 800g",
          detail:
            "Wir von Whiskas® verstehen was Ihr Kätzchen von Natur aus braucht und liebt. Deshalb enthält Whiskas® 2-12 Monate alle, für die gesunde Entwicklung Ihres Kätzchens notwendigen Nährstoffe. Und es enthält leckere, mit Milch gefüllte Knackits®, welche Ihr.",
          price: 21.85
        }
      ],
      total: 0
    };
  }

  updateProdAndTotal = prod => {
    console.log("updated object", prod);
    let { Products } = this.state;
    const index = Products.findIndex(Product => Product.id === prod.id);

    Products[index] = prod;
    this.setState({ Products });
    this.totalCal();
  };

  totalCal = () => {
    let total = 0.0;
    this.state.Products.forEach(prod => {
      total += prod.qty * prod.price;
    });
    this.setState({ total });
  };

  render() {
    return (
      <div>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">E-COMMERCE CART</h1>
          </div>
        </section>

        <div className="container mb-4">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col"> </th>
                      <th scope="col">Product</th>
                      <th scope="col">Available</th>
                      <th scope="col" className="text-center">
                        Price
                      </th>
                      <th />
                      <th scope="col" className="text-center">
                        Quantity
                      </th>
                      <th scope="col" className="text-center">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.Products.map((prod, index) => (
                      <ProductRow
                        key={prod.id}
                        Product={prod}
                        updateProdAndTotal={this.updateProdAndTotal}
                      />
                    ))}
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>Sub-Total</td>
                      <td className="text-right">
                        &#8360; {this.state.total.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>Shipping</td>
                      <td className="text-right">&#8360; 0.0</td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td className="text-right">
                        <strong>&#8360; {this.state.total.toFixed(2)}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col mb-2">
              <div className="row">
                <div className="col-sm-12  col-md-6">
                  <button className="btn btn-block btn-light">
                    Continue Shopping
                  </button>
                </div>
                <div className="col-sm-12 col-md-6 text-right">
                  <button className="btn btn-lg btn-block btn-success text-uppercase">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
