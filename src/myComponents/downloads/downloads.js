import Offline from './offline';
import Online from './online';
import React, { Component } from 'react';

class Downloads extends Component {
    state = { }
    render() { 
        return (                     
        <div className="card-body">
        <p className="card-title">Downloads</p>
        <p className="text-muted mb-2">Watching ice melt. This is fun. Only you could make those words cute.</p>
        <div className="row mt-4">
            <Offline/>
            <Online/>
        </div>
      </div> );
    }
}
 
export default Downloads;