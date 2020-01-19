import React from 'react';
import './App.css';
import Navbar from './myComponents/nav/navbar';
import Footer from './myComponents/footer/footer';
import WelcomeMessage from'./myComponents/welcomemessage';
import Users from './myComponents/users/users';
import Projects from './myComponents/projects/projects';
import Downloads from './myComponents/downloads/downloads';
import TotalSales from './myComponents/totalSales/totalSales';
import Sales from './myComponents/totals/sales';
import TotalPurchase from './myComponents/totals/totalPurchase';
import TotalOrders from './myComponents/totals/totalOrders';
import TotalGrowth from './myComponents/totals/totalGrowth';
import Tickets from './myComponents/tickets/tickets';
import Updates from './myComponents/updates/updates';
import Distribution from './myComponents/distribution/distribution';
import SalesReport from './myComponents/salesReport/salesReport';
import OpenInvoices from './myComponents/openInvoices/openInvoices';

function App() {
  return (
  <div>
    <div className="container-scroller">

    <div className="horizontal-menu">

      <Navbar/>

      </div>

    <div className="container-fluid page-body-wrapper">
      <div className="main-panel">
        <div className="content-wrapper">
          <WelcomeMessage/>
          <div className="row">
            <div className="col-xl-6 grid-margin">
              <div className="row">
                <Users/>
                <Projects/>
              </div>
              <div className="row">
                <div className="col-md-12 stretch-card">
                  <div className="card">
                    <Downloads/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 grid-margin stretch-card">
              <div className="card">
                <TotalSales/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 grid-margin stretch-card">
              <div className="card border-0 border-radius-2 bg-success">
                <div className="card-body">
                  <div className="d-flex flex-md-column flex-xl-row flex-wrap  align-items-center justify-content-between">
                    <div className="icon-rounded-inverse-success icon-rounded-lg">
                      <i className="mdi mdi-arrow-top-right"></i>
                    </div>
                   <Sales/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 grid-margin stretch-card">
              <div className="card border-0 border-radius-2 bg-info">
                <div className="card-body">
                  <div className="d-flex flex-md-column flex-xl-row flex-wrap  align-items-center justify-content-between">
                    <div className="icon-rounded-inverse-info icon-rounded-lg">
                      <i className="mdi mdi-basket"></i>
                    </div>
                    <TotalPurchase/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 grid-margin stretch-card">
              <div className="card border-0 border-radius-2 bg-danger">
                <div className="card-body">
                  <div className="d-flex flex-md-column flex-xl-row flex-wrap  align-items-center justify-content-between">
                    <div className="icon-rounded-inverse-danger icon-rounded-lg">
                      <i className="mdi mdi-chart-donut-variant"></i>
                    </div>
                    <TotalOrders/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 grid-margin stretch-card">
              <div className="card border-0 border-radius-2 bg-warning">
                <div className="card-body">
                  <div className="d-flex flex-md-column flex-xl-row flex-wrap  align-items-center justify-content-between">
                    <div className="icon-rounded-inverse-warning icon-rounded-lg">
                      <i className="mdi mdi-chart-multiline"></i>
                    </div>
                      <TotalGrowth/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 grid-margin stretch-card">
              <div className="card">
                <Tickets/>
              </div>
            </div>
            <div className="col-xl-4 grid-margin stretch-card">
              <div className="card">
								<Updates/>
							</div>
            </div>
          </div>
          <div className="row">
        <div className="col-xl-3 grid-margin stretch-card">
         <Distribution/>
         </div>
         <div className="col-xl-9 grid-margin stretch-card">
          <div className="card">
         <SalesReport/>
         </div>
         </div>
         </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <OpenInvoices/>
              </div>
            </div>
          </div>
        </div>


        <Footer />

      </div>
    </div>
  </div>
    </div>
  );
}

export default App;

