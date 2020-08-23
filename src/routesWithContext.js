// import React, { useState, useEffect } from "react";
// import InventoryPage from "./pages/inventory";
// import ProductsPage from "./pages/products";
// import HistoryPage from "./pages/history";
// import OutgoingPage from "./pages/outgoing";
// import { ProductsProvider } from "./products-context";
// import { Route, Redirect } from "react-router-dom";
// import api from "./services/api";

// const RoutesWithContext = () => {
//   const [state, setState] = useState({
//     products: [],
//   });
//   const value = { state, setState };
//   const user = localStorage.getItem("user");
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     getProducts();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const getProducts = async () => {
//     try {
//       const response = await api.get("/products", {
//         headers: { "auth-token": token },
//       });
//       //console.log(response);
//       setState({ ...state, products: response.data });
//     } catch (error) {
//       console.log(error.response.data);
//     }
//   };
//   return (
//     <ProductsProvider value={value}>
//       <Route path="/inventory" exact component={InventoryPage} />
//       <Route path="/products" exact component={ProductsPage} />
//       <Route path="/history" exact component={HistoryPage} />
//       <Route path="/outgoing" exact component={OutgoingPage} />
//     </ProductsProvider>
//   );
// };

// export default RoutesWithContext;
