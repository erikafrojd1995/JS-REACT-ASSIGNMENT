
import React, { Component } from 'react';

class InvoiceFour extends Component {
    state = { 
      data:{}
     }

     componentDidMount(){
      fetch('https://inlupp-fa.azurewebsites.net/api/open-invoices')
      .then(res => res.json())
      .then(data =>{
        this.setState({data:data[3]})
      })
 
    }

    render() {                
            return (               
                <tr>
                <td> {this.state.data.invoice}</td>
                <td>{this.state.data.customer}</td>
                <td>{this.state.data.shipping}</td>
                <td className="font-weight-bold">${this.state.data.bestPrice}</td>
                <td>${this.state.data.purchasedPrice}</td>
                <td><div className="badge badge-success badge-fw">{this.state.data.status}</div></td>
              </tr>);
        }
}
 
export default InvoiceFour;