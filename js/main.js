var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigaton = ReactRouter.Navigaton;


/*
  App // this is where React components will be loaded
  <App />
*/

var Application = React.createClass({
  render : function(){
    return (
      <div className="application">
        <section className="content">
          <HeaderNav />
          <ProjectPage />
          <ProjectDescription />
          <ProjectImage />
        </section>
        <Footer />
      </div>
    );
  }
});

/*
  HeaderNav
  <HeaderNav />
*/

var HeaderNav = React.createClass({
  render : function() {
    return (
      <nav className ="navigation">
        <div className="content">
          <ul>
            <li className="nav-links"><a href="../images/tyler_brewer_resume.pdf" target="_blank">Resumé</a></li>
            <li className="nav-links"><a href="https://medium.com/@tyler_brewer2" target="_blank">Blog</a></li>
            <li className="nav-links"><a href="../index.html">Home</a></li>
          </ul>
          <a href="../index.html"><img className="logo" src="../images/logo.png"></img></a>
          <div className="info">
            <h2 className="logo_name">TYLER BREWER</h2>
            <p className="logo_description"><em>web developer and designer</em></p>
          </div>
        </div>
      </nav>
    );
  }
});

/*
  ProjectPage
  <ProjectPage />
*/

var ProjectPage = React.createClass({
  render : function() {
    return (
      <div className="park_shark_banner">
        <h1 className="banner_text">PARKSHARK</h1>
        <div className="banner_buttons">
          <a href="https://parkshark.herokuapp.com" target="_blank">
            <button className="view_button"><i className="fa fa-eye"></i> VIEW SITE</button>
          </a>
          <a href="https://github.com/adammoelis/ParkShark" target="_blank">
            <button className="view_button"><i className="fa fa-github-alt"></i> GITHUB</button>
          </a>
        </div>
        <div className="banner_arrows">
          <i className="fa fa-angle-double-left fa-2x banner_arrow_left"></i>
          <i className="fa fa-angle-double-right fa-2x banner_arrow_right"></i>
        </div>
      </div>
    );
  }
});

/*
  ProjectDescription
  <ProjectDescription />
*/

var ProjectDescription = React.createClass({
  render : function() {
    return (
      <div className="project-description">
        <p className="project_text">
          Rails application to allow customers to buy and sell affordable parking spots in NYC.
            Visitors can purchase parking spots from owners with Braintree.
            Notifies owners and visitors of successful transactions with Action Mailer.
            Finds user’s location and nearby parking spots with Geolocation.
        </p>
      </div>
    );
  }
});


/*
  ProjectImage
  <ProjectImage />
*/

var ProjectImage = React.createClass({
  render : function() {
    return (
      <div className="project_image">
        <img className="desktop_project" src="../images/park_shark.jpg" alt=""></img>
      </div>
    );
  }
});

/*
  Footer
  <Footer />
*/

var Footer = React.createClass({
  render : function() {
    return (
      <footer className="footer">
        <ul className="icons">
          <li><a href = "https://www.facebook.com/tyler.brewer.735" target="_blank"><i className="fa fa-facebook-square"></i></a></li>
          <li><a href = "https://www.twitter.com/tyler_brewer2" target="_blank"><i className="fa fa-twitter-square"></i></a></li>
          <li><a href = "https://www.linkedin.com/in/tylerbrewer2" target="_blank"><i className="fa fa-linkedin-square"></i></a></li>
          <li><a href = "https://www.github.com/tylerbrewer2" target="_blank"><i className="fa fa-github-square"></i></a></li>
        </ul>
      </footer>
    );
  }
});

ReactDOM.render(<Application />, document.querySelector("#main"));
