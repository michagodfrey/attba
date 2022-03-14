import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Regulations from "./pages/Regulations";
import Pests from "./pages/Pests";
import PestDetail from "./pages/PestDetail";
import Error from "./pages/Error";
// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/attba">
          <Home />
        </Route>
        <Route path="/regulations">
          <Regulations />
        </Route>
        <Route path="/pests">
          <Pests />
        </Route>
        <Route path="/pest/:id" children={<PestDetail />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
