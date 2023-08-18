export const INITIAL_STATE = {
  isEdit: false,
  text: '',
};
export const IS_EDIT = '@todo/edit';
export const TEXT = '@todo/text';
export const reducer = (state, action) => {
  switch (action.type) {
    case IS_EDIT: {
      return {
        ...state,
        isEdit: !state.isEdit,
      };
    }
    case TEXT: {
      return {
        ...state,
        text: action.payload,
      };
    }
    default:
      return state;
  }
};
