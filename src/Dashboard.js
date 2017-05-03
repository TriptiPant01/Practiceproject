import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Project from './Project.js';
import Search from './Search.js'
import Comment from './Comment.js';


class Listing extends Component {
  constructor(props){
    super(props);
    this.state= {
      projects: [
        { id:0,
          title:"Book Store",
          description:"this is a project A",
          category:"Book store"
        },
        { id:1,
          title:"Vegetable Store",
          description:"this is a project B",
          category:"Vegetable store"
        },
        {
          id:2,
          title:"Fruits Store",
          description:"this is a project C",
          category:"Fruits store"
        }
      ],
      searchtext :"",
      istoggle : true,
      comment: []
     
    }
    this.handlechange = this.handlechange.bind(this);
    this.handledeleteproj = this.handledeleteproj.bind(this);
    this.handletoggle = this.handletoggle.bind(this);
    this.handlecomment = this.handlecomment.bind(this);
  }
  
  handlechange(text) {
    this.setState({
       searchtext : text
    });

  }
  handledeleteproj(id) {
    debugger
    let projectlist = this.state.projects;
    projectlist.splice(id,1);
    console.log(projectlist);
    this.setState({
      projects:projectlist
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


  render() {
    let projects = this.state.projects;
    let name =this.props.location.search.replace(/[?]/,"");
    return (
      <div className="App">
         <div className="content">
           <h1>welcome {name}</h1><br/>
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
