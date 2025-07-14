import { createContext, useContext } from "react";

const INITIAL_VALUES = {
  todos: [{ id: 1, todo: "", isCompleted: false }],
  dispatch: () => {},
  ACTIONS: {}, // actions is used for dispatch type of actions more convieniently
};

/*
* Now in dispatch method we will have multiple functions for todo
  related operations like:
  * addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
* which you will tell by passing action type to dispatch in a   object form.. like: 
    {type: ADD_TODO, payload: data}
    the type property invokes the method as per it's type;
    in our case addTodo();  
*/

const todoContext = createContext(INITIAL_VALUES);

const TodoContextProvider = todoContext.Provider;

const useTodoContext = () => {
  return useContext(todoContext);
};

export { TodoContextProvider, useTodoContext };
