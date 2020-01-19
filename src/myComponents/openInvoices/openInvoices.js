import React, { Component } from 'react';
import InvoiceOne from './invocieOne'
import InvoiceTwo from './invoiceTwo'
import InvoiceThree from './invoiceThree'
import InvoiceFour from './invoiceFour'
import InvoiceFive from './invoiceFive'
import InvoiceSix from './invoiceSix'

class Opennvoices extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card-body">
                  <p className="card-title">Open Invoices</p>
                  <div className="row">
                    <div className="col-md-12">
                      <p className="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, quibusdam eum, totam ut minus dolor eaque alias ratione repellat voluptate, libero beatae nobis facere quod. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque harum maxime quaerat quasi earum totam consectetur eius quisquam deleniti et.</p>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr className="border-top-0">
                          <th className="text-muted">Invoice</th>
                          <th className="text-muted">Customer</th>
                          <th className="text-muted">Ship</th>
                          <th className="text-muted">Best Price</th>
                          <th className="text-muted">Purchsed Price</th>
                          <th className="text-muted">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <InvoiceOne/>
                        <InvoiceTwo/>
                        <InvoiceThree/>
                        <InvoiceFour/>
                        <InvoiceFive/>
                        <InvoiceSix/>
                      </tbody>
                    </table>
                  </div>
                </div>
         );
    }
}
 
export default Opennvoices;