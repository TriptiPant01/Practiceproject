import React, { Component } from 'react';
import './App.css';

class Search extends Component {
    constructor(props) {
        super(props);
        
        this.change=this.change.bind(this);
    }

    change(e){
       this.props.change(e.target.value);
    }
  render() {

    // let project = this.props.project;
    return (
       <div className="search">
         
                <input type="text"
                 placeholder="search through title"
                 onChange={this.change}
                />
       
        </div>
    );
  }
}

export default Search;
