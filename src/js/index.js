import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'

import App from './app.jsx'

ReactDOM.render(
  <Router history={browserHistory} >
    <Route path="/dist/" component={App} />
  </Router>,
  document.getElementById('app')
);
