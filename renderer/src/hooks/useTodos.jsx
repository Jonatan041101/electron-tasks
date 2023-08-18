import { useState } from 'react';
import useGenerateId from './useGenerateId';
import { newTodoContract } from '../../utils/createTodo';

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  const { generateId } = useGenerateId();
  const handleCreateNote = (todo) => {
    const id = generateId();
    const { newTodo } = newTodoContract(todo, id);
    setTodos([...todos, newTodo]);
  };
  const handleUpdateTodo = (id, text) => {
    const copyTodos = [...todos];
    const todo = copyTodos.find((todo) => todo.id === id);
    todo.text = text;
    setTodos(copyTodos);
  };
  return {
    todos,
    handleCreateNote,
    handleUpdateTodo,
  };
}
