import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__container">
                
                    <h2>Emigram</h2>
                    
                    <div className="form">
                        <input type="text" className="form__input" id="form"/>
                    </div>
                    
                    <i className="icon ion-android-more-horizontal"/>
                </div>
            </div>
        );
    }
  
}

export default Header;
