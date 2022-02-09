import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Pests from "./pages/Pests";
import PestDetail from "./pages/PestDetail";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        <Route path="/pest/:id" children={<PestDetail />}></Route>
        <Route path="/resources">
          <Resources />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
