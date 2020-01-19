import React, { Component } from 'react';

class NotificationThree extends Component {
    state = {  
        data:{}
    }

    componentDidMount(){
     fetch('https://inlupp-fa.azurewebsites.net/api/notifications')
     .then(res => res.json())
     .then(data =>{
       this.setState({data:data[2]})
     })

   }
    render() { 
        return (  
            <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <div className="preview-icon bg-info">
                <i className="mdi mdi-account-box mx-0"></i>
              </div>
            </div>
            <div className="preview-item-content">
              <h6 className="preview-subject font-weight-normal">{this.state.data.title}</h6>
              <p className="font-weight-light small-text mb-0 text-muted">
              {this.state.data.subtitle}
              </p>
            </div>
          </a>
        );
    }
}
 
export default NotificationThree;