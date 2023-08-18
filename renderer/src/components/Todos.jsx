import React from 'react';
import CreateTodo from '../molecules/CreateTodo';
import Todo from './Todo';
import useTodo from '../hooks/useTodo';
export default function Todos() {
  const { todos, handleCreateNote, handleUpdateTodo } = useTodo();
  return (
    <div>
      <CreateTodo createTodo={handleCreateNote} />
      {todos.map((todo) => (
        <Todo onUpdate={handleUpdateTodo} todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
