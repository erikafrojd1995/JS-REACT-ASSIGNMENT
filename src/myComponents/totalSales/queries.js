import React, { Component } from 'react';

class Queries extends Component {
    state = { 
        data:{}
     }
     componentDidMount(){
        fetch('https://inlupp-fa.azurewebsites.net/api/total-sales-chart')
        .then(res => res.json()) 
        .then(data =>{
            this.setState({data:data})
        })
        
    }

    render() { 
        return ( 
            <div className="mr-4 mr-md-5">
                <p className="mb-0">Queries</p>
                <h4>{this.state.data.queries}</h4>
          </div>
         );
    }
}
 
export default Queries;