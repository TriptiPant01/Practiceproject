import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props); 

    this.change= this.change.bind(this);
    }
    change (event) {
        this.props.changevalue(event.target.value);
    }
    
    // handleclick() {
    //     console.log(this.props.name);
    //     debugger
    //    if(this.props.name  == null || this.props.name ==undefined || this.props.name  == '') {
    //        alert("sdf");
    //    }
    // }
    render() {
        let name = this.props.name;
        console.log(name);
        return (
            <div className="content">
                    <div className="loginform">
                        <h1>Please Enter Your Name</h1>
                        <input type="text" 
                        placeholder="Name" 
                        onChange={this.change}
                        value={this.props.name}
                        /><br/>
                      
                     {/*<button>  <Link to ='List', search: name>Submit </Link></button>*/}

                     <Link to={{ pathname: '/List', search: name }}>
                    Submit
                </Link>
                    </div>
               
            </div>
           
        )
    }
}

export default Login