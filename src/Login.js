import React, {Component} from 'react';
import Home from './Home.js'

class Login extends Component {
    constructor(props) {
        super(props); 

    this.change= this.change.bind(this);
    }
    change (event) {
        this.props.changevalue(event.target.value);
        console.log("test");
    }
    
    render() {
        return (
            <div className="content">
                    <div className="loginform">
                        <h1> Please Enter Your Name</h1>
                        <input type="text" 
                        placeholder="Name" 
                        onChange={this.change}
                        value = {this.props.name}
                        /><br/>
                        <button >Submit</button>
                        </div>
                <Home />
            </div>
           
        )
    }
}

export default Login