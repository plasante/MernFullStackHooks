import React, {useState} from 'react';

const AddNewTodo = (props) => {
  const {addTodo} = props;
  const [todos, setTodos] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todos);
    setTodos('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="addNewTodo">Todo</label>
        <input type="text"
               placeholder="Add new todo"
               id="todo"
               onChange={(event)=> setTodos(event.target.value)}
               value={todos}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddNewTodo;