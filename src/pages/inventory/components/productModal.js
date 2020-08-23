import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ProductModal = ({ product, show, toggle }) => {
  return (
    <div>
      <Modal isOpen={show} toggle={toggle}>
        <ModalHeader>{product.name}</ModalHeader>
        <ModalBody>
          <header
            style={{
              backgroundImage: `url(${product.thumbnail_url})`,
              backgroundSize: "100% 100%",
              width: "200px",
              height: "200px",
            }}
          />
          <div className="product-info">
            <span>{product.description}</span>
            <span>&#8369;{product.price}</span>
            <span style={product.stock ? { color: "green" } : { color: "red" }}>
              {product.stock ? "In stock: " + product.stock : "Out of Stock"}
            </span>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default ProductModal;
