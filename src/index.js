import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import {Route,  BrowserRouter} from 'react-router-dom';
import Dashboard from './Dashboard.js';
import Todo from './Todo.js';
import Login from './Login.js';
import Home from './Home.js'

ReactDOM.render(
  <BrowserRouter>
    <div>
        <Route path="/" component={Todo} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Todo" component={Todo} />
        <Route path="/Home" component={Home} />
         <Route path="/Login" component={Login} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
