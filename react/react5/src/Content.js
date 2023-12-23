const Content = () => {
    const handleNameChange = () => {
        const names = ["John", "Jane", "Joe"];
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
    };

    const handleClick = () => {
        console.log("Button clicked");
    };

    const handleClick2 = (name) => {
        console.log(`Hello ${name}!`);
    };

    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    };

    return (
        <main>
            <p onDoubleClick={handleClick}>Hello {handleNameChange()}</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClick2("Cole")}>
                Click me (with name)
            </button>
            <button onClick={(e) => handleClick3(e)}>Click me (event)</button>
        </main>
    );
};

export default Content;
