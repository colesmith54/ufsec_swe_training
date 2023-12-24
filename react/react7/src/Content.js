import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
    // only change state with setState
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
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => {
                                    handleCheck(item.id);
                                }}
                            />
                            <label
                                onDoubleClick={() => handleCheck(item.id)}
                                style={
                                    item.checked
                                        ? { textDecoration: "line-through" }
                                        : null
                                }
                            >
                                {item.text}
                            </label>
                            <FaTrashAlt
                                role="button"
                                tabIndex="0"
                                onClick={() => handleDelete(item.id)}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="empty" style={{ marginTop: "2rem" }}>
                    No items in the list
                </p>
            )}
        </main>
    );
};

export default Content;
