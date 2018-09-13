import React from 'react';
import { homeArticles } from './data';

/*Home Page Content*/
const Home = () => (
  <main>
    <h1>YourHealth Ltd.</h1>
    <img id="home-splash" src="./img/mental-health.png" />
    {homeArticles.map(article => (
      <Article {...article} />
    ))}
  </main>
);

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
