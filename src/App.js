import React, { Component } from 'react';
import './App.css';
import Project from './Project.js';
import  Link from 'react-router';
import Login from './Login.js'
import Home from './Home.js';
import Dashboard from './Dashboard.js';

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
    console.log(name);
 
    return (
      <div className="App">
           {this.name =="" || this.name ==undefined ?
           ( <div> 
             <Login 
              name ={this.state.name}
              changevalue ={this.handlechange}
            />
            </div>) :
          
            <Home fullname ={name} />
           }
      </div>
     
    );
  }
}

export default App;
