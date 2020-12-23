import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./header";
import TodaysHeadlines from "./headlines";
import Trending from "./pages/trending";
import Business from "./pages/business";
import Footer from "./footer";

const App = () => {
  return (
    <div id="app-container">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={TodaysHeadlines} />
          <Route path="/trending" component={Trending} />
          <Route path="/business" component={Business} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
