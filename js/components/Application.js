var React = require('react');
import HeaderNav from './HeaderNav';
import ProjectBanner from './project/ProjectBanner';
import ProjectDescription from './project/ProjectDescription';
import ProjectImage from './project/ProjectImage';
import Footer from './Footer';

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
          <ProjectBanner />
          <ProjectDescription />
          <ProjectImage />
        </section>
        <Footer />
      </div>
    );
  }
});

export default Application;
