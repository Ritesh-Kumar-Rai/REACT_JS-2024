import { useEffect, useReducer } from 'react';
import { INITIAL_VALUE, ACTIONS, init, reducer } from './store';
import { TodoContextProvider } from './context';
import { TodoForm, TodoItem } from './components';

function App() {

  const [todo_state, dispatch] = useReducer(reducer, INITIAL_VALUE, init);

  useEffect(() => {
    localStorage.setItem('react-todo-app-by-RKR', JSON.stringify(todo_state));
  }, [todo_state]);

  return (
    <>
      <TodoContextProvider value={{ todos: todo_state, dispatch, ACTIONS }}>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-6xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-6xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mt-12 mb-4">
              {/* Todo form goes here */}
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todo_state.map((each_todo) => (<div key={each_todo.id} className='w-full'><TodoItem todoObj={each_todo} /></div>))}
            </div>
          </div>
        </div>
      </TodoContextProvider>
    </>
  )
}

export default App
