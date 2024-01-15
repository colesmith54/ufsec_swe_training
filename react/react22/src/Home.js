import Feed from "./Feed";
import { useStoreState } from "easy-peasy";

const Home = ({ loading, error }) => {
    const searchResults = useStoreState((state) => state.searchResults);
    return (
        <main className="Home">
            {loading && <p className="statusMsg">Loading posts...</p>}
            {!loading && error && (
                <p className="statusMsg" style={{ color: "red" }}>
                    {error}
                </p>
            )}
            {!loading &&
                !error &&
                (searchResults.length ? (
                    <Feed posts={searchResults} />
                ) : (
                    <p className="statusMsg">No posts found.</p>
                ))}
        </main>
    );
};

export default Home;
