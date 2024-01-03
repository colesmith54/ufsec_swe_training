import Layout from "./Layout";
import About from "./About";
import Missing from "./Missing";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import api from "./api/posts";

function App() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [editTitle, setEditTitle] = useState("");
    const [editBody, setEditBody] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get("/posts");
                setPosts(response.data);
            } catch (err) {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(err.message);
                }
            }
        };
        fetchPosts();
    }, []);

    useEffect(() => {
        const filteredPosts = posts.filter(
            (post) =>
                post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.body.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(filteredPosts.reverse());
    }, [posts, search]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), "MMMM dd, yyyy pp");
        const newPost = {
            id: id,
            title: postTitle,
            datetime: datetime,
            body: postBody,
        };

        try {
            const response = await api.post("/posts", newPost);
            setPosts([...posts, response.data]);
            setPostTitle("");
            setPostBody("");
            navigate("/");
        } catch (err) {
            console.log(err.message);
        }
    };

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
        <Routes>
            <Route
                path="/"
                element={<Layout search={search} setSearch={setSearch} />}
            >
                <Route index element={<Home posts={searchResults} />} />
                <Route path="/post">
                    <Route
                        index
                        element={
                            <NewPost
                                handleSubmit={handleSubmit}
                                postTitle={postTitle}
                                setPostTitle={setPostTitle}
                                postBody={postBody}
                                setPostBody={setPostBody}
                            />
                        }
                    />
                    <Route
                        path=":id"
                        element={
                            <PostPage
                                posts={posts}
                                handleDelete={handleDelete}
                            />
                        }
                    />
                </Route>
                <Route path="/edit/:id">
                    <Route
                        index
                        element={
                            <EditPost
                                posts={posts}
                                handleEdit={handleEdit}
                                editTitle={editTitle}
                                setEditTitle={setEditTitle}
                                editBody={editBody}
                                setEditBody={setEditBody}
                            />
                        }
                    />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Missing />} />
            </Route>
        </Routes>
    );
}

export default App;
