import React, { Component } from 'react';
import './App.sass';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import ScrollUpButton from "react-scroll-up";
import Navbar from "./Components/Navbar";
import Games from "./Components/Games";
import Footer from "./Components/Footer";
import Gamepage from "./Components/Gamepage";
import ScrollToTop from "./Components/ScrollToTop";
import {Helmet} from "react-helmet";

import StaffPicks from "./Components/StaffPicks";

class App extends Component {
  state = {
    position: ''
  }

  toggleFixed = () => {
    this.setState({
        position: 'fixed'
      })
  }

  clearState = () => {
    this.setState({
        position: ''
      })
  }
  
  render() {
    const style = {
        position: this.state.position
    }   
    const buttonUpStyle = {
      position: 'fixed',
      bottom: 80,
      right: 20,
      cursor: 'pointer',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'ease-in',
      transitionDelay: '0s'
    }

    return (
      <Router>
        <ScrollToTop>
          <div className="App" style={style}>
            <Helmet>
              <title>BrainsterBox</title>
              <meta property="og:title" content="BrainsterBox" />
              <meta property="og:description" content="Вашата лична кутија со ресурси и алатки за креативна колаборација и 
              откривање на потенцијалот во твојот тим или организација." />
              <meta property="og:image" content="http://toolbox.hyperisland.com/images/fb-og.png" />
              <meta property="og:type" content="article" /> 
              <meta name="author" content="Kristijan Bobevski" />
              <meta property="og:url" content="https://bobevsky.github.io/gametime" />
              <meta name="base_url" content="https://bobevsky.github.io/gametime" />
            </Helmet>
            <Navbar fixed={this.toggleFixed} clearState={this.clearState}/>
              <Switch>
                <Route exact path="/" component={Games} />
                <Route exact path="/game/:id" component={Gamepage}/>
              </Switch>
            <StaffPicks />
            <Footer />
            <ScrollUpButton showUnder={160} style={buttonUpStyle}>
              <div className="text-center button-up">
                  <i className="fas fa-angle-up fa-2x"></i>
                  <span>ПОЧЕТОК</span>
              </div>
            </ScrollUpButton>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
