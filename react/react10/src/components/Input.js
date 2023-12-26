const Input = ({ color, setColor }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={color}
                onChange={(e) => {
                    setColor(e.target.value.trim());
                }}
            />
        </form>
    );
};

export default Input;
