import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";

const Header = ({ title, width }) => {
    return (
        <header className="Header">
            <h1>{title}</h1>
            {width < 768 ? (
                <FaMobileAlt className="icon" />
            ) : width < 992 ? (
                <FaTabletAlt className="icon" />
            ) : (
                <FaLaptop className="icon" />
            )}
        </header>
    );
};

export default Header;
