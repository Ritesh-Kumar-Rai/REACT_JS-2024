import { useRef, useState } from "react";
import Utility from '../utils/Utility';
import { usePostContext } from "../store/postContextStore";

const CreatePost = () => {

    const [error, setError] = useState();

    const postTitleElement = useRef(null);
    const postDescElement = useRef(null);
    const postLikesElement = useRef(null);
    const postDislikesElement = useRef(null);
    const postTagsElement = useRef(null);

    const { addPost } = usePostContext();

    const saveTodo = (event) => {
        event.preventDefault();

        try {
            const title = postTitleElement.current.value;
            const desc = postDescElement.current.value;
            const likes = Number(postLikesElement.current.value);
            const dislikes = Number(postDislikesElement.current.value);
            const tagsUnfiltered = (postTagsElement.current.value).trim();
            const tags = tagsUnfiltered.length === 0 ? [] : tagsUnfiltered.split(' ');

            const postObj = {
                id: Date.now(),
                title,
                body: desc,
                tags,
                reactions: {
                    likes,
                    dislikes
                },
                views: Math.floor(Math.random() * 100000),
                userId: "RKR@563bA"
            };

            const missing = Utility.findMissingProps(postObj); // static class invokation
            if (missing.length > 0) {
                const error_message = 'Missing or empty properties: ' + missing[0];
                console.error(error_message);
                setError(` You should check in on some of those fields.. '${missing[0]}' field is missing`);
            } else {
                addPost(postObj);
                // reseting values
                setError(null);
                postTitleElement.current.value = '';
                postDescElement.current.value = '';
                postLikesElement.current.value = '';
                postDislikesElement.current.value = '';
                postTagsElement.current.value = '';
            }
        } catch (error) {
            const err_msg = `${error.name} -> ${error.message}`;
            console.error(err_msg);
            setError(err_msg);
        }
    }

    return (
        <form className="w-100" action='#' method="post" onSubmit={saveTodo}>
            <h1 className="text-center mb-3" style={{ fontSize: '3rem' }}>Create your Post</h1>

            {error && (<div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Oops Form Error!</strong> {error}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setError(null)}></button>
            </div>)}

            <div className="mb-3">
                <label htmlFor="post-title" className="form-label">Post Title</label>
                <input type="text" className="form-control" id="post-title" aria-describedby="postTitleHelp" ref={postTitleElement} />
                <div id="postTitleHelp" className="form-text">Tell to everyone how you are feeling now.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="post-desc" className="form-label">Describe your Post</label>
                <textarea type="text" className="form-control" id="post-desc" rows={5} aria-describedby="postDescHelp" ref={postDescElement} />
                <div id="postDescHelp" className="form-text">Describe in detail about your post..</div>
            </div>

            <div className="mb-3 d-flex align-content-center gap-4">
                <div>
                    <label htmlFor="likes" className="form-label">
                        Likes
                    </label>
                    <input
                        type="number"
                        ref={postLikesElement}
                        className="form-control"
                        id="likes"
                        placeholder="no. of likes"
                    ></input>
                </div>
                <div>
                    <label htmlFor="dislikes" className="form-label">
                        DisLikes
                    </label>
                    <input
                        type="number"
                        ref={postDislikesElement}
                        className="form-control"
                        id="dislikes"
                        placeholder="no. of dislikes"
                    ></input>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">
                    Tags
                </label>
                <input
                    type="text"
                    ref={postTagsElement}
                    className="form-control"
                    id="tags"
                    placeholder="type tags separated by space...  example: learning art reactjs"
                />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
};

export default CreatePost;