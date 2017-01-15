import React, { Component, PropTypes } from 'react';
import Task from './Task';
import style from './TaskList.css';

export default class DoneList extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf.isRequired
  }

  render() {
    const { tasks } = this.props;
    console.log(tasks);

    return (
      <div className={style.wrapper}>
        <p className={style.title}>DONE</p>
        <div className={style.list}>
          {tasks.map(task =>
            <Task key={task.id} task={task} />
          )}
        </div>
      </div>
    );
  }
}
