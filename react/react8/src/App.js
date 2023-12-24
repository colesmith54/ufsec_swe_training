import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            text: "1lb of Rice",
        },
        {
            id: 2,
            checked: false,
            text: "2lb of Beans",
        },
        {
            id: 3,
            checked: false,
            text: "3lb of Cheese",
        },
    ]);

    const handleCheck = (id) => {
        const newItems = [...items];
        const index = newItems.findIndex((item) => item.id === id);
        newItems[index].checked = !newItems[index].checked;
        setItems(newItems);
        localStorage.setItem("shoppinglist", JSON.stringify(newItems));
    };

    const handleDelete = (id) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
        localStorage.setItem("shoppinglist", JSON.stringify(newItems));
    };

    return (
        <div className="App">
            <Header title="Grocery List" />
            <Content
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
            <Footer length={items.length} />
        </div>
    );
}

export default App;
