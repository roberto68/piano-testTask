import React from 'react';

export function Todo(props) {
  const { todo } = props;
  if(todo.isDone) {
    return <strike>{todo.text}</strike>;
  } else {
    return <span>{todo.text}</span>;
  }
}

export function TodoList(props) {
  const { todos, toggleTodo, addTodo } = props;

  const onSubmit = (event) => {
    const text = this.refs.text.value; // handle with refs
    const date = this.refs.date.value;
    addTodo(text, date);
    // const isEnterKey = (event.which == 13);
    // const isLongEnough = text.length > 0;
    //
    // if(isEnterKey && isLongEnough) {
    //   text.value = '';
    //   addTodo(text);
    // }
  };
  const countDate = () => new Date.now(); // rly neccessary ??

  return (
    <div className='todo'>
      <input type='text'
             ref="text"
             className='todo__entry'
             placeholder='Add todo' />
      <input type="date"
             ref="date"
             placeholder='deadline - DD/MM/YYYY'
             min={this.countDate} /><br></br>
      <input type="button" onClick={onSubmit} />
      <ul className='todo__list'>
        {todos.map(t => 
          <Todo
           key={t.get('id')}
           className='todo__item'
           onClick={() => toggleClick(t.id)} >
          </Todo>
        )}
      </ul>
    </div>
  );
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    //completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
    date: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}
