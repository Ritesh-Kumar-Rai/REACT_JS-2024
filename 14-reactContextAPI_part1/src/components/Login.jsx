import React from 'react';

import UserContext from '../context/UserContext';

const Login = () => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const {setUser} = React.useContext(UserContext);

    const handleSubmit = () =>{
        setUser({
            username,
            password
        });
    }

  return (
    <div>
        <h1>Login</h1>
        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="username" id="" />
        <br />
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='password' />
        <br /><br />
        <button type='button' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login