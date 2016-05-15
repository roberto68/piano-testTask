import {createAction} from 'redux-actions';
import {PREV_MONTH, NEXT_MONTH, SELECT_DATE} from './constants';
export const prevMonth = createAction(PREV_MONTH);
export const nextMonth = createAction(NEXT_MONTH);
export const selectDate = createAction(SELECT_DATE); // display list of todos for that day

const uid = () => Math.random().toString(34).slice(2);

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      isDone: false,
      text
    }
  };
}
// those not rly neccessary
export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  };
}

export function selectTodos(filter) {
  return {
    type: 'FILTER',
    filter
  };
}
