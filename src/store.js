import {createStore, combineReducers} from 'redux';
import calendar from './reducers';
import {todos, visibilityFilter } from './todoReducers';

const reducers = combineReducers({
  todos,
  visibilityFilter,
  calendar
});

const store = createStore(reducers);
//const store = createStore(calendar);
export default store;
