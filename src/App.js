import React, { Component } from 'react';
import './App.css';
import Listing from './Listing.js';
import Project from './Project.js';
import { Link } from 'react-router';
import Login from './Login.js'
import Home from './Home.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:""
    }

    this.handlechange = this.handlechange.bind(this);
}

handlechange(text) {
  this.setState({
    name:text
  })
}
  render() {
    let name = this.state.name;
 
    return (
      <div className="App">
           
            <Login 
              name ={this.state.name}
              changevalue ={this.handlechange}
            />
            <Home />
      </div>
     
    );
  }
}

export default App;
