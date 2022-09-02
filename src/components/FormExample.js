import React, { Component } from 'react';

class FormExample extends Component {
  state = {
    firstName: '',
    lastName : '',
  };

  handleChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
    console.log(this.state.firstName);
  };

  handleLast = (event) =>{
    this.setState({
        lastName : event.target.value
    })
    console.log(this.state.lastName);
  }

  handleSubmit = (event)=>{
    // console.log(this.state.firstName);
    // console.log(this.state.lastName);
        event.preventDefault();
        console.log({
            fname: this.state.firstName,
            lname: this.state.lastName
        })
    return(
        <div>
            <h1>{this.state.firstName}</h1>
            <h1>{this.state.lastName}</h1>
        </div>
    )
  }
  render() {
    return (
      <div>
        FormExample
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type='text'
            value={this.state.firstName}
          ></input>
          <input onChange={this.handleLast} type="text" value={this.state.lastName}></input>
        <button type="submit">Submit</button>
        </form>
        
        <div>
            <h1>{this.state.firstName} {this.state.lastName}</h1>
        </div>
    
      </div>
    );
  }
}

export default FormExample;
