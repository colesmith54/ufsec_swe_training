const Header = ({ apiRequest, setItems }) => {
    const API_URL = "https://jsonplaceholder.typicode.com";
    const types = ["users", "posts", "comments"];
    return types.map((type) => (
        <button
            onClick={() => apiRequest(`${API_URL}/${type}`, setItems)}
            key={type}
        >
            {type}
        </button>
    ));
};

export default Header;
