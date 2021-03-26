import React, { Component } from "react";
import CustomTextInput from "./CustomTextInput";

export class AutoFocusTextInput extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    console.log(this.textInput.current);
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <CustomTextInput ref={this.textInput} />
      </div>
    );
  }
}

export default AutoFocusTextInput;
