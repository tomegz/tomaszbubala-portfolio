import React from 'react';
import Link from 'gatsby-link';

const ListLink = (props) => (
  <li>
    <Link activeClassName="active" to={props.to}>{props.children}</Link>
  </li>
)

const Header = () => (
  <div className="header">
    <nav className="nav">
      <ul className="nav-list">
        <ListLink to="/">Home</ListLink>
        <ListLink to="/projects">Projects</ListLink>
        <li>
          <a href="./static/example.pdf" target="_blank">Download CV</a>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header;
