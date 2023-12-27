import Header from "./Header";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import apiRequest from "./apiRequest";
import { useState, useEffect } from "react";

function App() {
    const API_URL = "http://localhost:3500/items";

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");
    const [search, setSearch] = useState("");
    const [fetchError, setFetchError] = useState(null);
    const [loading, setLoading] = useState(false);

    // runs whenever the second argument changes
    // useEffect is async, so it runs after the render
    useEffect(() => {
        const fetchItems = async () => {
            try {
                setLoading(true);
                const response = await fetch(API_URL);
                if (!response.ok) throw Error("Fetch failed");
                const data = await response.json();
                setItems(data);
                setFetchError(null);
            } catch (err) {
                setFetchError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    const addItem = async (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const myNewItem = { id, checked: false, text: item };
        const listItems = [...items, myNewItem];
        setItems(listItems);

        const postOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(myNewItem),
        };
        const result = await apiRequest(API_URL, postOptions);
        if (result) setFetchError(result);
    };

    const handleCheck = async (id) => {
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(listItems);

        const myItem = listItems.filter((item) => item.id === id);
        const updateOptions = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ checked: myItem[0].checked }),
        };
        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl, updateOptions);
        if (result) setFetchError(result);
    };

    const handleDelete = async (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);

        const myItem = items.find((item) => item.id === id);
        const deleteOptions = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(myItem),
        };
        const result = await apiRequest(`${API_URL}/${id}`, deleteOptions);
        if (result) setFetchError(result);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem) return;
        addItem(newItem);
        setNewItem("");
    };

    return (
        <div className="App">
            <Header title="Grocery List" />
            <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <SearchItem search={search} setSearch={setSearch} />
            <main>
                {loading && <p>Loading...</p>}
                {fetchError && (
                    <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>
                )}
                {!fetchError && !loading && (
                    <Content
                        items={items.filter((item) =>
                            item.text
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        )}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                )}
            </main>
            <Footer length={items.length} />
        </div>
    );
}

export default App;
