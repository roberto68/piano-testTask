import { List, Map } from 'immutable'; //state kept in immutable
const init = List([]);

export default function todos(todos=init, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return todos.push(Map(action.payload));
    case 'TOGGLE_TODO':
      return todos.map(t => {
        if(t.get('id') === action.payload) {
          return t.update('isDone', isDone => !isDone);
        } else {
          return t;
        }
      });
    default:
      return todos;
  }
}
export const visibilityFilter = (state = 'ALL', action) => {
  switch(action.type) {
    case `FILTER`:
      return action.filter
    default:
      return state
  }
}
