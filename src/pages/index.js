import React from 'react';
import Link from 'gatsby-link';

import Socials from "../components/Socials";
import '../sass/style.scss';

const IndexPage = () => (
  <div className="index-page">
    <div className="card">
      <div className="image-wrapper">
        <img className="profile-picture" src="/images/face.jpg" />
      </div>
      <div className="content">
        <h1>Tomasz Bubała</h1>
        <h2>JavaScript Developer</h2>
        <p>
          <span>Web app builder and avid coder.</span>
          <span>Also an amateur cook and Tekken try-hard.</span>
        </p>
        <Socials />
      </div>
    </div>
  </div>
)

export default IndexPage
