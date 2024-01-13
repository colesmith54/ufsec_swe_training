import { useParams, Link, navigate } from "react-router-dom";
import api from "../api/posts";
import { useContext } from "react";
import { DataContext } from "./context/DataContext";

const PostPage = () => {
    const { id } = useParams();
    const { posts, setPosts } = useContext(DataContext);
    const post = posts.find((post) => post.id.toString() === id);

    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`);
            const postsList = posts.filter((post) => post.id !== id);
            setPosts(postsList);
            navigate("/");
        } catch (err) {
            console.log(err.message);
        }
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
