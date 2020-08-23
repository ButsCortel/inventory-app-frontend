import React from "react";
import Product from "./product";

const Products = ({ onChange, products, onClick, showModal }) => {
  return products.map((product) => (
    <Product
      key={product.p_id}
      onChange={onChange}
      onClick={onClick}
      product={product}
      showModal={showModal}
    />
  ));
};

export default Products;
