import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Export from "./pages/Export";
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
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/export">
          <Export />
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
