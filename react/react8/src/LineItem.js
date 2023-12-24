import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
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
                style={item.checked ? { textDecoration: "line-through" } : null}
            >
                {item.text}
            </label>
            <FaTrashAlt
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
                aria-label={`Delete ${item.text}`}
            />
        </li>
    );
};

export default LineItem;
