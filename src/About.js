import React, { Component } from 'react';
import { people } from './data';

class About extends Component {
  render() {
    return (
      <main>
        <h1>About Us</h1>
        <ul>
          {people.map(person => (
            <li>
              <Person {...person} />
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

const Person = ({ name, position, email, about, img }) => (
  <div class="person">
    <h2>
      {name} - {position}
    </h2>
    <div class="person-info">
      <img src={`./img/${img}`} />
      <div class="person-details">
      <div class="person-description">{about}</div>
        <address>
          <a href={`mailto:${email}`}>{email}</a>
        </address>
        
      </div>
    </div>
  </div>
);

export default About;
