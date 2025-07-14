import { useReducer } from 'react';
import { INITIAL_VALUE, ACTIONS, reducer } from './store/fetchJokeReducer';
import './App.css'

function App() {

  const [joke_state, dispatch] = useReducer(reducer, INITIAL_VALUE);

  const fetchjoke = () => {
    dispatch({ type: ACTIONS.FETCH_STARTED });
    const api_url = "https://official-joke-api.appspot.com/random_joke";
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ACTIONS.FETCH_COMPLETED,
          payload: data
        });

      })
      .catch((error) => {
        dispatch({ type: ACTIONS.ERROR_FAILED, payload: error });
      });
  };

  return (
    <>
      <h1>useReducer() hook in React js</h1>

      <div className='container'>
        <button type='button' onClick={fetchjoke}>{joke_state.isLoading ? <><i className="fa fa-circle-o-notch fa-spin"></i> Loading</> : "Fetch Joke Online"}</button>
        <ul>
          <li><b>Type:</b> {joke_state?.joke_data?.type}</li>
          <li><b>Setup:</b> {joke_state?.joke_data?.setup}</li>
          <li><b>Punchline:</b> {joke_state?.joke_data?.punchline}</li>
          <p>{joke_state.isError}</p>
        </ul>
      </div>
    </>
  )
}

export default App
