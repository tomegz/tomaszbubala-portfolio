import React, { Component } from 'react';
import Link from 'gatsby-link';

class Header extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      nav: {
        paths: {
          home: "/",
          projects: "/projects"
        },
        active: "/"
      }
    }
  }
  /* This is workaround for setting active class - gatsby doesn't
     seem to respect initial page load and 'Home' would always have
     active class */
  componentDidMount() {
    const active = location.pathname;
    const state = this.state;
    state.nav.active = active;
    this.setState(state);
  }
  handleClick(e) {
    if(e.target.dataset.to) {
      const state = this.state;
      state.nav.active = e.target.dataset.to;
      this.setState(state);
    }
  }
  render() {
    const paths = this.state.nav.paths;
    return (
      <div className="header">
        <nav className="nav">
          <ul ref={input => this.navList = input} onClick={this.handleClick} className="nav-list">
            {Object.keys(paths)
              .map((path, i) => {
                const activeClass = paths[path] === this.state.nav.active ? "active" : "";
                return (
                  <li key={i}>
                    <Link className={activeClass} data-to={paths[path]} to={paths[path]}>{path}</Link>
                  </li>
                );
            })}
            <li>
              <a href="./static/example.pdf" target="_blank">Download CV</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
