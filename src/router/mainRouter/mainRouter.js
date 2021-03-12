import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../../components/auth/login";
import SignUP from "../../components/auth/signUp";
import Dashboard from "../../components/dashboard";
import Products from "../../components/products/products";
import Cart from "../../components/cart/cart";
import PrivetRouter from "../privetRouter/privetRouter";
import NavBar from "../../common/navBar";
import Footer from "../../common/footer/footer";

const MainRouter = () => (
  <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/sign-up" component={SignUP}></Route>
      <PrivetRouter
        exact
        path="/dashboard"
        component={Dashboard}
      ></PrivetRouter>
      <PrivetRouter
        exact
        path="/products"
        component={Products}
      ></PrivetRouter>
      <PrivetRouter
        exact
        path="/cart"
        component={Cart}
      ></PrivetRouter>
    </Switch>
    <Footer />
  </>
);

export default MainRouter;
