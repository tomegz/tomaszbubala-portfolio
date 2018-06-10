import React from 'react';
import Link from "gatsby-link";
import Iphone from '../../../components/Iphone';
import Macbook from '../../../components/Macbook';
import Carousel from '../../../components/Carousel';
import TechStack from '../../../components/TechStack';
import Socials from '../../../components/Socials';

const mobileImages = [
  { src: require("./img/3d-estate-mobile-1.png"),
    description: "3D Estate fullscreen minimap" },
  { src: require("./img/3d-estate-mobile-2.png"),
    description: "3D Estate tour view" }
];
const desktopImages = [
  { src: require("./img/3d-estate-desktop-1.png"),
    description: "3D Estate tour - room 1" },
  { src: require("./img/3d-estate-desktop-2.png"),
    description: "3D Estate tour - room 2" },
  { src: require("./img/3d-estate-desktop-3.png"),
    description: "3D Estate tour - room 3" }
];

const Project3dEstate = () => {
  const technologies = ["A-Frame", "Three.js", "Node.js", "MongoDB", "AWS S3", "Pug", "Sass"];
  return (
    <div className="project-single">
      <h1>3D Estate</h1>
      <div className="project-links">
        <span><a href="http://www.3destate.pl/" target="_blank">Product website</a></span>
        <span><a href="https://obido.pl/app/obido-green-mokotow/mieszkanie9_A_3_2.3dpreview.5b96e7d83e0e10889c90069434acb08b" target="_blank">Example tour</a></span>
      </div>
      <div className="project-inner">
        <div className="project-media">
          <Iphone>
            <Carousel images={mobileImages} />
          </Iphone>
        </div>
        <div className="project-description">
          <h2>Project</h2>
          <p>In October 2017 I met up with <a href="http://www.digitalwanderer.pl/" target="_blank">Digital Wanderer</a> team, as they were looking for a JavaScript developer to create a fully automated tool for generating 3D apartment tours. I was responsible for the infrastructure, providing graphical user interface for creating a tour manually, an API for doing so programatically and creating visible part of 3D tours. Now the process is fully automated, from rendering images (client's part), through <a href="https://aws.amazon.com/s3/" target="_blank">AWS S3</a> image upload, to request to the API to create a tour. I used MongoDB to store tours' data and <a href="https://aframe.io/" target="_blank">A-Frame</a> along with Three.js for tour's view.</p>
          <p>The app works on most modern devices, the UI is responsive for all kinds of screens and user is able to view tour in cardboard mode on mobile and move around apartment by gazing at hotspots.</p>
          <p></p>
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

export default Project3dEstate;