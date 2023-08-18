import React, { useState } from 'react';
import Input from '../atoms/Input';
import ButtonComplete from '../atoms/ButtonComplete';

export default function CreateTodo({ createTodo }) {
  const [todo, setTodo] = useState('');
  const handleChange = (evt) => {
    const { value } = evt.target;
    setTodo(value);
  };
  const handleResetInput = () => {
    setTodo('');
  };
  const handleCreateTodo = () => {
    createTodo(todo);
    handleResetInput();
  };
  return (
    <div className="create">
      <Input
        name="create"
        handleChange={handleChange}
        placeholder="Cree una nueva nota"
        value={todo}
        type="text"
      />
      <ButtonComplete handleClick={handleCreateTodo} text="Crear Nota" />
    </div>
  );
}
