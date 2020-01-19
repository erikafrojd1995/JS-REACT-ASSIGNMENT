import React, { Component } from 'react';

class Promotion extends Component {
    state = {  }

    componentDidMount(){
        fetch('https://inlupp-fa.azurewebsites.net/api/updates')
        .then(res => res.json()) 
        .then(data =>{
            this.setState({data:data[2]})
        })
        
    }

    render() { 
        return ( 
            <li>
            <h6> {this.state.data ? this.state.data.title : null}</h6>
            <p className="mt-2"> {this.state.data ? this.state.data.message : null} </p>
            <p className="text-muted mb-4">
                <i className="mdi mdi-clock-outline"></i>
                {this.state.data ? this.state.data.time : null}
            </p>
        </li>
         );
    }
}
 
export default Promotion;