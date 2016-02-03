var React = require('react');

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

export default Footer;
