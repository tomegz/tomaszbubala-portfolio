import React from 'react';
import Link from "gatsby-link";
import Socials from '../components/Socials';

const projects = [
  {
    name: "3D Estate",
    slug: "3d-estate",
    image_url: require("../static/images/project-3destate.png")
  },
  {
    name: "Price tag generator",
    slug: "price-tag-generator",
    image_url: require("../static/images/project-ptg.png")
  },
  {
    name: "Scrabblista",
    slug: "scrabblista",
    image_url: require("../static/images/project-scrabblista.png")
  }
];

const ProjectsPage = () => (
  <div className="projects-page">
    <h1>Projects</h1>
    <div className="page-desc">
      <p>Between learning new skills online, <a href="https://twitter.com/Codecademy/status/862357431795556352" target="_blank">participating in challenges</a> and trying to contribute on <a href="https://stackoverflow.com/users/7475314/tomasz-buba%c5%82a?tab=profile" target="_blank">StackOverflow</a> and various slack channels, I mostly focus on doing personal projects. Below are some of them - the ones I am most proud of. Visit my <a href="https://github.com/tomegz" target="_blank">GitHub</a> to see almost every project I've done in the past months, including <a href="https://github.com/tomegz/tomaszbubala-portfolio" target="_blank">portfolio</a>.</p>
    </div>
    <div className="portfolio-wrapper">
      {projects.map((project, i) => (
        <div key={i} className="portfolio-item">
          <Link to={`/project/${project.slug}`} style={{ textDecoration: "none" }}>
            <div className="portfolio-item-image" 
                 style={{ backgroundImage: `url(${project.image_url})`}}>
            </div>
            <div className="portfolio-item-title-wrapper">
              <div className="portfolio-item-title">
                {project.name}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
    <footer>
      <Socials />
    </footer>
  </div>
)

export default ProjectsPage;