export const newTodoContract = (todo, id) => {
  const newTodo = {
    id,
    text: todo,
  };
  return newTodo;
};
