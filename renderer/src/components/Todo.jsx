import React, { useReducer } from 'react';
import ButtonEdit from '../atoms/ButtonEdit';
import Form from '../atoms/Form';
import Input from '../atoms/Input';
import ButtonComplete from '../atoms/ButtonComplete';
import { isValidNote } from '../../utils/isValidNote';
import { INITIAL_STATE, reducer } from './reducer';
import useTodo from '../hooks/useTodo';

export default function Todo({ todo, onUpdate }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { handleChange, handleUpdateTodo, handleChangeEditTodo } = useTodo(
    state.text,
    state.isEdit,
    todo.text,
    todo.id,
    onUpdate,
    dispatch,
  );

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
