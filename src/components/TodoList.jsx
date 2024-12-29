import React, {useEffect, useState} from 'react';
import AddNewTodo from "./AddNewTodo";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Pay bills"},
    { id: 2, text: "Do your homework"},
    { id: 3, text: "Feed the dog"},
  ]);

  const [count, setCount] = useState(0);

  const addTodo = (text) => {
    // We use the spread operator and adds a new todo to the array
    setTodos([
      ...todos,
      { id: Math.random(), text },
    ])
  }

  useEffect(() => {
    console.log('use effect', todos);
  },[todos]);

  useEffect(() => {
    console.log('use effect', count);
  },[count]);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <AddNewTodo addTodo={addTodo} />
      <button onClick={() => setCount(count + 1)}>Score: {count}</button>
    </div>
  );
};

export default TodoList;