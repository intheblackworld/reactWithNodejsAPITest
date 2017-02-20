// react
import React from 'react';
import ReactDOM from 'react-dom';

// react-router
import { Router, Route, hashHistory,  Redirect } from 'react-router'

// redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoAppReducer from './reducers'
// let store = createStore(todoAppReducer)

import App from './App';
import About from './About'
import Article from './Article'
import Form from './Form'
import Confirm from './Confirm'
import Todo from './todo'
import Image from './Image'
import Animal from './Animal.js'
import './index.css';

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <Route path="/about" component={About} />
        <Route path="/article" component={Article} />
        <Route path="/form" component={Form} />
        <Route path="/confirm" component={Confirm} />
        <Route path="/image" component={Image}>
          <Route path="/image/:animal" component={Animal} />
        </Route>
        {/* <Route path="/todo" component={Todo} /> */}
        <Redirect from="/" to="/article" />
        {/* <Route path="inbox" component={Inbox}>
          <Route path="messages/:id" component={Message} />
        </Route> */}
      </Route>
    </Router>
),
  document.getElementById('root')
);
