import { useState } from 'react';
import useGenerateId from './useGenerateId';
import { newTodoContract } from '../../utils/createTodo';

export default function useTodo() {
  const [todos, setTodos] = useState([]);
  const { generateId } = useGenerateId();
  const handleCreateNote = (todo) => {
    const id = generateId();
    const { newTodo } = newTodoContract(todo, id);
    setTodos([...todos, newTodo]);
  };
  return {
    todos,
    handleCreateNote,
  };
}
