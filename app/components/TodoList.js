import React, { Component, PropTypes } from 'react';
import Task from './Task';
import style from './TaskList.css';

export default class TodoList extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf.isRequired
  }

  render() {
    const { tasks } = this.props;

    return (
      <div className={style.wrapper}>
        <p className={style.title}>TODO</p>
        <div className={style.list}>
          {tasks.map(task =>
            <Task key={task.id} task={task} />
          )}
        </div>
      </div>
    );
  }
}
