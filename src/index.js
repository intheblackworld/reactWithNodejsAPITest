import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,  Redirect } from 'react-router'
import App from './App';
import About from './About'
import Article from './Article'
import Form from './Form'
import Confirm from './Confirm'
// import Inbox from './Inbox'
// import Confirm from './Confirm'
import './index.css';


ReactDOM.render((
  <Router history={hashHistory}>
  <Route path='/' component={App}>
    <Route path="/about" component={About} />
    <Route path="/article" component={Article} />
    <Route path="/form" component={Form} />
    <Route path="/confirm" component={Confirm} />
    <Redirect from="/" to="/article" />
    {/* <Route path="inbox" component={Inbox}>
      <Route path="messages/:id" component={Message} />
    </Route> */}
  </Route>
  </Router>
),
  document.getElementById('root')
);
