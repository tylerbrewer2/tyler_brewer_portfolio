var React = require('react');

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

export default ProjectImage;
