import React, { useState } from "react";
import { Button, Input, Alert } from "reactstrap";
import { FaMinus, FaPlus } from "react-icons/fa";

const Product = ({ onClick, product, onChange }) => {
  // const [count, setCount] = useState(0);
  // const [added, setAdded] = useState(false);
  // const [state, setState] = useState({
  //   count: 0,
  //   added: false,
  // });
  // const handleClick = () => {
  //   setState({ ...state, added: !state.added });
  //   if (!state.added) return onClick(true, product.name);
  //   onClick(false, product.name);
  // };
  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   if (!Number(value) && !value) return;
  //   if (value >= 0 && value <= product.stock) {
  //     setState({ ...state, count: value });
  //   }
  // };
  return (
    <li key={product.p_id}>
      <header
        style={{
          backgroundImage: `url(${product.thumbnail_url})`,
          backgroundSize: "100% 100%",
        }}
      />
      <strong>{product.name}</strong>
      {/* <span>Date: {moment(event.date).format("l")}</span> */}
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
