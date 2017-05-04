import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Dashboard.js';
import Login from './Login.js';
import Home from './Home.js';


ReactDOM.render(
  <Router>
    <div>
        <Route exact={true} path="/" component={App} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Home" component={Home} />
        <Route path="/Login" component={Login} />
    </div>
  </Router>,
  document.getElementById('root')
);
