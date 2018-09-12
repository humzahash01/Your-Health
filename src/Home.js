import React, { Component } from 'react';
import { homeArticles } from './data';

class Home extends Component {
  render() {
    return (
      <main>
        <img id="home-splash" src="./img/mental-health.png" />
        {homeArticles.map(article => (
          <Article {...article} />
        ))}
      </main>
    );
  }
}

const Article = ({ title, content, img }) => (
  <article>
    <img src={`./img/${img.name}`} alt={img.alt} />
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  </article>
);

export default Home;
