import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import logo from './logo.png';
import './App.css';

//Toggles nav menu visibility
const toggleNav = () =>
  document.querySelector('nav').classList.toggle('toggle-menu');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a id="toggle-link" href="#" onClick={toggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
              <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z" />
            </svg>
          </a>
        </header>
        <div id="wrapper">
          <nav class="toggle-menu">
            <ul>
              <NavLinkItem anchor="Home" path="/" />
              <NavLinkItem anchor="About Us" path="/about" />
              <NavLinkItem anchor="Contact" path="/contact" />
            </ul>
          </nav>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/contact" render={() => <Contact />} />
        </div>
      </div>
    );
  }
}

const NavLinkItem = ({ anchor, path }) => (
  <li>
    <NavLink exact to={path} activeClassName="active" onClick={toggleNav}>
      {anchor}
    </NavLink>
  </li>
);

export default App;
