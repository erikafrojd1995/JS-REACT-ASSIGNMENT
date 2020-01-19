import MessageOne from './messageOne'
import MessageTwo from './messageTwo'
import MessageThree from './messageThree'
import NotificationTwo from './notificationTwo'
import Profile from './profile'
import React, { Component } from 'react'; //imrc = klarr imr = function
import NotificationOne from './notificationOne'
import NotificationThree from './notificationThree'
//ctrl+c stränger ner appen (i terminalen stå i rätt mapp)
class Navbar extends Component{           //cc
    state= {}
    render(){
        return( 
    <div className="horizontal-menu">
        <nav className="navbar top-navbar col-lg-12 col-12 p-0">
          <div className="container">
            <div className="navbar-menu-wrapper d-flex align-items-center">
              <ul className="navbar-nav navbar-nav-right">
                
              <li className="nav-item dropdown mr-1">
            <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-toggle="dropdown">
              <i className="mdi mdi-email mx-0"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
              <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
              <MessageOne/>
              <MessageTwo/>
              <MessageThree/>
            </div>
          </li>

          <li className="nav-item dropdown mr-4">
            <a className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center" id="notificationDropdown" href="#" data-toggle="dropdown">
              <i className="mdi mdi-bell mx-0"></i>
              </a>
               <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
              <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
              <NotificationOne/>
              <NotificationTwo/>
              <NotificationThree/>
            </div>
          </li>

                <Profile/>
              </ul>
              <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
                <span className="mdi mdi-menu"></span>
              </button>
            </div>
          </div>
        </nav>
        </div>
      
      );
    }
}

export default Navbar;
