var React = require('react');

/*
  HeaderNav
  <HeaderNav />
*/

var HeaderNav = React.createClass({
  render : function() {
    return (
      <nav className="navigation">
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

export default HeaderNav;
