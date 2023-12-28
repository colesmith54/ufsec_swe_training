const Content = ({ items }) => {
    return (
        <div className="content">
            <ul>
                {items.map((item, index) => (
                    <>
                        <li key={index}>{JSON.stringify(item)}</li>
                        <br />
                    </>
                ))}
            </ul>
        </div>
    );
};

export default Content;
