import React from 'react';
import ButtonEdit from '../atoms/ButtonEdit';

export default function Todo({ todo, onUpdate }) {
  const handleUpdateTodo = () => {
    onUpdate(todo.id, todo.text);
  };
  return (
    <article>
      {todo.text}
      <ButtonEdit
        text="Editar"
        handleClick={handleUpdateTodo}
        isDisabled={false}
      />
    </article>
  );
}
