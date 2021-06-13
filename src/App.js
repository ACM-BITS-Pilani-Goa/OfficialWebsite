import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;
