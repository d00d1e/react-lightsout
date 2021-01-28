import React, { Component } from "react";
import Board from "./components/Board";
import "./App.css";


export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Board />
      </div>
    );
  }
}

