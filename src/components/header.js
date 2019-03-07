import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: window.location.pathname
    };
  }
  render() {
    return (
      <header
        className="masthead"
        style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
      >
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>{this.props.pageTitle}</h1>
                <span className="subheading">{this.props.pageSubtitle}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
