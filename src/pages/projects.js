import React from 'react';
import Link from "gatsby-link";
import Socials from '../components/Socials';

const projects = [
  {
    name: "3D Estate",
    slug: "3d-estate",
    image_url: "/images/project-3destate.png"
  },
  {
    name: "Price tag generator",
    slug: "price-tag-generator",
    image_url: "/images/project-ptg.png"
  },
  {
    name: "Scrabblista",
    slug: "scrabblista",
    image_url: "/images/project-scrabblista.png"
  }
];

const ProjectsPage = () => (
  <div className="projects-page">
    <h1>Projects</h1>
    <div className="page-desc">
      <p>You can find some of the projects i was working on in the past months below.
         Not all of them are commercial, but every one of them is 100% passion.</p>
    </div>
    <div className="portfolio-wrapper">
      {projects.map(project => (
        <div className="portfolio-item">
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