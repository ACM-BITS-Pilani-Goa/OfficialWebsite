import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Events from "./pages/Events/index";
import Resources from "./pages/Resources/index";
import Team from "./pages/Team/index";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/aboutUs" component={Events} />
        <Route path="/resources" component={Resources} />
        <Route path="/team" component={Team} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
