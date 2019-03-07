import React from 'react';

import Head from './Head';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

// Styles
import '../css/layout.css';
import '../css/clean-blog.css';

const Layout = props => (
  <div>
    <Head />
    <Navigation />
    <Header
      backgroundImage={props.backgroundImage}
      pageTitle={props.pageTitle}
      pageSubtitle={props.pageSubtitle}
    />
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">{props.children}</div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Layout;
