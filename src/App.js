import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/aboutUs";
import Contact from "./pages/ContactUs";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
