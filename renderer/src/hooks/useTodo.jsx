import React, { useRef, useState } from 'react';

export default function useTodo() {
  const [todos, setTodos] = useState([]);
  const refId = useRef(1);
  const handleCreateNote = (todo) => {
    const { newTodo } = newTodoContract(todo, refId.current);
    refId.current = refId.current + 1;
    setTodos([...todos, newTodo]);
  };
  return {
    todos,
    handleCreateNote,
  };
}
