import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <App />
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
