import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Particles from 'react-particles-js';
import particlesConfig from '../utils/particles.json';

import Header from '../components/Header';
import '../sass/style.scss';

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
     />
    <Header />
    <div className="wrapper">
      {children()}
    </div>
    <Particles className="particles-wrapper" params={particlesConfig} style={{ position: "fixed", width: "100%", height: "100vh", zIndex: "-10", top: "0", left: "0" }} />
  </div>
) 

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
