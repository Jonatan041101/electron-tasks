import React, { useEffect, useReducer } from 'react';
import ButtonEdit from '../atoms/ButtonEdit';
import Form from '../atoms/Form';
import Input from '../atoms/Input';
import ButtonComplete from '../atoms/ButtonComplete';
import { isValidNote } from '../../utils/isValidNote';
import { INITIAL_STATE, IS_EDIT, TEXT, reducer } from './reducer';

export default function Todo({ todo, onUpdate }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    dispatch({ type: TEXT, payload: todo.text });
  }, [todo.text, state.isEdit]);
  const handleUpdateTodo = (evt) => {
    evt.preventDefault();
    onUpdate(todo.id, state.text);
    handleChangeEditTodo();
  };
  const handleChange = (evt) => {
    const { value } = evt.target;
    dispatch({ type: TEXT, payload: value });
  };
  const handleChangeEditTodo = () => {
    dispatch({ type: IS_EDIT });
  };
  const IS_DISABLED = isValidNote(state.text);
  const TEXT_BUTTON_EDIT = state.isEdit ? 'Cancelar' : 'Editar';
  return (
    <article>
      {state.isEdit ? (
        <Form onSubmit={handleUpdateTodo}>
          <Input
            handleChange={handleChange}
            name="Edit"
            placeholder="Edita tu todo"
            value={state.text}
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
