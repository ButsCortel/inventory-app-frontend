import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import InventoryPage from "./pages/inventory";
import ProductsPage from "./pages/products";
import HistoryPage from "./pages/history";
import OutgoingPage from "./pages/outgoing";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={InventoryPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/history" exact component={HistoryPage} />
        <Route path="/outgoing" exact component={OutgoingPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
