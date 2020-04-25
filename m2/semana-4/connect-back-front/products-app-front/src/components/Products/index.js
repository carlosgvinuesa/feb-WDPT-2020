import React, { Component } from "react";
import Card from "../Card";
import { getProducts, login } from "../../services/productsService";

class Products extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    login().then(() => {
      getProducts().then((res) => {
        const { result: products } = res.data;
        this.setState({ products });
      });
    });
  }

  render() {
    return (
      <section className="uk-section">
        <div className="uk-container">
          {this.state.products.length > 0 ? (
            <div className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-3">
              {this.state.products.map((product, index) => (
                <Card key={index} {...product} />
              ))}
            </div>
          ) : (
            <div className="uk-alert-primary" uk-alert="true">
              <p>No hay productos por el momento</p>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Products;