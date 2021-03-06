// 环境搭建：create-react-app  react-router-dom  redux   react-redux  mysql
// react-redux
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store/data'
import App from './view/App'
import Dati from './view/Dati'

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={App} />
        <Route path="/dati" component={Dati} />
      </Router>
    </Provider>,
    document.querySelector('#root')
)