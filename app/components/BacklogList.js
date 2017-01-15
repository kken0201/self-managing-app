import React, { Component, PropTypes } from 'react';
import Task from './Task';
import style from './BacklogList.css';
import listStyle from './TaskList.css';

export default class BacklogList extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf.isRequired
  }

  render() {
    const { tasks } = this.props;

    return (
      <div className={style.wrapper}>
        <div className={listStyle.wrapper}>
          <p className={listStyle.title}>BACKLOG</p>
          <div className={listStyle.list}>
            {tasks.map(task =>
              <Task key={task.id} task={task} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
