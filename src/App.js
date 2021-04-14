import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Link, Redirect } from "react-router-dom"
import "./css/main.css"

import Navbar from './components/Navbar'

class App extends Component {

  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount(){
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App




