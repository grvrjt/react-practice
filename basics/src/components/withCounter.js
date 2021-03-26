import React from "react";

const UpdatedComponent = (WrappedComponent , incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    increamentCount = () => {
      this.setState((prev) => {
        return { count: prev.count + incrementNumber };
      });
    };
    render() {
      return (
        <WrappedComponent
          count = {this.state.count}
          increamentCount={this.increamentCount}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
