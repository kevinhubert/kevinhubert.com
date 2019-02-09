import React from 'react';
import Helmet from 'react-helmet';
import Navigation from './Navigation';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

// Styles
import '../css/layout.css';
import '../css/clean-blog.css';

//Images

const Layout = () => (
  <div>
    <Helmet>
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>
    <Navigation />
    <Header />
    <Main />
    <Footer />
  </div>
);

export default Layout;
