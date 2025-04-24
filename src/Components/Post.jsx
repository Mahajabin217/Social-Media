import { useContext } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { PostList } from "../Store/Post-list-store";

const Post = ({ post }) => {
    const { deletePost } = useContext(PostList);
    return (
        <>
            <div className="card post-card" style={{ width: "30rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{post.title}
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                            onClick={() => { deletePost(post.id) }}>
                            <RiDeleteBin6Fill />
                        </span>
                    </h5>
                    <p className="card-text">{post.body}</p>
                    {post.tags.map((tag) => (
                        <span key={tag} className="btn btn-primary hashtag">{tag}</span>
                    ))}
                    <div className="alert alert-success reactions" role="alert">
                        {`This post has been clicked by ${post.reactions} peoples`}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Post;