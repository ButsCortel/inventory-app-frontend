import React, { useState } from "react";
import { Button, Input, Alert } from "reactstrap";
import { FaMinus, FaPlus } from "react-icons/fa";

const Product = ({ onClick, product, onChange, showModal }) => {
  return (
    <li key={product.p_id} onClick={() => showModal(product)}>
      <header
        style={{
          backgroundImage: `url(${product.thumbnail_url})`,
          backgroundSize: "100% 100%",
        }}
      />
      <strong>{product.name}</strong>
      <span>&#8369;{parseFloat(product.price).toFixed(2)}</span>
      <span>{product.description}</span>
      <span style={product.stock ? { color: "green" } : { color: "red" }}>
        {product.stock ? "In stock: " + product.stock : "Out of Stock"}
      </span>
      <div id="controls" disabled={!product.stock}>
        <Input
          type="number"
          id="count"
          value={product.count}
          disabled={product.added}
          onChange={(e) => onChange(e, product)}
        />

        <Button
          disabled={product.count > 0 ? false : true}
          onClick={() => onClick(product)}
          className={product.added ? "added" : "outgoing"}
        >
          {product.added ? (
            <>
              <FaMinus />
              Remove
            </>
          ) : (
            <>
              <FaPlus />
              Add
            </>
          )}
        </Button>
      </div>
    </li>
  );
};

export default Product;
