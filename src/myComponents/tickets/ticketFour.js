import React, { Component } from 'react';

class TicketFour extends Component {
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
                <td class="pl-0">
                <div class="icon-rounded-warning icon-rounded-md">
                    <h4 class="font-weight-medium">VR</h4>
                </div>
                </td>
                <td>
                    <p className="mb-0">{this.state.data.tickets ? this.state.data.tickets[3].name : null}</p>
                    <p className="text-muted mb-0">{this.state.data.tickets ? this.state.data.tickets[3].city : null}</p>
                </td>
                <td>
                    <p className="mb-0">{this.state.data.tickets ? this.state.data.tickets[3].date: null}</p>
                    {/* <p className="text-muted mb-0">9:30 am</p> */}
                </td>
                <td>
                    <p className="mb-0">{this.state.data.tickets ? this.state.data.tickets[3].project : null}</p>
                    <p className="text-muted mb-0">{this.state.data.tickets ? this.state.data.tickets[3].other : null}</p>
                </td>
                <td class="pr-0">
                <i class="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
                </td>
                </tr>
                
         );
    }
}
 
export default TicketFour;