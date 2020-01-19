import Revenue from './revenue';
import Returns from './returns';
import Queries from './queries';
import Invoices from './invoices';
import React, { Component } from 'react';

class TotalSales extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card-body">
                  <p className="card-title">Total Sales</p>
                  <p className="text-muted">Audience to which the users belonged while on the current date Audience to which the users belonged while on the current date Audience to which the users belonged while on the current date </p>
                  <div className="d-flex flex-wrap mb-4 mt-4 pb-4">
                        <Revenue/>
                        <Returns/>
                        <Queries/>
                        <Invoices/>
                  </div>
                  <canvas id="total-sales-chart"></canvas>
                </div>
         );
    }
}
 
export default TotalSales;