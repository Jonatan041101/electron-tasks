import React, { useState } from 'react';
import Input from '../atoms/Input';
import ButtonComplete from '../atoms/ButtonComplete';
import Form from '../atoms/Form';

export default function CreateTodo({ createTodo }) {
  const [todo, setTodo] = useState('');
  const handleChange = (evt) => {
    const { value } = evt.target;
    setTodo(value);
  };
  const handleResetInput = () => {
    setTodo('');
  };
  const handleCreateTodo = (evt) => {
    evt.preventDefault();
    createTodo(todo);
    handleResetInput();
  };
  return (
    <div className="create">
      <Form onSubmit={handleCreateTodo}>
        <Input
          name="create"
          handleChange={handleChange}
          placeholder="Cree una nueva nota"
          value={todo}
          type="text"
        />
        <ButtonComplete handleClick={() => {}} text="Crear Nota" />
      </Form>
    </div>
  );
}
