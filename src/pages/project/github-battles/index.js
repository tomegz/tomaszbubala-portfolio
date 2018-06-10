import React from 'react';
import Link from "gatsby-link";
import Macbook from '../../../components/Macbook';
import Carousel from '../../../components/Carousel';
import TechStack from '../../../components/TechStack';
import Socials from '../../../components/Socials';

const desktopImages = [
  { src: require("./img/github-battles-desktop-1.png"),
    description: "Github Battles - Repositories" },
  { src: require("./img/github-battles-desktop-2.png"),
    description: "Github Battles - Choose Players" },
  { src: require("./img/github-battles-desktop-3.png"),
    description: "Github Battles - Show Scores" }
];

const ProjectGithubBattles = () => {
  const technologies = ["React", "Github API"];
  return (
    <div className="project-single">
      <h1>Github Battles</h1>
      <div className="project-links">
        <span><a href="https://github-battles-dda96.firebaseapp.com/" target="_blank">Live version</a></span>
        <span><a href="https://github.com/tomegz/github-battles" target="_blank">Source code</a></span>
      </div>
      <div className="project-inner">
        <div className="project-media-large">
          <Macbook>
            <Carousel images={desktopImages} />
          </Macbook>
        </div>
        <div className="project-description-large">
          <h2>Project</h2>
          <p>Github Battles is a fun project I've done as a part of an online course. It let me brush up my React knowledge after working with almost only vanilla JS for a few months. I learned how to use Github API and write cleaner code for asynchronous requests with ES6 Promises. I focused on making my code modular and reusable.</p>
          <TechStack technologies={technologies} />
        </div>
      </div>
      <Socials />
    </div>
  );
}

export default ProjectGithubBattles;