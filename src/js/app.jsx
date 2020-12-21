import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./header";
import Headlines from "./headlines";
import Trending from "./trending";
import Footer from "./footer";

const App = () => {
  return (
    <div id="app-container">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Headlines} />
        </Switch>

        {/* <Footer /> */}
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
