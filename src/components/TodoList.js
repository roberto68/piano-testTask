import React, {PropTypes} from 'react';

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
  function isBigEnough(date) {
    return value >= 10;
  }
  const onSubmit = (event) => {
    const text = this.refs.text.value; // handle with refs
    const date = this.refs.date.value;
    addTodo(text, date);
  };
  const countDate = () => new Date.now(); // rly neccessary ??
  const toggleClick = id => event => toggleTodo(id);
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
        {todos.map(t => (
          <li key={t.get('id')}
              className='todo__item'
              onClick={toggleClick(t.get('id'))}>
            <Todo todo={t.toJS()} />
          </li>
        ))}
      </ul>
    </div>
  );
}
