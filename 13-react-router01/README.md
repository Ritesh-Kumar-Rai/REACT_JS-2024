# 13 - React Router Part 1

Made By me RITESH KUMAR RAI

### Why Instead of useEffect() we used loader?

    In a react routing sometimes when we fetching data from API when it might lag or cause an Bad User Experience like unknown error or empty dataset.
    To solve this issue and make data ready before jumping to that page we use loader in react-router-dom <Route /> which accepts a function which i made inside the same component which called when user hover on a link then it fetched data and passed it to that component which is rendering for particular route.
    
    To use that data we use the useLoaderData() hook.
    Reference when we used this is the components/NextMcuMovie.jsx and routing done in main.jsx

### How to pass data to URL and accept it? 
    In a React-Router-Dom, if you want to pass data to url and accept that data's the following way :

    Routing :

    <Route path="/user/:id" element={<User/>}/>

    or [passing mutiple value's]

    <Route path="/product/:id/:name/:price/:quantity" element={<Product/>}/>

    To Pass data to actual url

        http:/product/145/krishna-flute/1500/8
    [Where /product is route and 
        /145 : id
        /krishna-flute : name
        /1500 : price
        /8 : quantity]  

    To accept data to that particular Component :

    1. User Component :
        import {useParams} from 'react-router-dom';

        const {id} useParams();

        render : <h1> {id} <h1/>  

    2. Product Component :
        import {useParams} from 'react-router-dom';

        const {id,name,price,quantity} = useParams();
        
                 



