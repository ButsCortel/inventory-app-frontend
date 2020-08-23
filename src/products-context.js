import React, { useState, createContext } from "react";

export const ProductsContext = createContext();
export const ContextWrapper = (props) => {
  const defaultValue = () => {
    const user = localStorage.getItem("user");
    if (user) return true;
    return false;
  };
  const [state, setState] = useState({
    logged: defaultValue(),
    products: [],
  });
  const value = { state, setState };

  return (
    <ProductsContext.Provider value={value}>
      {props.children}
    </ProductsContext.Provider>
  );
};
