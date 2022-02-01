import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Pests from "./pages/Pests";
import Resources from "./pages/Resources";
import Error from "./pages/Error";
// components
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/pests">
          <Pests />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
