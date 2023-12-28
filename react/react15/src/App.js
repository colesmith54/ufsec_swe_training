import Header from "./Header";
import Content from "./Content";
import apiRequest from "./apiRequest";
import { useState, useEffect } from "react";

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        apiRequest("https://jsonplaceholder.typicode.com/users", setItems);
    }, []);

    return (
        <div className="App">
            <Header apiRequest={apiRequest} setItems={setItems} />
            <Content items={items} />
        </div>
    );
}

export default App;
