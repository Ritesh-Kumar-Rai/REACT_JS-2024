import { useReducer } from 'react';
import { INITIAL_VALUES, ACTIONS, form_reducer } from './store/formReducerStore';
import './App.css'
import ThemeToggleBtn from './ThemeToggleBtn';

function App() {
  const [state, dispatch] = useReducer(form_reducer, INITIAL_VALUES);

  const handleChange = (e) => {
    dispatch({
      type: ACTIONS.CHANGE_VALUE,
      payload: {
        [e.target.name]: e.target.value
      }
    });
  };

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT_QUANTITY })
  }
  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT_QUANTITY })
  }

  return (
    <>
      <h1>useReducer by Form Handling</h1>
      <ThemeToggleBtn />
      <form action="#">
        <input type="text" name='name' placeholder='enter your name...' autoComplete="off" value={state.name} onChange={handleChange} />
        <input type="email" name='email' value={state.email} placeholder='enter your e-mail here...' autoComplete="off" onChange={handleChange} />
        <select name="country" value={state.country} onChange={handleChange}>
          <option value="-1">Select your Country</option>
          <option value="india">India</option>
          <option value="nepal">Nepal</option>
          <option value="russia">Russia</option>
          <option value="us">US</option>
          <option value="isreal">Isreal</option>
        </select>
        <div>
          <button type='button' onClick={decrement}>-</button>
          <span>{state.quantity}</span>
          <button type='button' onClick={increment}>+</button>
        </div>
      </form>
    </>
  )
}

export default App
