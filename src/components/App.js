import '../App.css';
import React from 'react';
import Header from './Header';
import { Link } from 'react-router'

class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <div className="container">
                    <h1>Inicio</h1>
                    <Link to='/profile'>Profile</Link>
                    <button>Boton</button>
                </div>
            </div>
        );
    }
}

export default App;