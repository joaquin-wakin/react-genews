import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./header";
import TodaysHeadlines from "./headlines";
import Trending from "./pages/trending";
import Business from "./pages/business";
import Footer from "./footer";

import GetHeadlines from "./scripts";
import Disabled from "./disabled";

const App = () => {
  return (
    <div id="app-container">
      <Router>
        <Header />

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              Disabled();
              GetHeadlines();
              return <TodaysHeadlines />;
            }}
          />
          <Route
            path="/trending"
            render={() => {
              Disabled();
              return <Trending />;
            }}
          />
          <Route
            path="/business"
            render={() => {
              Disabled();
              return <Business />;
            }}
          />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
