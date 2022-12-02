import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class Counter extends Component {
  render() {
    const { count } = this.props;
    return (
      <button onClick={this.props.incrementcount}>
        {this.props.name}click {count} Times
      </button>
    );
  }
}

export default UpdatedComponent(Counter);
