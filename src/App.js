import classes from './App.module.css';
import React, { Component } from 'react'

import HomePage from "./Components/HomePage/HomePage"
import TopBar from './Components/TopBar/TopBar';

import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import PlayerPage from './Components/PlayerPage/PlayerPage';

export class App extends Component {
  state = {
    inputText: ''
  }


  HandleInput = (e) => {
    alert(e.target.value)
    this.setState({ inputText: e.target.value })
  }



  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <TopBar HandleInputs={this.HandleInput} />
          <Switch>

            {/* <HomePage /> */}
            <Route exact path="/" component={HomePage} inp = {this.state.inputText} />
            <Route exact path="/PlayerPage/:vId" component={PlayerPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App



