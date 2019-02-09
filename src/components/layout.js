import React from 'react';

import Head from './Head';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

// Styles
import '../css/layout.css';
import '../css/clean-blog.css';

const Layout = ({ children }) => (
  <div>
    <Head />
    <Navigation />
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
