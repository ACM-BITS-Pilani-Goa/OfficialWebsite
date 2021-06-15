import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Events from "./pages/Events/index";
import Resources from "./pages/Resources/index";
import Team from "./pages/Team/index";
import Footer from "./components/Footer";
import ACMlogoHome from "./images/ACM logo textRight.svg";

const App = () => {
  const [load, setload] = useState(true);

  useEffect(async () => {
    await setTimeout(() => setload(false), 6000);
  }, []);
  return (
    <>
      {load ? (
        <>
          <div className="loadBackground">
            <img
              src={ACMlogoHome}
              className="bannerset"
              width="50%"
              style={{ justify: "center" }}
            />
            <div className>
              <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/events" component={Events} />
              <Route path="/aboutUs" component={Events} />
              <Route path="/resources" component={Resources} />
              <Route path="/team" component={Team} />
            </Switch>
            <Footer />
            {/* <Footer /> */}
          </Router>
        </>
      )}
    </>
  );
};

export default App;
