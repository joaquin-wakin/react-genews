import React from "react";
import { Switch, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import PageTitle from "./PageTitle";

import Header from "./Header";
import MobileNavigation from "./MobileNavigation";
import TodaysHeadlines from "./Headlines";
import Trending from "./pages/Trending";
import Business from "./pages/Business";
import Footer from "./Footer";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

import GetHeadlines from "./GetHeadlines";
import Disabled from "./Disabled";

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
            Disabled();
            GetHeadlines();

            return (
              <PageTitle title="GENEWS | Get the latest news">
                <TodaysHeadlines {...props} />
              </PageTitle>
            );
          }}
        />

        <Route
          path="/trending"
          component={(props) => {
            Disabled();

            return (
              <PageTitle title="GENEWS | Trending">
                <Trending {...props} />
              </PageTitle>
            );
          }}
        />

        <Route
          path="/business"
          component={(props) => {
            Disabled();

            return (
              <PageTitle title="GENEWS | Business">
                <Business {...props} />
              </PageTitle>
            );
          }}
        />

        <Route
          path="/privacy-policy"
          component={(props) => {
            Disabled();

            return (
              <PageTitle title="GENEWS | Privacy Policy">
                <PrivacyPolicy {...props} />
              </PageTitle>
            );
          }}
        />

        <Route
          path="/terms-&-conditions"
          component={(props) => {
            Disabled();

            return (
              <PageTitle title="GENEWS | Terms & Conditions">
                <TermsAndConditions {...props} />
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
