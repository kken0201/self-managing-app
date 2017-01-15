// @flow
import React, { Component, PropTypes } from 'react';
import AddTaskInput from './addTaskInput';
// import { Link } from 'react-router';
// import styles from './Counter.css';

class Tasks extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf.isRequired,
    addTask: PropTypes.func.isRequired
  }

  render() {
    const { tasks, addTask } = this.props;
    return (
      <div>
        <AddTaskInput addTask={addTask} />

        {tasks.map(todo =>
          <p>{todo.text}</p>
        )}
      </div>
    );
  }
}

export default Tasks;
