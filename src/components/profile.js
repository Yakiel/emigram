import React from 'react';
import Header from './Header';
import { Link } from 'react-router'


class Profile extends React.Component {
    
    
    render() {
        return(
            <div>
                <Header />
                <div className="container">
                
                    <div className="thumbnail">
                        <h1>Profile</h1>
                        
                        <div className="thumbnail__imgWrap">
                            
                        </div>
                    </div>
                    
                    <Link to='/'>back to Home</Link>
                </div>
            </div>
        );
    }
}

export default Profile;