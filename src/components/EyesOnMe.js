import React, { Component } from 'react';
// Code EyesOnMe Component Here

export default class EyesOnMe extends Component {

  printGood = () => {
    console.log("Good!")
  }

  printHey = () => {
    console.log("Hey! Eyes on me!")
  }

  render () {
    return (<button onFocus={this.printGood} onBlur={this.printHey}></button>)
  }
}
