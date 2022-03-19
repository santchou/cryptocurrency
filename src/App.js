import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography } from "antd";

import {
  Navbar,
  Homepage,
  News,
  Cryptocurrencies,
  CryptoDetails,
} from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>

              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Copyright © 2022 <Link to="/">Cryptocurrencies.</Link> <br />
          </Typography.Title>

          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default App;
