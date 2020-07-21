import React, {Component} from 'react';



class Login extends Component {
    constructor(){
        super()
        this.state = {
          username:"",
          password:"",
          
        }
        this.handleChange = this.handleChange.bind(this)
    }
        handleChange(event){
            const {name,value,} = event.target
        }
    render(){
        return(
        <div>
         <h2 style={{backgroundColor: "gold"}}>User Login</h2>
        
         <br />
          <form onSubmit={this.handleSubmit} >
       Username:
             <input
            type="text"
            value={this.state.userName}
            name="userName"
            placeholder="Username"
            onChange={this.handleChange}
            />
            <br /><br />
            
            Password:
             <input
            type="text"
            value={this.state.password}
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            />
            <br />
            <br />
             <button>Login</button>
          </form>
        </div>
)}
}


export default Login