const apiRequest = async (url = "", setItems) => {
    try {
        const response = await fetch(url, { method: "GET" });
        if (!response.ok) throw Error("Fetch error");
        const data = await response.json();
        setItems(data);
    } catch (err) {
        console.log(err);
    }
};

export default apiRequest;
