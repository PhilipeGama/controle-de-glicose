import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/login";
import { Home } from "./pages/home";

import { isAuthenticated } from "./services/auth";
import App from "./App";

const PrivateRoute = ({ component: Component, ...rest }) => {
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Navigate
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />;
};

const Routers = () => {
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Route>
  </Routes>;
};

export default Routers;
