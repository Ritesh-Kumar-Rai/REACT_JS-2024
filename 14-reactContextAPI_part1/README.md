# 14- React Context API 

        The context api is used to create a global variable and provide data globally to all components and pages without passing data component to component via props unwillingly.

        At the previously, we need to pass data via props to child components to make available data to any component this is a 1st problem. 2nd problem is we can't pass data from child component to parent component what if we need to access data in parent element and the last nested component only and change data from last component which reflects to parent without using props.

        This is the problem we get solved by using React Context API.



## How to create and use Context API in our React App?

- First think about which variable or data you are planning to give access globally.

- In my case, I want to provide user data object globally across all components.

- Go to 'src' Folder of React app. 
    
    - Inside it create a folder called "context"
    - Go to "context" folder, inside it create one file filename_Context.js [In my case, UserContext.js]
    - Inside UserContext.js

    UserContext.js

    ```javascript
    import React from 'react'; // or import {createContext} from 'react'

    const UserContext  = React.createContext();
    // or const UserContext = createContext();

    export default UserContext;
    ``` 
    - Then, create another file for Context Providing called filename_Provider.jsx [In my case, UserContextProvider.jsx]
    - Inside UserContextProvider.jsx

    UserContextProvide.jsx

    ```javascript
    import React from 'react'; // or import React, {useState} from 'react';
    import UserContext from './UserContext';

    const UserContextProvider = ({children}) =>{

        const [user, setUser] = React.useState(null);
        // or const [user, setUser] = useState(null);

            return (
                <UserContext.Provider value={{user, setUser}}>
                    {children}
                </UserContext.Provider>
            )
    }

    export default UserContextProvider;
    ```

    - Now create a 'components' folder, then create the components as per your requirement
    - In my case, I create two files:

    1. Login.jsx
    ```javascript
    import React, {useState,useContext} from 'react';
    import UserContext from '../context/UserContext';

    const Login  = () =>{
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        // we used useContext for data updation
        const {setUser} = useContext(UserContext);

        // then i set data's to setUser
        function handleSubmit(){
        setUser({username, password});
        }

        //..... rest of code

        return (...)
    }
    ```

    2. Profile.jsx
    ```javascript
     import React, {useContext} from 'react';
    import UserContext from '../context/UserContext';

    const Profile = () =>{

        // we used useContext to get a data
        const {user} = useContext(UserContext);

        return (
            <h1>Username : {user,username}</h1>
        );
    }
    ```

- Now go to either 'main.jsx' or 'App.jsx' and setup the ContextProvider to all Children Components/pages like :

App.jsx
```javascript
import React from 'react';
import UserContextProvider from './context/UserContextProvider';
import {Login, Profile} from './components';

const App = ()=>{

    return (
        <UserContextProvider>
                <Login />
                <Profile />
        </UserContextProvider>
    );
}
```

By doing this, we can access and modify any data globally.


## By RITESH KUMAR RAI