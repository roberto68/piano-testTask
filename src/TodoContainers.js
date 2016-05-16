import { connect } from 'react-redux';
import TodoList from './components/TodoList';
import { addTodo, toggleTodo } from './actions';

const getVisibleTodos = (todos, date) => { //filter = date
  // case (filter)
  if(date){
    return todos.filter(t => t.date) // <Link to={`/todos/${date}`}></Link>;
  }else{
    return todos // <Link to={`/todos/all`}></Link>;
  }
}

export const todoList = connect(
  function mapStateToProps(state) {
    return {
      todos: getVisibleTodos(state.todos, state.calendar.selectedDayOfMonth) };
  },
  function mapDispatchToProps(dispatch) {
    return {
      toggleTodo: (id) => dispatch(toggleTodo(id))
    };
  }
)(TodoList);
