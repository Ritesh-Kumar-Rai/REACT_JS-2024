import { AiOutlineLike, AiFillLike, AiFillDislike, AiOutlineDislike } from "react-icons/ai";
import { usePostContext } from "../store/postContextStore";
import Utility from "../utils/Utility";

const PostCard = ({ post_obj }) => {
    const { deletePost, likePost, dislikePost, likesDislikesDB } = usePostContext();

    return (
        <div className="card" style={{ minWidth: "20rem", maxWidth: "30rem" }}>
            <div className="card-header d-flex align-items-center justify-content-between">
                User: {post_obj?.userId || 'anonymous-failed'}
                <span
                    className="badge btn text-bg-danger"
                    onClick={() => deletePost(post_obj.id)}
                >
                    Delete Post
                </span>
            </div>
            <div className="card-body">
                <h5 className="card-title">{post_obj?.title || ''}</h5>
                <p className="card-text">{post_obj?.body || ''}</p>
                <hr />
                <div className="d-flex align-items-center justify-content-between gap-1">
                    <span className="d-flex align-items-center gap-1 w-50">
                        <span className="d-flex align-items-center w-50 border-end border-2 border-secondary">
                            {Utility.isAvailableInArr(post_obj.id, likesDislikesDB.likes) ? (
                                <AiFillLike
                                    size={25}
                                    fontWeight={600}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => likePost(post_obj.id)}
                                />
                            ) : (
                                <AiOutlineLike
                                    size={25}
                                    fontWeight={600}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => likePost(post_obj.id)}
                                />
                            )}
                            {post_obj?.reactions?.likes || 0} Likes
                        </span>
                        <span className="d-flex align-items-center w-50">
                            {Utility.isAvailableInArr(post_obj.id, likesDislikesDB.dislikes) ? (
                                <AiFillDislike
                                    size={25}
                                    fontWeight={600}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => dislikePost(post_obj.id)}
                                />
                            ) : (
                                <AiOutlineDislike
                                    size={25}
                                    fontWeight={600}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => dislikePost(post_obj.id)}
                                />
                            )}
                            {post_obj?.reactions?.dislikes || 0} Dislikes
                        </span>
                    </span>
                    <span className="text-secondary fw-bold">
                        {post_obj?.views} Views
                    </span>
                </div>
                <hr />
                <div className="d-flex gap-1 flex-wrap">
                    {post_obj?.tags?.map((tag, index) => {
                        let text_bg_color;
                        if (tag.includes("#")) {
                            text_bg_color = "text-bg-primary";
                        } else if (tag.includes("@")) {
                            text_bg_color = "text-bg-warning";
                        } else {
                            text_bg_color = "text-bg-secondary";
                        }

                        return (
                            <span
                                key={tag + index}
                                className={`badge rounded-pill ${text_bg_color}`}
                            >
                                {tag}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PostCard;
