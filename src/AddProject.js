import React, { Component } from 'react';


class AddProject extends Component {
    constructor(props) {
        super(props);

     this.handleadd = this.handleadd.bind(this);   
    }
    handleadd(event) {

        event.preventDefault();
        let title = this.refs.project.value;
        let category = this.refs.category.value;
        let counter = this.props.counter;
        if(title !== "" || category !== "") {
             let addproject = {
            title,
            category,
            counter
        }
        // let projectlist = this.props.project;
        // projectlist.push(addproject);
        this.props.add(addproject);
        this.refs.projectaddform.reset();
          
        }
        else 
        {
              alert("Please Enter Project or Category.")
        }
    
    }
  render() {
    

    return (
       <div className="App">
         <div className="content">
             <form ref ="projectaddform"> 
                    <input type="text" placeholder="Add Project"  ref="project"
                    />
                    <input type="text" placeholder="Add Category"  ref="category"
                    /><br/>
                    <button onClick={this.handleadd}>Add Project</button>
                    </form>
          </div>
      </div>
    );
  }
}

export default AddProject;
