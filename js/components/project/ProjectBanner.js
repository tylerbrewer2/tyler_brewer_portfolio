var React = require('react');

/*
  ProjectBanner
  <ProjectBanner />
*/

var ProjectBanner = React.createClass({
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

export default ProjectBanner;
