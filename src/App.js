import React from "react";
import "./styles/global.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Games from "./components/games";
import Footer from "./components/footer";
import Gamepage from "./components/gamepage";
import ScrollToTop from "./components/scrollToTop";
import StaffPicks from "./components/staffpicks";
import TriggerScrollTop from "./components/triggerScrollTop";

const App = () => (
  <Router>
    <ScrollToTop>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Games} />
        <Route exact path="/Gamepage/:id" component={Gamepage} />
      </Switch>
      <StaffPicks />
      <Footer />
      <TriggerScrollTop />
    </ScrollToTop>
  </Router>
);

export default App;
