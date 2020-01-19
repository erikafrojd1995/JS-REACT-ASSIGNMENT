
import React, { Component } from 'react';

class MessageOne extends Component {
    state = { 
      data:{}
     }

     componentDidMount(){
      fetch('https://inlupp-fa.azurewebsites.net/api/messages')
      .then(res => res.json())
      .then(data =>{
        this.setState({data:data[0]})
      })
 
    }

    render() {                
            return (               
            <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
                <img src="https://via.placeholder.com/36x36" alt="image" className="profile-pic" />
            </div>
            <div className="preview-item-content flex-grow">
              <h6 className="preview-subject ellipsis font-weight-normal">{this.state.data.from}
              </h6>
              <p className="font-weight-light small-text text-muted mb-0">
              {this.state.data.title}
              </p>
            </div>
          </a> );
        }
}
 
export default MessageOne;