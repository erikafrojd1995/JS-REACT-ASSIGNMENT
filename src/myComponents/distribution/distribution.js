import React, { Component } from 'react';

class Distribution extends Component {
    state = { 
        distribution:{}
     }

     componentDidMount(){
       fetch('https://inlupp-fa.azurewebsites.net/api/distribution')
       .then(res => res.json())
       .then(data =>{
         this.setState({distribution: data})
       })
     }

    render() { 
        return ( 
       
              <div className="card">
                <div className="card-body pb-0">
                  <p className="card-title mb-xl-0">Distribution</p>
                </div>
                <canvas id="distribution-chart"></canvas>
                <div className="card-body">
                  <div id="distribution-legend" className="distribution-chart-legend pt-4 pb-3"></div>
                  <button className="btn btn-outline-light text-dark d-block mx-auto mt-2">View More</button>
                </div>
              </div>

           
         );
    }
}
 
export default Distribution;