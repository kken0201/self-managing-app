import React, { Component, PropTypes } from 'react';

import styles from './Task.css';

export default class AddTaskInput extends Component {
  static propTypes = {
    task: PropTypes.shape({                          // 指定された形式を満たしているかどうか
      title: React.PropTypes.string,
      id: React.PropTypes.number,
      memo: React.PropTypes.string,
      state: React.PropTypes.string,
    })
  }

  render() {
    const { task } = this.props;

    return (
      <div className={styles.wrapper}>
        <p className={styles.title}>{task.title}</p>
        <p className={styles.memo}>{task.memo}</p>
      </div>
    );
  }
}
