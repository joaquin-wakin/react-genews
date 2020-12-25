import React from "react";
import { Switch, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

import Header from "./Header";
import TodaysHeadlines from "./Headlines";
import Trending from "./pages/Trending";
import Business from "./pages/Business";
import Footer from "./Footer";

import PrivacyPolicy from "./pages/PrivacyPolicy";

import GetHeadlines from "./GetHeadlines";
import Disabled from "./Disabled";

const App = () => {
  return (
    <div id="app-container">
      <Header />
      <ScrollToTop />

      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            Disabled();
            GetHeadlines();
            return <TodaysHeadlines />;
          }}
        />

        <Route
          path="/trending"
          component={() => {
            Disabled();
            return <Trending />;
          }}
        />

        <Route
          path="/business"
          component={() => {
            Disabled();
            return <Business />;
          }}
        />

        <Route
          path="/privacy-policy"
          component={() => {
            Disabled();
            return <PrivacyPolicy />;
          }}
        />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
