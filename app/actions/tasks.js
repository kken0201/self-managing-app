import * as types from '../constants/ActionTypes';
import { BACKLOG } from '../constants/TaskStateTypes';

const nextTaskId = 0;

export function addTask(title = 'hoge') {
  return {
    type: types.ADD_TASK,
    id: nextTaskId + 1,
    completed: false,
    memo: '',
    state: BACKLOG,
    title
  };
}

export function deleteTask(id) {
  return {
    type: types.DELETE_TASK,
    id
  };
}
