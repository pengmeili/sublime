import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import TestA from './app/testA'
import HookTest from './app/hookTest'
import ReactAxios from './app/reactAxios'
import TestRedux from './app/testRedux'
import TestRedux1 from './app/testReduce1'
import MoreReduce from './app/moreReducer'
import AntTest from "./app/antdTest";
import TestLayout from './app/layouts/layout'


ReactDOM.render(
  <Router>
    <div>
      {/*<Link to="/">Home</Link>*/}
      {/*<br />*/}
      {/*<Link to="/test">TestA</Link>*/}
      {/*<hr />*/}
      <Route exact path="/" component={ App } />
      <Route exact path="/test" component={ TestA } />
      <Route exact path="/hook" component={ HookTest } />
      <Route exact path="/axios" component={ ReactAxios }/>
      <Route exact path="/testRedux" component={ TestRedux }/>
      <Route exact path="/testRedux1" component={ TestRedux1 }/>
      <Route exact path="/moreReduce" component={ MoreReduce }/>
      <Route exact path="/ant" component={ AntTest }/>
      <Route exact path="/layout" component={ TestLayout }/>
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
