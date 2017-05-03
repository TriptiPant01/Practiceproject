import React, { Component } from 'react';
import './App.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.delete= this.delete.bind(this);
}
  delete(id) {
    this.props.delete(id);

  
  }
  render() {
    let pro=[];
    let projectlist =this.props.project ;
    let searchtext = this.props.searchtext;
    (projectlist.forEach((proj) => {
            if(proj.title.indexOf(searchtext) === -1){
              return null;
            }
              pro.push(proj)

        }))
        // console.log(pro);

    return (
       <div className="test">
       
          <ul>
                {pro.map((proj => <li key={proj.title}><strong>{proj.title}</strong>- {proj.category}
                  <button onClick={this.delete.bind(null,proj.id)}>Delete</button>
                  </li>))}
           </ul>
      
      </div>
    );
  }
}

export default Project;
