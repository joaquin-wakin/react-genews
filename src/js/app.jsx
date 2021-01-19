import React from "react";
import { Switch, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import PageTitle from "./PageTitle";

import Header from "./Header";
import MobileNavigation from "./MobileNavigation";

import TodaysHeadlines from "./Headlines";
import Business from "./pages/Business";
import Health from "./pages/Health";
import Politics from "./pages/Politics";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";
import Travel from "./pages/Travel";

import Footer from "./Footer";

import PageNotFound from "./pages/PageNotFound";

window.dataLayer = window.dataLayer || [];

function gTag() {
  dataLayer.push(arguments);
}

gTag("js", new Date());

gTag("config", "G-SZ0TD1YEYR");

const App = () => {
  return (
    <>
      <Header />
      <MobileNavigation />
      <ScrollToTop />

      <Switch>
        <Route
          exact
          path="/"
          component={(props) => {
            return (
              <PageTitle title="GENEWS | Get the latest news">
                <TodaysHeadlines {...props} />
              </PageTitle>
            );
          }}
        />

        <Route
          exact
          path="/business"
          component={(props) => {
            return (
              <PageTitle title="GENEWS | Business">
                <Business {...props} />
              </PageTitle>
            );
          }}
        />

        <Route
          exact
          path="/health"
          component={(props) => {
            return (
              <PageTitle title="GENEWS | Health">
                <Health {...props} />
              </PageTitle>
            );
          }}
        />

        <Route
          exact
          path="/politics"
          component={(props) => {
            return (
              <PageTitle title="GENEWS | Politics">
                <Politics {...props} />
              </PageTitle>
            );
          }}
        />

        <Route
          exact
          path="/sports"
          component={(props) => {
            return (
              <PageTitle title="GENEWS | Sports">
                <Sports {...props} />
              </PageTitle>
            );
          }}
        />

        <Route
          exact
          path="/technology"
          component={(props) => {
            return (
              <PageTitle title="GENEWS | Technology">
                <Technology {...props} />
              </PageTitle>
            );
          }}
        />

        <Route
          exact
          path="/travel"
          component={(props) => {
            return (
              <PageTitle title="GENEWS | Travel">
                <Travel {...props} />
              </PageTitle>
            );
          }}
        />

        <Route
          exact
          path="/*"
          component={(props) => {
            return (
              <PageTitle title="GENEWS | Page not found">
                <PageNotFound {...props} />
              </PageTitle>
            );
          }}
        />
      </Switch>

      <Footer />
    </>
  );
};

export default App;
