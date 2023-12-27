const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
};

Header.defaultProps = {
    title: "Generic List",
};

export default Header;
