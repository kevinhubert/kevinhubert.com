import React from 'react';

import backgroundImage from '../images/home-bg.jpg';

const Header = props => (
  <header
    className="masthead"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="overlay" />
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="site-heading">
            <h1>Kevin Hubert</h1>
            <span className="subheading">Frontend Developer</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
