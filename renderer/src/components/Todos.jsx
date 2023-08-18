import React from 'react';
import CreateTodo from '../molecules/CreateTodo';
import Todo from './Todo';
import useTodos from '../hooks/useTodos';
export default function Todos() {
  const { todos, handleCreateNote, handleUpdateTodo } = useTodos();
  return (
    <div>
      <CreateTodo createTodo={handleCreateNote} />
      {todos.map((todo) => (
        <Todo onUpdate={handleUpdateTodo} todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
