import React, { Component } from 'react'

export class Resume extends Component {
  render() {
    const {name, lname} = this.props;
    return (
      <div>hi {name} , your last name is {lname}</div>
    )
  }
}

export default Resume;