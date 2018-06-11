import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import Socials from "../components/Socials";
import '../sass/style.scss';

const devIcons = {
  html5: "devicon-html5-plain",
  sass: "devicon-sass-original",
  react: "devicon-react-original",
  javascript: "devicon-javascript-plain",
  nodejs: "devicon-nodejs-plain",
  mongodb: "devicon-mongodb-plain",
  css3: "devicon-css3-plain"
}

const Devicon = (props) => (
  <span>
    <i className={props.name}></i>
  </span>
)

const IndexPage = ({ data }) => {
  //const profileImage = data.file.profileImage || null;
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" 
              href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css" />
      </Helmet>
      <div className="index-page">
        <div className="card">
          <div className="image-wrapper">
            <div className="profile-picture" style={{ backgroundImage: `url(${require("../static/images/profile-image-1.jpg")})` }}></div>
          </div>
          <div className="content">
            <h1>Tomasz Bubała</h1>
            <h3>JavaScript Developer</h3>
            <p>Self-taught JavaScript developer, currently working on his own but would love to join a team and learn more. Currently focused on learning React, Node.js and MongoDB. Also an amateur cook and Tekken try-hard.</p>
            <Socials />
          </div>
        </div>
        <div className="devicons">
          {Object.keys(devIcons)
            .map((k, i) => <Devicon key={i} name={devIcons[k]} />)}
        </div>
      </div>
    </div>
  );
}

export default IndexPage

