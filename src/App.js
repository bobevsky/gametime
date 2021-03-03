import React from "react";
import "./styles/global.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Brainster Box</title>
        <meta property="og:title" content="BrainsterBox" />
        <meta
          property="og:description"
          content="Вашата лична кутија со ресурси и алатки за креативна колаборација и
              откривање на потенцијалот во твојот тим или организација."
        />
        <meta property="og:image" content="http://toolbox.hyperisland.com/images/fb-og.png" />
        <meta property="og:type" content="article" />
        <meta name="author" content="Kristijan Bobevski" />
        <meta property="og:url" content="https://bobevsky.github.io/gametime/" />
        <meta name="base_url" content="https://bobevsky.github.io/gametime/" />
      </Helmet>
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
