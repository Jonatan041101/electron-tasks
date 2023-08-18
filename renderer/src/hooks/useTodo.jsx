import { useEffect } from 'react';
import { IS_EDIT, TEXT } from '../components/reducer';

export default function useTodo(newText, isEdit, text, id, onUpdate, dispatch) {
  useEffect(() => {
    dispatch({ type: TEXT, payload: text });
  }, [text, isEdit]);

  const handleUpdateTodo = (evt) => {
    evt.preventDefault();
    onUpdate(id, newText);
    handleChangeEditTodo();
  };

  const handleChange = (evt) => {
    const { value } = evt.target;
    dispatch({ type: TEXT, payload: value });
  };

  const handleChangeEditTodo = () => {
    dispatch({ type: IS_EDIT });
  };

  return {
    handleUpdateTodo,
    handleChange,
    handleChangeEditTodo,
  };
}
