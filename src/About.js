import React, { Component } from 'react';
import { people } from './data';

class About extends Component {
  render() {
    return (
      <main>
        <h1>About Us</h1>
        {people.map(person => <Person {...person} />)}
      </main>
    );
  }
}

const Person = ({name, position, email, about, img}) => (
    <div class="person">
    <h2>{name} - {position}</h2>
    <img src={`./img/${img}`} />
    <address><a href={`mailto:${email}`}>{email}</a></address>
    <div class="description">{about}</div>
    </div>
)


export default About;
