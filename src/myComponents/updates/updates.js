import UserConfirmation from './userConfirmation'; 
import Continuous from './continuous';
import Promotion from './promotion';

import React, { Component } from 'react';


class Updates extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card-body">
				<p className="card-title">Updates</p>
				<ul className="bullet-line-list mt-4">
                    <UserConfirmation/>
                    <Continuous/>
                    <Promotion/>
				</ul>
		    </div>
                                
         );
    }
}
 
export default Updates;