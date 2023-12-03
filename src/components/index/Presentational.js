import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Styles.scss";
import Navbar from "../Navbar/Presentational";
import Footer from "../footer/Presentational";
import Home from "../../pages/home/Presentational";
import Menu from "../../pages/menu/Presentational";
import About from "../../pages/about/Presentational";
import Contact from "../../pages/contact/Presentational";

function AppIndex() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default AppIndex;
