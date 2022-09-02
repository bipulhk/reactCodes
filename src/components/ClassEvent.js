import React, { Component } from 'react'

export class ClassEvent extends Component {
  handleClick(){
    console.log('the class count is');
  }
  render() {
    return (
      <div>ClassEvent
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}

export default ClassEvent;