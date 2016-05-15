import { connect } from 'react-redux';
import TodoList from './components/TodoList';
import { addTodo, toggleTodo } from './actions';
import { Router, Route, Link, browserHistory } from 'react-router';

const getVisibleTodos = (todos, filter) => { //filter = date
  if(filter){
    return todos.filter(t => t.date) // <Link to={`/todos/${date}`}></Link>;
  }else{
    return todos // <Link to={`/todos/all`}></Link>;
  }
}  //place react router in this function
//console.log(state.calendar.selectedDayOfMonth);

export const todoList = connect(
  function mapStateToProps(state) {
    return { todos: getVisibleTodos(state.todos, state.calendar.selectedDayOfMonth) };
  },
  function mapDispatchToProps(dispatch) {
    return {
      toggleTodo: (id) => dispatch(toggleTodo(id))
    };
  }
)(TodoList);
