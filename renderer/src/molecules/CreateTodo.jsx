import React, { useState } from 'react';
import Input from '../atoms/Input';
import ButtonComplete from '../atoms/ButtonComplete';

export default function CreateTodo() {
  const [todo, setTodo] = useState('');
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setTodo(value);
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
      <ButtonComplete handleClick={() => {}} text="Crear Nota" />
    </div>
  );
}
