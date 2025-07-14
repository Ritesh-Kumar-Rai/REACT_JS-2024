// store which uses reducer data structures to manage all todo related operations and state

const INITIAL_VALUE = []; // array of todos

const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  UPDATE_TODO: "UPDATE_TODO",
  DELETE_TODO: "DELETE_TODO",
  TOGGLE_COMPLETE: "TOGGLE_COMPLETE",
};

const init = (prev_state) => {
  const local_todos = JSON.parse(localStorage.getItem("react-todo-app-by-RKR"));
  if (local_todos && local_todos.length > 0) {
    return local_todos;
  }
  return prev_state;
};

const reducer = function (state, action) {
  try {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [{ id: Date.now(), ...action.payload }, ...state];

      case ACTIONS.UPDATE_TODO:
        return state.map((each_todo) =>
          each_todo.id === action.payload.id
            ? { ...each_todo, todo: action.payload.todo_name }
            : each_todo
        );

      case ACTIONS.DELETE_TODO:
        return state.filter((each_todo) => each_todo.id !== action.payload);

      case ACTIONS.TOGGLE_COMPLETE:
        return state.map((each_todo) =>
          each_todo.id === action.payload
            ? { ...each_todo, isCompleted: !each_todo.isCompleted }
            : each_todo
        );

      default:
        return state;
    }
  } catch (error) {
    console.error(`${error.name} -> ${error.message}`);
  }
};

export { INITIAL_VALUE, ACTIONS, init, reducer };
