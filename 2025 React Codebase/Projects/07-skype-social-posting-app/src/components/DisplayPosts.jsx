import { usePostContext } from "../store/postContextStore";
import PostCard from './PostCard';

const DisplayPosts = () => {

    const { posts } = usePostContext();
    console.log(posts);

    return (
        <div className="w-100 d-flex justify-content-center gap-3 flex-wrap">
            {posts.length === 0 && <h1 className="no-post-heading">No Post's available yet.</h1>}
            {posts.map((each_post) => <PostCard key={each_post.id} post_obj={each_post} />)}
        </div>
    );
};

export default DisplayPosts;