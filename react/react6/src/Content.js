import { useState } from "react";

const Content = () => {
    // only change state with setState
    const [name, setName] = useState("Cole");
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ["John", "Jane", "Joe"];
        const randomIndex = Math.floor(Math.random() * names.length);
        setName(names[randomIndex]);
    };

    const handleClick = () => {
        // count will be logged as what was passed into function
        setCount(count + 1);
        setCount(count + 1); // doing setCount twice will not increment count by 2
        console.log(count);
    };

    const handleClick2 = (name) => {
        console.log(count);
    };

    return (
        <main>
            <p onDoubleClick={handleClick}>Hello {name}</p>
            <button onClick={handleNameChange}>change name</button>
            <button onClick={handleClick}>click 1</button>
            <button onClick={handleClick2}>click 2</button>
        </main>
    );
};

export default Content;
