import React, { Component } from "react";
import UpdatedComponent from "./withCounter";
class ClickCounter extends Component {
  render() {
    const { count, increamentCount, name } = this.props;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick = {increamentCount}>
          {name} Clicked {count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter, 1);
