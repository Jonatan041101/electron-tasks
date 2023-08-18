import React, { useRef, useState } from 'react';
import CreateTodo from '../molecules/CreateTodo';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const refId = useRef(1);
  const handleCreateNote = (todo) => {
    const newTodo = {
      id: refId,
      text: todo,
    };
    refId.current = refId.current + 1;
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <CreateTodo createTodo={handleCreateNote} />
      {todos.map((todo) => (
        <article key={todo.id}>{todo.text}</article>
      ))}
    </div>
  );
}
