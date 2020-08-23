import React, { useContext, useEffect } from "react";

import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import { ProductsContext } from "../../products-context";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";

import Products from "./components/products";

const InventoryPage = ({ history }) => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const { state, setState } = useContext(ProductsContext);
  const handleToastClick = () => {
    history.push("/outgoing");
  };
  useEffect(() => {
    if (!user || !token) return history.push("/");
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProducts = async () => {
    try {
      const response = await api.get("/products", {
        headers: { "auth-token": token },
      });
      setState({ ...state, products: response.data });
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const handleChange = (e, product) => {
    const { value } = e.target;
    if (!Number(value) && !value) return;
    if (value >= 0 && value <= product.stock) {
      const products = state.products;
      const index = products.indexOf(product);
      //products[index] = { ...product };
      products[index].count = value;
      setState({ ...state, products: products });
    }
  };
  const handleClick = (product) => {
    const products = state.products;
    const index = products.indexOf(product);
    //products[index] = { ...product };
    products[index].added = !product.added;
    setState({ ...state, products });
    if (product.added) {
      toast.success(
        <span onClick={handleToastClick}>
          Added {product.name} ({product.count}
          {product.count > 1 ? "pcs." : "pc."}) to Outgoing!
        </span>,
        {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } else {
      toast.error(
        <span onClick={handleToastClick}>
          Removed {product.name} ({product.count}
          {product.count > 1 ? "pcs." : "pc."}) from Outgoing!
        </span>,
        {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  };

  // useEffect(() => {
  //   getProducts();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const getProducts = async () => {
  //   try {
  //     const response = await api.get("/products", {
  //       headers: { "auth-token": token },
  //     });
  //     //console.log(response);
  //     setState({ products: response.data });
  //   } catch (error) {
  //     console.log(error);
  //     console.log(error.response.data);
  //   }
  // };

  return (
    <div className="inventory">
      <ul className="products">
        <Products
          products={state.products}
          onChange={handleChange}
          onClick={handleClick}
        />
      </ul>
      <ToastContainer />
    </div>
  );
};
//displayProducts()
export default InventoryPage;
