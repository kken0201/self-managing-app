import * as types from '../constants/ActionTypes';

const nextTaskId = 0;

export function addTask(text = 'hoge') {
  return {
    type: types.ADD_TASK,
    id: nextTaskId + 1,
    completed: false,
    text
  };
}

export function deleteTask(id) {
  return {
    type: types.DELETE_TASK,
    id
  };
}
