var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigaton = ReactRouter.Navigaton;

/*
  Components
*/

import HeaderNav from './components/HeaderNav';
import ProjectBanner from './components/project/ProjectBanner';
import ProjectDescription from './components/project/ProjectDescription';
import ProjectImage from './components/project/ProjectImage';
import Footer from './components/Footer'
import Application from './components/Application'

ReactDOM.render(<Application />, document.querySelector("#main"));
