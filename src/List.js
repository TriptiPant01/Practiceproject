import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';



class List extends Component {
  constructor() {
    super();
      this.state = {
        todos: [],
        title: "todoapp",
        counter:0
      }
this.addtodo = this.addtodo.bind(this); 
this.deletetodo = this.deletetodo.bind(this);

}
 addtodo(event) {
   event.preventDefault();
   let name = this.refs.field.value;
   let counter = this.state.counter;
   if(name === "" || name === undefined) 
   alert("Please enter something to list");
   else { let todo = {
     name,
     counter
   };

     counter+=1;
    let todos = this.state.todos;
   todos.push(todo);

   this.setState({
     todos: todos,
     counter: counter
   
   });

   this.refs.todoform.reset();
  } 
 }

  deletetodo(index) {
  
    let todos = this.state.todos;
    let todo = todos.find(function(todo) {
      return todo.counter === index
    });

    todos.splice(todo,1);
    console.log(todos);
    this.setState({
      todos:todos
    });
  }


  render() {
    let todos = this.state.todos;
    let name = this.props.location.search.replace(/[?]/,"");
     
    console.log(name);

    // let name = this.props.fullname;
    // console.log(name);
    return (
      <div className="App">
         <div className="content">
          <h1>  welcome {name}</h1><br/>
          {/*welcome {this.props.name}<br/>*/}
            <button>Todo List </button>
         <Link to={{ pathname: '/Dashboard', search: name }}> <button>Dashboard</button> </Link>
             <Link to="/">  <button>Logout</button> </Link>
                <div className="body">
                  <form ref="todoform">
                    <input type="text" ref="field" placeholder="list" />
                    <button onClick={this.addtodo}>Add</button>
                    </form>
                <div className="list">
                  <h2>Todo List </h2>
                <ul>
                    {todos.map((todo => <li key={todo.counter}>{todo.name}
                      <button onClick={this.deletetodo.bind(null,todo.counter)}>Delete</button>
                    </li>))}
                </ul>
                </div>
          </div>
          </div>
        </div>
 
    );
  }
}

export default List;
