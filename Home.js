import React, {Component} from 'react';



class Home extends Component {
    constructor(){
        super()
        this.state = {
            loading: false,
            character:{}
        }
    }
    componentDidMount(){
        this.setState({loading: true})
        var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=0038cef0ca8b4f3a9307d476e36749ea';
        var req = new Request(url);
        fetch(req)
     .then(function(response) {
        console.log(response.json());
    })
        .then(response => response.json())
        .then(data => {
            this.setState({
                loading:false,
                character: data
            })
        })
    }
    render(){
        const text = this.state.loading ? "loading..." : this.state.character.source
    return(
        <div>
        <p>{text}</p>
        </div>
     )
    }
}

export default Home
