import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Gaurav",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Gaurav",
      });
    }, 2000);
  }

  render() {
    console.log("============Parent Component=============");
    return (
      <div>
        Parent Component
        {/* <PureComp name={this.state.name}></PureComp>
        <RegComp name={this.state.name}></RegComp> */}
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    );
  }
}

export default ParentComp;
