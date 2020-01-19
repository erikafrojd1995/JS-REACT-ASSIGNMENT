import React, { Component } from 'react';

class TotalOrders extends Component {
    state = { 
        data:{}
     }   
     async componentDidMount(){
        const res = await fetch('https://inlupp-fa.azurewebsites.net/api/total-orders')
        const data = await res.json();
        this.setState({data:data})
    }
    render() { 
        return ( 
            <div className="text-white">
                <p className="font-weight-medium mt-md-2 mt-xl-0 text-md-center text-xl-left">Total Orders</p>
                <div className="d-flex flex-md-column flex-xl-row flex-wrap align-items-baseline align-items-md-center align-items-xl-baseline">
                <h3 className="mb-0 mb-md-1 mb-lg-0 mr-1">{this.state.data.currency}{this.state.data.amount}</h3>
                    <small className="mb-0">This month</small>
                </div>
          </div>
         );
    }
}
 
export default TotalOrders;