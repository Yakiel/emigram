import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App';
import Profile from './components/profile'; 


ReactDOM.render((
  <Router history={ browserHistory }>
    <Route path="/" component={App}/>
    <Route path="/profile" component={Profile}/>
  </Router>
), document.body);
