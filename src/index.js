import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { App, Article_One } from "./App";

// import "./assets/css/styles.css";
// import "./assets/css/lg-view.css";
// import "./assets/css/med-view.css";
// import "./assets/css/overrides.css";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/article_one" component={Article_One} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
