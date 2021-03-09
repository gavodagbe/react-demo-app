import React, { Component } from "react";

export default class User extends Component {
  /*constructor() {
    super();
    console.log("Constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }*/

  render() {
    console.log("Render");
    const fullTexte = `My name is ${this.props.name}, i'm ${this.props.age} years old and my
        email is ${this.props.email}`;
    return (
      <div>
        <p onClick={this.props.hideEvent}>{fullTexte}</p>
        <input
          type="text"
          name="username"
          className="form-control"
          value={this.props.name}
          onChange={this.props.onChangeHandlerEvent}
        />
      </div>
    );
  }
}
//onClick={this.props.orderEvent}
