import TicketOne from './ticketOne'
import TicketTwo from './ticketTwo'
import TicketThree from './ticketThree'
import TicketFour from './ticketFour'
import TicketFive from './ticketFive'
import React, { Component } from 'react';


class Tickets extends Component {
    state = { 
      data:{}
     }

     componentDidMount(){
      fetch('https://inlupp-fa.azurewebsites.net/api/tickets')
      .then(res => res.json())
      .then(data =>{
        this.setState({data:data})
      })
   
    }

    render() { 
        return ( 
            <div className="card-body">
                  <div className="d-flex justify-content-between align-items-md-end flex-wrap">
                    <p className="card-title">Tickets</p>
                    <div className="dropdown mb-3 mb-md-0">
                      <button className="btn btn-sm btn-outline-light dropdown-toggle text-dark" type="button" id="dropdownMenuDate1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        2018
                      </button>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate1">
                        <a className="dropdown-item" href="#">2015</a>
                        <a className="dropdown-item" href="#">2016</a>
                        <a className="dropdown-item" href="#">2017</a>
                        <a className="dropdown-item" href="#">2018</a>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table tickets-table mb-2">
                      <thead>
                        <th className="text-muted pl-0">
                          Name
                        </th>
                        <th></th>
                        <th className="text-muted">
                          Date
                        </th>
                        <th className="text-muted">
                          Projects
                        </th>
                      </thead>
                     
                      <tbody>
                <TicketOne/>
                <TicketTwo/>
                <TicketThree/>
                <TicketFour/>
                <TicketFive/>
                     </tbody>


                    </table>
                  </div>
                </div>  
         );
    }
}
 
export default Tickets;