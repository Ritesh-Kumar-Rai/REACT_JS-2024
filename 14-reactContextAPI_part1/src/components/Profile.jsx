import React from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {

    const {user} = React.useContext(UserContext);

    if(!user) return <h3 style={{color: "red"}}>No data...</h3>;

  return (
    <div>
        <h1>Profile</h1>

        <h3>Username : {user.username}</h3>
        <h3>Password : {user.password}</h3>
    </div>
  )
}

export default Profile