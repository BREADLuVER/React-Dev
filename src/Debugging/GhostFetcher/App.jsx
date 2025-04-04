import React, { useState, useEffect } from "react";

function GhostFetcher() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(() => {
        setLoading(true);

        async function fetchData() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${Math.floor(Math.random() * 10) + 1}`);
            const result = await response.json();
            setData(result);
            setLoading(false);
        }

        fetchData();
    }, [query]);

    const handleFetch = () => {
        setQuery((prev) => prev + "1"); // fake query change
    };

    return (
        <div>
            <h1>Ghost Fetcher</h1>
            <button onClick={handleFetch}>
                Fetch New User
            </button>
            {loading && <p>Loading...</p>}
            {data && <div>{data.name}</div>}
        </div>
    );
}

function ToggleGhostFetcher() {
    const [showFetcher, setShowFetcher] = useState(true);

    return (
        <div>
            <button onClick={() => setShowFetcher(prev => !prev)}>
                Toggle Fetcher
            </button>
            {showFetcher && <GhostFetcher />}
        </div>
    );
}

export {ToggleGhostFetcher, GhostFetcher};