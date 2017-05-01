import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
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
   let todo = {
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

  deletetodo(index) {
  
    let todos = this.state.todos;
    let todo = todos.find(function(todo) {
      return todo.counter == index
    });

    todos.splice(todo,1);
    console.log(todos);
    this.setState({
      todos:todos
    });
  }


  render() {
    let title = this.state.title;
    let todos = this.state.todos;
    return (
      <div className="App">
         
            <button>Todo List </button>
            <button>Dashboard</button>
                <div className ="body">
                  <form ref ="todoform">
                    <input type="text" ref="field" placeholder="list" />
                    <button onClick={this.addtodo}>Add</button>
                    </form>
                
        <ul>
        
            {todos.map((todo => <li key ={todo.counter}>{todo.name}
              <button onClick={this.deletetodo.bind(null,todo.counter)}>Delete</button>
          
              </li>))}
            
        </ul>
          </div>
        </div>
 
    );
  }
}

export default App;
