import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./pages/Portfolio/Portfolio";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="portfolio" component={Portfolio} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
