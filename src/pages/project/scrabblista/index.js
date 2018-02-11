import React from 'react';
import Link from "gatsby-link";
import Iphone from '../../../components/Iphone';
import Macbook from '../../../components/Macbook';
import Carousel from '../../../components/Carousel';
import TechStack from '../../../components/TechStack';
import Socials from '../../../components/Socials';

const mobileImages = [
  { src: require("./img/scrabblista-mobile-1.png"),
    description: "Scrabblista - main view" },
  { src: require("./img/scrabblista-mobile-2.png"),
    description: "Scrabblista - search query entered" },
  { src: require("./img/scrabblista-mobile-3.png"),
    description: "Scrabblista - search results sorted by length" },
  { src: require("./img/scrabblista-mobile-4.png"),
    description: "Scrabblista - search results sorted by points" }
];
const desktopImages = [
  { src: require("./img/scrabblista-desktop-1.png"),
    description: "Scrabblista - main view" },
  { src: require("./img/scrabblista-desktop-2.png"),
    description: "Scrabblista - search query entered" },
  { src: require("./img/scrabblista-desktop-3.png"),
    description: "Scrabblista - search results" }
];

const ProjectScrabblista = () => {
  const technologies = ["Ruby on Rails", "Ruby", "JavaScript"];
  return (
    <div className="project-single">
      <h1>Scrabblista</h1>
      <div className="project-links">
        <span><a href="http://www.scrabblista.pl" target="_blank">Live version</a></span>
        <span><a href="https://github.com/tomegz/scrabblista" target="_blank">Source code</a></span>
      </div>
      <div className="project-inner">
        <div className="project-media">
          <Iphone>
            <Carousel images={mobileImages} />
          </Iphone>
        </div>
        <div className="project-description">
          <h2>Project</h2>
          <p>In February 2017, after three months of learning web development from online tutorials and finishing couple of small projects I decided to create my first server app. Instead of going with Facebook / Twitter/ Reddit clone, I decided to stand out and create a word finder for Scrabble. Little did I know, that effective search through over 2,700,000 scrabble-viable words (Polish dictionary), could be a complex task. After few failed attemps with optimizing SQL queries I decided to store whole dictionary in a <a href="https://en.wikipedia.org/wiki/Trie" target="_blank">Trie</a>. This choice of data structure along with <a href="https://en.wikipedia.org/wiki/Depth-first_search" target="_blank">depth-first search algorithm</a> implementation let me cut down search time to an acceptable value. Besides searching for words, that can be made from a given hand, user is also able to sort the result by word length, or highest score. In the future, if time allows me to get back to this project, I will hopefully make it twice as fast, include English dictionary and add pagination for search results.</p>
          <TechStack technologies={technologies} />
        </div>
        <div className="project-media-large">
          <Macbook>
            <Carousel images={desktopImages} />
          </Macbook>
        </div>
      </div>
      <Socials />
    </div>
  );
}

export default ProjectScrabblista;