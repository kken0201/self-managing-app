import { ADD_TASK } from '../constants/ActionTypes';

const initialState = [
  {
    id: 0,
    completed: false,
    text: 'コードを書く',
  }
];

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        {
          id: state.reduce((maxId, task) => Math.max(task.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ];
    default:
      return state;
  }
}
