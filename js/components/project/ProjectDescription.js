var React = require('react');

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

export default ProjectDescription;
