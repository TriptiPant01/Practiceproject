import React, { Component } from 'react';
import './App.css';
import ProjectList from './ProjectList.js';

class Project extends Component {
  render() {
    
    let rows =[];
    let projectlist =this.props.project ;
    let searchtext = this.props.searchtext;
         projectlist.forEach((element) => {
            if(element.title.indexOf(this.props.searchtext)==-1) {
                return null;
            }
            rows.push(element)
        });
     
        debugger
       {projectlist.map((elemet)=>{
             console.log(elemet.title)
           })}
       
        return (
          
            <ul>
              {projectlist.map((elemet)=>{
                    <li>{elemet}
                      <button>Delete</button>
                    </li>}
              )}
          
           </ul>
        
    
        )
    }
}


export default Project;
