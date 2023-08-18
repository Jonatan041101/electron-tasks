import React, { useState } from 'react';
import Input from '../atoms/Input';
import ButtonComplete from '../atoms/ButtonComplete';
import Form from '../atoms/Form';
import { isValidNote } from '../../utils/isValidNote';

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
  const IS_DISABLED = isValidNote(todo);
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
        <ButtonComplete
          isDisabled={IS_DISABLED}
          handleClick={() => {}}
          text="Crear Nota"
        />
      </Form>
    </div>
  );
}
