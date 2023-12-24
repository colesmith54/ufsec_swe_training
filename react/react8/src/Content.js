import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p className="empty" style={{ marginTop: "2rem" }}>
                    No items in the list
                </p>
            )}
        </main>
    );
};

export default Content;
