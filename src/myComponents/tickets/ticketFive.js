import React, { Component } from 'react';

class TicketFive extends Component {
    state = {  
        data: {}
    }

    componentDidMount(){
     fetch('https://inlupp-fa.azurewebsites.net/api/tickets')
     .then(res => res.json())
     .then(data =>{
       this.setState({data:data[0]})
     })
  
   }
    render() { 
        return ( 
            <tr>
            <td className="pl-0">
                <div className="icon-rounded-info icon-rounded-md">
                <h4 className="font-weight-medium">TS</h4>
                </div>
            </td>
            <td>
                <p className="mb-0">{this.state.data.tickets ? this.state.data.tickets[4].name : null}</p>
                <p className="text-muted mb-0">{this.state.data.tickets ? this.state.data.tickets[4].city : null}</p>
            </td>
            <td>
                <p className="mb-0">{this.state.data.tickets ? this.state.data.tickets[4].date : null}</p>
                {/* <p className="text-muted mb-0">10:30 am</p> */}
            </td>
            <td>
                <p className="mb-0">{this.state.data.tickets ? this.state.data.tickets[4].project : null}</p>
                <p className="text-muted mb-0">{this.state.data.tickets ? this.state.data.tickets[4].other : null}</p>
            </td>
            <td className="pr-0">
                <i className="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
            </td>
            </tr>
                
         );
    }
}
 
export default TicketFive;