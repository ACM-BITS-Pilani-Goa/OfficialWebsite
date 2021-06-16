import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Events from "./pages/Events/index";
import Resources from "./pages/Resources/index";
import Team from "./pages/Team/index";
import BDOME from "./images/Bdome.png";

const App = () => {
  const imageList = [BDOME];
  imageList.forEach((image) => {
    new Image().src = image;
  });
  const [load, setload] = useState(true);

  return (
    <>
      <>
        <Router>
          {/*<Navbar />*/}
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Home load={load} setload={setload} BDOME={BDOME} />
              )}
            />
            <Route
              path="/events"
              render={() => <Events load={load} setload={setload} />}
            />
            <Route
              path="/resources"
              render={() => <Resources load={load} setload={setload} />}
            />
            <Route
              path="/team"
              render={() => <Team load={load} setload={setload} />}
            />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </>
    </>
  );
};

export default App;
