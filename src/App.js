import React, { Component } from 'react';
import HelloComponent from './HelloComponent';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world.</h1>

        <HelloComponent name="Michael Hsu"/>
      </div>
    );
  }
}
