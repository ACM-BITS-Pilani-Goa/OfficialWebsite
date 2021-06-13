import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/aboutUs/index";
import Contact from "./pages/contactUs/index";
// import MemberCard from "./components/MemberCard";
import Team from "./components/Team";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Team />
    </Router>
  );
};

export default App;
