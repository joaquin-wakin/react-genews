import React from "react";
import { Switch, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import PageTitle from "./PageTitle";

import Header from "./Header";
import MobileNavigation from "./MobileNavigation";

import TodaysHeadlines from "./Headlines";
import Business from "./pages/Business";
import COVID19 from "./pages/COVID-19";
import Politics from "./pages/Politics";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";
import Travel from "./pages/Travel";
import Trending from "./pages/Trending";

import Footer from "./Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

import PageNotFound from "./pages/PageNotFound";

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
          path="/covid-19"
          component={(props) => {
            return (
              <PageTitle title="GENEWS | COVID-19">
                <COVID19 {...props} />
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
          path="/trending"
          component={(props) => {
            return (
              <PageTitle title="GENEWS | Trending">
                <Trending {...props} />
              </PageTitle>
            );
          }}
        />

        {/* <Route
          exact
          path="/privacy-policy"
          component={(props) => {
            return (
              <PageTitle title="GENEWS | Privacy Policy">
                <PrivacyPolicy {...props} />
              </PageTitle>
            );
          }}
        />

        <Route
          exact
          path="/terms-&amp;-conditions"
          component={(props) => {
            return (
              <PageTitle title="GENEWS | Terms &amp; Conditions">
                <TermsAndConditions {...props} />
              </PageTitle>
            );
          }}
        /> */}

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
