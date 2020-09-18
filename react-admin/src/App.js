import React, {Component} from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom'
import Home from "./views/Home";
import About from "./views/About";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route component={Home} exact path="/"></Route>
          <Route component={About} path="/about"></Route>
        </Switch>
      </HashRouter>
    );
  }
}
export default App;
