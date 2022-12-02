import React from "react";

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementcount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <OriginalComponent
          name="Feraz"
          incrementcount={this.incrementcount}
          count={this.state.count}
        />
      );
    }
  }

  return NewComponent;
};
export default UpdatedComponent;
