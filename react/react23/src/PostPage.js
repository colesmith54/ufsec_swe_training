import { useParams, Link, useNavigate } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

const PostPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const deletePost = useStoreActions((actions) => actions.deletePost);
    const getPostById = useStoreState((state) => state.getPostById);
    const post = getPostById(id);

    const handleDelete = (id) => {
        deletePost(id);
        navigate("/");
    };

    return (
        <main className="PostPage">
            <article className="post">
                {post && (
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <Link to={`/edit/${post.id}`}>
                            <button className="editButton">Edit Post</button>
                        </Link>
                        <button
                            className="deleteButton"
                            onClick={(e) => handleDelete(post.id)}
                        >
                            Delete Post
                        </button>
                    </>
                )}
                {!post && (
                    <>
                        <h2>Post not found</h2>
                        <p>
                            Cannot find the post you are looking for. Please
                            return to the <Link to="/">homepage</Link>.
                        </p>
                    </>
                )}
            </article>
        </main>
    );
};

export default PostPage;
