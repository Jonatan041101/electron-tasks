import React, { useEffect, useState } from 'react';
import ButtonEdit from '../atoms/ButtonEdit';
import Form from '../atoms/Form';
import Input from '../atoms/Input';
import ButtonComplete from '../atoms/ButtonComplete';
import { isValidNote } from '../../utils/isValidNote';

export default function Todo({ todo, onUpdate }) {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(todo.text);
  useEffect(() => {
    setText(todo.text);
  }, [todo.text, isEdit]);
  const handleUpdateTodo = (evt) => {
    evt.preventDefault();
    onUpdate(todo.id, text);
    handleChangeEditTodo();
  };
  const handleChange = (evt) => {
    const { value } = evt.target;
    setText(value);
  };
  const handleChangeEditTodo = () => {
    setIsEdit(!isEdit);
  };
  const IS_DISABLED = isValidNote(text);
  const TEXT_BUTTON_EDIT = isEdit ? 'Cancelar' : 'Editar';
  return (
    <article>
      {isEdit ? (
        <Form onSubmit={handleUpdateTodo}>
          <Input
            handleChange={handleChange}
            name="Edit"
            placeholder="Edita tu todo"
            value={text}
            type="text"
          />
          <ButtonComplete
            handleClick={() => {}}
            isDisabled={IS_DISABLED}
            text="Completar"
          />
        </Form>
      ) : (
        todo.text
      )}
      <ButtonEdit
        text={TEXT_BUTTON_EDIT}
        handleClick={handleChangeEditTodo}
        isDisabled={false}
      />
    </article>
  );
}
