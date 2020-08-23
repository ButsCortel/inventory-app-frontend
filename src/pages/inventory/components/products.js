import React from "react";
import Product from "./product";

const Products = ({ onChange, products, onClick }) => {
  return products.map((product) => (
    <Product
      key={product.p_id}
      onChange={onChange}
      onClick={onClick}
      product={product}
    />
  ));
};

export default Products;
