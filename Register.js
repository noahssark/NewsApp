import React, {Component} from 'react';



class Register extends Component {
    constructor(){
        super()
        this.state = {
          firstName:"" ,
          lastName :"" ,
          email: "",
          phone: "",
          address:"",
          age:"",
          gender:"",
          username:"",
          password:"",
          
        }
        this.handleChange = this.handleChange.bind(this)
    }
        handleChange(event){
            const {name,value,type,checked} = event.target
            type === "checkbox" ? this.setState({[name]: checked})
            : this.setState({[name]: value})
        }
    render(){
        return(
        <div>
         <h2>Registration</h2>
        
         <p>
         Plese fill as appropraite:
         </p>
          <form onSubmit={this.handleSubmit} >
        
         First Name:
         <input 
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
            />
            <br />
            <br />
            Last Name:
             <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="last Name"
            onChange={this.handleChange}
            />
            <br /><br />
            Age:
             <input
            type="number"
            value={this.state.age}
            name="age"
            placeholder="Age"
            onChange={this.handleChange}
            />
            <br /><br />
            Gender:
            <label>
                <input
            type="radio"
            value= "male"
            name="gender"
            onChange={this.handleChange}
            checked={this.state.gender ==="male"}
            />
            Male
            </label>
              <label>
                <input
            type="radio"
            value= "female"
            name="gender"
            onChange={this.handleChange}
            checked={this.state.gender ==="female"}
            />
            Female
            </label>
            <br /><br />
            Email Address:
             <input
            type="email"
            value={this.state.email}
            name="email"
            placeholder="Email Address"
            onChange={this.handleChange}
            />
            <br /><br />
            Phone Number:
             <input
            type="number"
            value={this.state.phone}
            name="phone"
            placeholder="Phone Number"
            onChange={this.handleChange}
            />
            <br /><br />
             
             Home Address:
            <textarea
                name="adress" 
                onChange= {this.handleChange}
            
            />
            <br /><br />
            
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
             <button>Submit</button>
          </form>
        </div>
)}
}
export default Register