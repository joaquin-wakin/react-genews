import React from "react";
import ReactDOM from "react-dom";

import Header from "./header";
import Headlines from "./headlines";

const App = () => {
  return (
    <div id="app-container">
      <Header />
      <Headlines />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app-root"));
