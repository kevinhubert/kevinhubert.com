import React from 'react';
import Layout from '../components/layout';
import homeBackground from '../images/home-bg.jpg';

const IndexPage = () => (
  <div>
    <Layout
      backgroundImage={homeBackground}
      pageTitle="Kevin Hubert"
      pageSubtitle="Frontend Developer"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">Facebook API Testing App</h2>
                <h3 className="post-subtitle">
                  A simple application that allows you to query your facebook
                  data.
                </h3>
              </a>
              <p className="post-meta">
                Posted by
                <a href="about.html">Kevin Hubert</a>
                on September 24, 2019
              </p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </Layout>
  </div>
);

export default IndexPage;
