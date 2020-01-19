import React, { Component } from 'react';

class Offline extends Component {
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
            <div className="col-md-6 stretch-card">
            <div className="row d-flex align-items-center">
              <div className="col-6">
                <div id="offlineProgress"></div>                              
              </div>
              <div className="col-6 pl-0">
                <p className="mb-0">Offline</p>
                <h2>{this.state.data.offlineAmount}</h2>
              </div>
            </div>
          </div>
         );
    }
}
 
export default Offline;