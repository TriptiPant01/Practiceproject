import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Project from './Project.js';
import Search from './Search.js'


class Listing extends Component {
  constructor(props){
    super(props);
    this.state= {
      projects: [
        {
          title:"Book Store",
          description:"this is a project A",
          category:"Book store"
        },
        {
          title:"Vegetable Store",
          description:"this is a project B",
          category:"Vegetable store"
        },
        {
          title:"Fruits Store",
          description:"this is a project C",
          category:"Fruits store"
        }
      ],
      searchtext :""
     
    }
    this.handlechange = this.handlechange.bind(this);
  }
  
  handlechange(text) {
    this.setState({
       searchtext : text
    });

  }

  render() {
    let projects = this.state.projects;
    let name =this.props.location.search.replace(/[?]/,"");
    return (
      <div className="App">
         <div className="content">
           <h1>welcome {name}</h1><br/>
                    <Link to={{ pathname: '/List', search: name }}> <button>TodxoList</button> </Link>

               <button>Dashboard</button> 
                 <Link to="/">  <button>Logout</button> </Link>
                   <div className="body">
                     <Search 
                      change={this.handlechange} 
                      />
                   <Project
                    project={projects}
                    searchtext={this.state.searchtext}
                    />
                 
                
                </div>
             
       
          </div>
      </div>
    );
  }
}

export default Listing;
