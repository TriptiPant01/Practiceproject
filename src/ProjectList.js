import React, { Component } from 'react';
import './App.css';

class ProjectList extends Component {
  render() {
    let project = this.props.project;
    return (
       <div className="App">
          <div className="dashboardlist">
            {project.title} 
             
          </div>
        </div>
     
    );
  }
}

export default ProjectList;
