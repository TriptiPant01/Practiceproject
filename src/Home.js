import React, { Component } from 'react';
import Login from './Login.js';
import Dashboard from './Dashboard.js';
import './App.css';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
       <div className="App">
         <div className ="content">
           <Dashboard />
          </div>
      </div>
    );
  }
}

export default Home;
