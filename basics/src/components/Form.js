import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "",
    };
  }
  // handleUsernameChange = (event) => {
  //   this.setState({
  //     username: event.target.value,
  //   });
  // };

  // handleCommentsChange = (event) => {
  //   this.setState({
  //     comments: event.target.value,
  //   });
  // };

  // handleTopicChange = (event) => {
  //   this.setState({
  //     topic: event.target.value,
  //   });
  // };

  handleFormFieldsChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  formSubmitHandle = (event)=>{
    event.preventDefault()
alert(`${this.state.username}`)
    console.log('Clicked ...');
  }
  render() {
    return (
      <form onSubmit={this.formSubmitHandle}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleFormFieldsChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            name="comments"
            onChange={this.handleFormFieldsChange}
          />
        </div>
        <div>
          <label>Topic</label>
          <select
            value={this.state.topic}
            name="topic"
            onChange={this.handleFormFieldsChange}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
