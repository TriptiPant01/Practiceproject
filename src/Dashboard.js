import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Project from './Project.js';
import Search from './Search.js'
import Comment from './Comment.js';
import AddProject from './AddProject.js';


class Listing extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: [
        { counter:0,
          title:"Book Store",
          description:"this is a project A",
          category:"Book store"
        },
        { counter:1,
          title:"Vegetable Store",
          description:"this is a project B",
          category:"Vegetable store"
        },
        {
          counter:2,
          title:"Fruits Store",
          description:"this is a project C",
          category:"Fruits store"
        }
      ],
      searchtext :"",
      istoggle : true,
      comment: [],
      counter : 3
     
    }
    this.handlechange = this.handlechange.bind(this);
    this.handledeleteproj = this.handledeleteproj.bind(this);
    this.handletoggle = this.handletoggle.bind(this);
    this.handlecomment = this.handlecomment.bind(this);
    this.handleaddproject = this.handleaddproject.bind(this);
  }
  
  handlechange(text) {
    this.setState({
       searchtext : text
    });

  }
  handledeleteproj(id) {
     const remainder = this.state.projects.filter((todo) => {
      if(todo.counter !== id) return todo;
      console.log(remainder);
    });
    debugger
    // let projectlist = this.state.projects;
    // projectlist.splice(id,1);
    // console.log(projectlist);
    this.setState({
      projects:remainder
    })
    console.log(this.state.projects);
  }
  handletoggle(event) {
    this.setState(prevState => ({
      istoggle: !prevState.istoggle
    }));
        console.log(this.state.istoggle);
  }
handlecomment(text) {
  let comment = this.state.comment;
  comment.push(text);
  this.setState({
    comment: comment
  })
  console.log(this.state.comment);

}

handleaddproject(project) {
  debugger
  let projectlist = this.state.projects;
    projectlist.push(project);

  this.setState({
    projects : projectlist,
    counter : project.counter +1 
  })
}


  render() {
    let projects = this.state.projects;
    let name =this.props.location.search.replace(/[?]/,"");
    return (
      <div className="App">
         <div className="content">
           <h1>Welcome {name}</h1><br/>
                 <Link to="/">  Logout</Link>
                   <div className="body">
                     <Search 
                      change={this.handlechange} 
                      />
                   <Project
                    project={projects}
                    searchtext={this.state.searchtext}
                    delete={this.handledeleteproj}
                    />
                    <AddProject
                    project = {this.state.projects}
                    add ={this.handleaddproject}
                    counter = {this.state.counter}
                     />
                  
                  {this.state.istoggle == true ?( 
                <div className="comment-firstpageload" onClick ={this.handletoggle}>
                   Comment List
                </div> ) :
                <div>
                  
                  <div className="comment-firstpageload" onClick ={this.handletoggle}>
                    Comment List
                  </div>
                     <Comment
                      comment ={this.state.comment} 
                      addcomment ={this.handlecomment}/>
                  </div>
                  }
                </div>
             
       
          </div>
      </div>
    );
  }
}

export default Listing;
