export const newTodo = (todo, id) => {
  const newTodo = {
    id,
    text: todo,
  };
  return newTodo;
};
