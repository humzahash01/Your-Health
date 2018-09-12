import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            id="toggle-link"
            href="#"
            onClick={() =>
              document.querySelector('nav').classList.toggle('toggle-menu')
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
              <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z" />
            </svg>
          </a>
        </header>
        <div id="wrapper">
          <nav class="toggle-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
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

export default App;
