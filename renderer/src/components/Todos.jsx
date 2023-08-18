import React, { useRef, useState } from 'react';
import CreateTodo from '../molecules/CreateTodo';
import { newTodoContract } from '../../utils/createTodo';
import Todo from './Todo';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const refId = useRef(1);
  const handleCreateNote = (todo) => {
    const { newTodo } = newTodoContract(todo, refId.current);
    refId.current = refId.current + 1;
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <CreateTodo createTodo={handleCreateNote} />
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
