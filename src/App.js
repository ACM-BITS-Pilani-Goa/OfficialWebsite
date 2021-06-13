import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/aboutUs/index";
import Contact from "./pages/contactUs/index";
import Footer from './components/Footer';

// import MemberCard from "./components/MemberCard";
import Team from "./components/Team";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutUs" component={About} />
        <Route path="/contact-us" component={Contact} />
      </Switch>
      <Team />
      <Footer />
    </Router>
  );
};

export default App;
