import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();
        const fetchData = async (fetchURL) => {
            try {
                const response = await axios.get(fetchURL, {
                    cancelToken: source.token,
                });
                if (isMounted) {
                    setData(response.data);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setData([]);
                    setError(err);
                }
            } finally {
                isMounted && setLoading(false);
            }
        };

        fetchData(url);

        return () => {
            isMounted = false;
            source.cancel();
        };
    }, [url]);

    return { data, error, loading };
};

export default useAxiosFetch;
