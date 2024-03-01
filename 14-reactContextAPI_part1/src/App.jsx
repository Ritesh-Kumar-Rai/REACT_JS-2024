import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import './App.css';
import Profile from './components/Profile';

function App() {


  return (
    <UserContextProvider>
        <Login />
        <Profile />
    </UserContextProvider>
  )
}

export default App
