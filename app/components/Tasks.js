// @flow
import React, { Component, PropTypes } from 'react';
import AddTaskInput from './AddTaskInput';
import TodoList from './TodoList';
import DoingList from './DoingList';
import DoneList from './DoneList';
import BacklogList from './BacklogList';
import { TODO, DOING, DONE, BACKLOG } from '../constants/TaskStateTypes';

import styles from './Tasks.css';

const TASK_FILTERS = {
  [TODO]: task => task.state === TODO,
  [DOING]: task => task.state === DOING,
  [DONE]: task => task.state === DONE,
  [BACKLOG]: task => task.state === BACKLOG,
};


class Tasks extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    addTask: PropTypes.func.isRequired
  }

  render() {
    const { tasks, addTask } = this.props;
    console.log(tasks);

    const todoTasks = tasks.filter(TASK_FILTERS[TODO]);
    const doingTasks = tasks.filter(TASK_FILTERS[DOING]);
    const doneTasks = tasks.filter(TASK_FILTERS[DONE]);
    const backlogTasks = tasks.filter(TASK_FILTERS[BACKLOG]);

    return (
      <div>
        <div className={styles.topArea}>
          <div className={styles.wrapper}>
            <div className={styles.column}>
              <TodoList tasks={todoTasks} />
            </div>
            <div className={styles.column}>
              <DoingList tasks={doingTasks} />
            </div>
            <div className={styles.column}>
              <DoneList tasks={doneTasks} />
            </div>
          </div>
        </div>
        <div className={styles.bottomArea}>
          <BacklogList tasks={backlogTasks} />
          <AddTaskInput addTask={addTask} />
        </div>
      </div>
    );
  }
}

export default Tasks;
