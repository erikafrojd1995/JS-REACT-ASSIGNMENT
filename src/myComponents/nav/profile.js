import React, { Component } from 'react';

class Profile extends Component {
    state = {  
      fullName: null
    }

    async componentDidMount(){
       const res= await fetch('https://inlupp-fa.azurewebsites.net/api/users?firstname=Erika&lastname=Frojd')
       const data = await res.text();
       this.setState({fullName: data})
     }
    render() { 
        return (                 
        <li className="nav-item nav-profile dropdown mr-0 mr-sm-2">
        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
          <img src="https://via.placeholder.com/40x40" alt="profile"/>
          <span className="nav-profile-name">{this.state.fullName}</span>
        </a>
        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
          <a className="dropdown-item">
            <i className="mdi mdi-settings text-primary"></i>
            Settings
          </a>
          <a className="dropdown-item">
            <i className="mdi mdi-logout text-primary"></i>
            Logout
          </a>
        </div>
      </li> );
    }
}
 
export default Profile;