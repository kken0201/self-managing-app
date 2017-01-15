import { ADD_TASK } from '../constants/ActionTypes';
import { TODO, DOING, DONE, BACKLOG } from '../constants/TaskStateTypes';

const initialState = [
  {
    id: 0,
    title: 'コードを書く',
    memo: '',
    state: BACKLOG
  },
  {
    id: 1,
    title: '仕様を確認する',
    memo: '',
    state: TODO
  },
  {
    id: 2,
    title: '環境構築をする',
    memo: '',
    state: DOING
  },
  {
    id: 3,
    title: 'ドキュメントを読む',
    memo: '',
    state: DONE
  }
];

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        {
          id: state.reduce((maxId, task) => Math.max(task.id, maxId), -1) + 1,
          title: action.title,
          memo: '',
          state: BACKLOG
        },
        ...state
      ];
    default:
      return state;
  }
}
