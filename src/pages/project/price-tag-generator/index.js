import React from 'react';
import Link from "gatsby-link";
import Macbook from '../../../components/Macbook';
import Carousel from '../../../components/Carousel';
import TechStack from '../../../components/TechStack';
import Socials from '../../../components/Socials';

const desktopImages = [
  { src: require("./img/price-tag-generator-desktop-1.png") },
  { src: require("./img/price-tag-generator-desktop-2.png") },
  { src: require("./img/price-tag-generator-desktop-3.png") },
  { src: require("./img/price-tag-generator-desktop-4.png") },
  { src: require("./img/price-tag-generator-desktop-5.png") }
];

const ProjectPriceTagGenerator = () => {
  const technologies = ["React", "Firebase", "LocalStorage"];
  return (
    <div className="project-single">
      <h1>Price Tag Generator</h1>
      <div className="project-links">
        <span><a href="https://tomegz.github.io/price-tag-generator/" target="_blank">Live version</a></span>
        <span><a href="https://github.com/tomegz/price-tag-generator" target="_blank">Source code</a></span>
      </div>
      <div className="project-inner">
        <div className="project-media-large">
          <Macbook>
            <Carousel images={desktopImages} />
          </Macbook>
        </div>
        <div className="project-description-large">
          <h2>Project</h2>
          <p>After my first <i>big</i> project - <Link to="/project/scrabblista">Scrabblista</Link> and focusing on learning JavaScript, I wanted to create an app that solves real life problem. At a local bike shop I work at, there always was a problem of having up-to-date price tags on bikes - especially during the season. There was very little time to spend on preparing and printing them between constant sales and new shipments. Someone always had to spent hours weekly on manually entering bike names and current prices to a template. The price tags had to be quite big and double-sided to present themselves nicely on bike's handlebar - having that requirement in mind, it was hard to find an existing program to do that.</p>
          <p>I wanted to provide a solution with database, to store items' names and prices and give user ability to edit items. <a href="https://firebase.google.com/">Firebase</a> and <a href="https://reactjs.org/">React</a> seemed like a perfect fit for this task. Application's state is synced with Firebase, so a change in database made on any device is immediately visible on every device without reloading the page. This is very helpful especially if someone changes some prices at one shop, the price will be the same in every shop, even if someone was about to click <i>print</i>. As for the printing part - I was choosing between generating pdf file vs. css stylesheet for print. After seeing the complexity of generating rotated text in pdf i chose the latter. You can see the css <a href="https://github.com/tomegz/price-tag-generator/blob/master/src/styles/Pricetag.css" target="_blank">here</a> and effect it produces here. </p>
          <TechStack technologies={technologies} />
        </div>
      </div>
      <Socials />
    </div>
  );
}


export default ProjectPriceTagGenerator;