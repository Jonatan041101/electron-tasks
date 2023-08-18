import React from 'react';
import CreateTodo from '../molecules/CreateTodo';
import Todo from './Todo';
import useTodo from '../hooks/useTodo';
export default function Todos() {
  const { todos, handleCreateNote } = useTodo();
  return (
    <div>
      <CreateTodo createTodo={handleCreateNote} />
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
