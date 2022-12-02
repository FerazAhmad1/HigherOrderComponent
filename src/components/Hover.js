import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class Hover extends Component {
  render() {
    const { count } = this.props;
    return (
      <h1 onMouseOver={this.props.incrementcount}>
        {this.props.name}hover {count} times
      </h1>
    );
  }
}

export default UpdatedComponent(Hover);
