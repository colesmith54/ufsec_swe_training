import { useState, useEffect } from "react";
import { Link, useParams, navigate } from "react-router-dom";
import { format } from "date-fns";
import api from "./api/posts";
import { useContext } from "react";
import { DataContext } from "./context/DataContext";

const EditPost = () => {
    const { id } = useParams();
    const [editTitle, setEditTitle] = useState("");
    const [editBody, setEditBody] = useState("");
    const { posts, setPosts } = useContext(DataContext);

    const post = posts.find((post) => post.id === Number(id));

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditBody, setEditTitle]);

    const handleEdit = async (id) => {
        const editedPost = {
            id: id,
            title: editTitle,
            datetime: format(new Date(), "MMMM dd, yyyy pp"),
            body: editBody,
        };

        try {
            const response = await api.put(`/posts/${id}`, editedPost);
            const postsList = posts.map((post) =>
                post.id === id ? { ...response.data } : post
            );
            setPosts(postsList);
            setEditTitle("");
            setEditBody("");
            navigate("/");
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <main className="NewPost">
            {editTitle && (
                <>
                    <h2>Edit Post</h2>
                    <form
                        className="newPostForm"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <label htmlFor="postTitle">Title:</label>
                        <input
                            type="text"
                            id="postTitle"
                            name="postTitle"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <label htmlFor="postBody">Post:</label>
                        <textarea
                            id="postBody"
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                        />
                        <button
                            type="submit"
                            onClick={() => handleEdit(post.id)}
                        >
                            Submit
                        </button>
                    </form>
                </>
            )}
            {!editTitle && (
                <>
                    <h2>Post Not Found</h2>
                    <Link to="/">Go Home</Link>
                </>
            )}
        </main>
    );
};

export default EditPost;
