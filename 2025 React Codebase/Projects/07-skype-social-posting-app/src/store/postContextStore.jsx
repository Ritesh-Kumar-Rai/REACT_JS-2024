import { createContext, useContext, useEffect, useReducer, useState } from "react";

const INITIAL_VALUE = {
    posts: [
        {
            "id": 1,
            "title": "His mother had always taught him",
            "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
            "tags": [
                "history",
                "american",
                "crime"
            ],
            "reactions": {
                "likes": 192,
                "dislikes": 25
            },
            "views": 305,
            "userId": 121
        },
    ],
    addPost: (post) => { },
    deletePost: (id) => { },
    likePost: (id) => { },
    dislikePost: (id) => { },
    likesDislikesDB: {
        likes: [],
        dislikes: []
    }
};

// context created
const PostContext = createContext(INITIAL_VALUE);

// ACTIONS object for reducer action-type
const ACTIONS = {
    // ADD_INITIAL_POSTS: "ADD_INITIAL_POSTS",
    ADD_POST: "ADD_POST",
    DELETE_POST: "DELETE_POST",
    LIKE_POST: "LIKE_POST",
    UNLIKE_POST: "UNLIKE_POST",
    DISLIKE_POST: "DISLIKE_POST",
    UNDISLIKE_POST: "UNDISLIKE_POST"
};

// init function for useReducer to get the all possible data's from localStorage()
const init = (state) => {
    const localData = JSON.parse(localStorage.getItem("Skype-Posting-App"));
    const state_posts = localData?.state_posts || [];
    if (state_posts.length > 0) return state_posts;

    return state;
};

// reducer function for state and state-operation management
const reducer = (prev_state, action) => {
    try {

        switch (action.type) {

            /*case ACTIONS.ADD_INITIAL_POSTS:
                return [...prev_state, ...action.payload];*/

            case ACTIONS.ADD_POST:
                return [action.payload, ...prev_state];

            case ACTIONS.DELETE_POST:
                return prev_state.filter((post) => post.id !== action.payload.post_id);

            case ACTIONS.LIKE_POST:
                return prev_state.map((post) => post.id === action.payload.post_id ? { ...post, reactions: { ...post.reactions, likes: post.reactions.likes + 1 } } : post);

            case ACTIONS.UNLIKE_POST:
                return prev_state.map((post) => post.id === action.payload.post_id ? { ...post, reactions: { ...post.reactions, likes: post.reactions.likes - 1 } } : post);

            case ACTIONS.DISLIKE_POST:
                return prev_state.map((post) => post.id === action.payload.post_id ? { ...post, reactions: { ...post.reactions, dislikes: post.reactions.dislikes + 1 } } : post);

            case ACTIONS.UNDISLIKE_POST:
                return prev_state.map((post) => post.id === action.payload.post_id ? { ...post, reactions: { ...post.reactions, dislikes: post.reactions.dislikes - 1 } } : post);

            default:
                return prev_state;
        }

    } catch (error) {
        console.error(`${error.name} -> ${error.message}`);
        return prev_state;
    }

};


// context provider component
const PostContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, [], init); // 1. reducer function 2. initial value and 3rd is init() method which will setup the initial value from any other mentioned way

    const localData = JSON.parse(localStorage.getItem("Skype-Posting-App"))?.likesDislikesDB || undefined;
    const [likesDislikesDB, setLikesDislikesDB] = useState(localData || {
        likes: [],
        dislikes: []
    });

    const addPost = (post) => {

        if (!post || Object.keys(post).length === 0) {
            throw new ReferenceError("Something went wrong while saving post... !");
        }

        dispatch({
            type: ACTIONS.ADD_POST,
            payload: post
        });
    }

    const deletePost = (id) => {
        try {

            if (!id) {
                throw ReferenceError("'id' parameter is required!");
            }

            dispatch({
                type: ACTIONS.DELETE_POST,
                payload: { post_id: id }
            });
        } catch (error) {
            console.error(`${error.name} -> ${error.message}`);
        }

    }

    const likePost = (id) => {

        try {

            if (!id) throw new ReferenceError("'id' param must be pass!");

            if (likesDislikesDB.likes.includes(id)) {
                const index = likesDislikesDB.likes.indexOf(id);
                setLikesDislikesDB(prev => {
                    const newArr = prev.likes;
                    newArr.splice(index, 1)
                    return { ...prev, likes: newArr };
                });
                dispatch({
                    type: ACTIONS.UNLIKE_POST,
                    payload: { post_id: id }
                });
            } else {
                setLikesDislikesDB((prev) => {
                    const newArr = prev.likes;
                    newArr.push(id);
                    return { ...prev, likes: newArr }
                });
                dispatch({
                    type: ACTIONS.LIKE_POST,
                    payload: { post_id: id }
                });
            }


        } catch (error) {
            console.error(`${error.name} -> ${error.message}`);
        }

    }

    const dislikePost = (id) => {
        try {
            if (!id) throw new ReferenceError("'id' param must be pass!");

            // checking is id exists in likedislikesDB
            if (likesDislikesDB.dislikes.includes(id)) {
                const index = likesDislikesDB.dislikes.indexOf(id);
                setLikesDislikesDB((prev) => {
                    const newArr = prev.dislikes;
                    newArr.splice(index, 1);
                    return { ...prev, dislikes: newArr };
                });
                dispatch({
                    type: ACTIONS.UNDISLIKE_POST,
                    payload: { post_id: id }
                });

            } else {
                setLikesDislikesDB((prev) => {
                    const newArr = prev.dislikes;
                    newArr.push(id);
                    return { ...prev, dislikes: newArr }
                });
                dispatch({
                    type: ACTIONS.DISLIKE_POST,
                    payload: { post_id: id }
                });

            }

        } catch (error) {
            console.error(`${error.name} -> ${error.message}`);
        }
    }


    useEffect(() => {
        console.log("Namaste! India");
        const skype_data = { state_posts: state, likesDislikesDB };
        localStorage.setItem("Skype-Posting-App", JSON.stringify(skype_data));
    }, [state]);


    /* useEffect(() => {
         const controller = new AbortController();
         fetch("https://dummyjson.com/posts?limit=10&skip=10", { signal: controller.signal })
             .then(res => res.json())
             .then(res => {
                 console.log(Array.isArray(res.posts), res.posts, typeof (res.posts))
                 dispatch({ type: ACTIONS.ADD_INITIAL_POSTS, payload: res.posts });
             }).catch(console.error);
 
         return () => {
             controller.abort();
             console.error("fetch cleaned...aborted");
         }
     }, []);*/
    /*[Note: If you want to load initial posts via api then be asure to remove the above useEffect which saves the data to localStorage and remove it also from init() method]
     */

    return (
        <PostContext.Provider value={{ posts: state, addPost, deletePost, likePost, dislikePost, likesDislikesDB }}>
            {children}
        </PostContext.Provider>
    );
};

// custom hook to get all values from context-provider
export const usePostContext = () => {
    return useContext(PostContext);
}

export default PostContextProvider;