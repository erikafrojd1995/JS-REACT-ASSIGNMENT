import React, { Component } from 'react';

class Online extends Component {
    state = { 
      data:{}
    }

    componentDidMount(){
     fetch('https://inlupp-fa.azurewebsites.net/api/downloads')
     .then(res => res.json())
     .then(data =>{
       this.setState({data:data})
     })

   }
    render() { 
        return ( 
     <div className="col-md-6 stretch-card mt-4 mt-md-0">
        <div className="row d-flex align-items-center">
          <div className="col-6">
            <div id="onlineProgress"></div>                              
          </div>
          <div className="col-6 pl-0">
            <p className="mb-0">Online</p>
            <h2>{this.state.data.onlineAmount}</h2>
          </div>
        </div>
      </div> );
    }
}
 
export default Online;