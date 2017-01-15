import React, { Component, PropTypes } from 'react';

export default class AddTaskInput extends Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit() {
    if (this.state.text !== '') {
      this.props.addTask(this.state.text);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          autoFocus="true"
          value={this.state.text}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.handleSubmit.bind(this)}>追加</button>
      </div>
    );
  }
}
