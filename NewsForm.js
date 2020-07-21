import React, {Component} from 'react';



class NewsForm extends Component {
    constructor(){
        super()
        this.state = {
          title:"" ,
          subject :"" ,
          category: "",
          body: "",
          author:"",
          urlToImage:"",
          dateCreated:"",
          
          
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
         <h2 style={{backgroundColor: "gold"}}>News Upload Form</h2>
        
         <p>
         If you would like to upload a file to the Ark News, 
         please fill in the below information. <br />
        Please complete all details of the fields below.
         </p>
          <form onSubmit={this.handleSubmit} >
        
         Title:
         <input 
            type="text"
            value={this.state.title}
            name="title"
            placeholder="News Title"
            onChange={this.handleChange}
            />
            <br />
            Subject:
             <input
            type="text"
            value={this.state.subject}
            name="subject"
            placeholder="News Subject"
            onChange={this.handleChange}
            />
            <br />
            Date Created:
             <input
            type="number"
            value={this.state.dateCreated}
            name="dateCreated"
            placeholder="News date"
            onChange={this.handleChange}
            />
            <br />
            
            <br />
            Category:
            <select
                value={this.state.category}
                onChange={this.handleChange}
                name="category">
                <option value = " politics">Politics</option>
                <option value = " business">Business</option>
                <option value = " sport">Sport</option>
                <option value = " health">Health</option>
                <option value = " social">Social</option>
                <option value = " economy">Economy</option>
                
                </select>
                
            <br />
            <br />
             
             Body:
            <textarea
                name="body" 
                onChange= {this.handleChange}
            
            />
            <br />
            <br />
            author:
             <input
            type="text"
            value={this.state.author}
            name="author"
            placeholder="Author"
            onChange={this.handleChange}
            />
            <br />
            <br />
            
            
             <button>Submit</button>
          </form>
        </div>
)}
}
export default NewsForm