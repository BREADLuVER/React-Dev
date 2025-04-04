import React, { useState, useEffect, useCallback } from "react";

let timeout = null
export default function UserList() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            // console.log("Response:", response);
            const data = await response.json();
            // console.log("Data:", data);
            setUsers(data);
        }

        fetchUsers();
    }, []);

    useEffect(() => {
        if (timeout) {
            clearTimeout(timeout);
        }
        // console.log("Filtering users with search term:", search);
        timeout = setTimeout(() => {
            const results = users.filter((user) => {
                const isMatched = user.name.toLowerCase().includes(search.toLowerCase());
                console.log("isMatchedL", isMatched, user.name)
                return isMatched;
            });
            console.log("filtered", results)
            setFilteredUsers(results);
        }, 1000)

        return () => {
            clearTimeout(timeout)
        }
    }, [search]);

    // const debounceSearch = useCallback((value) => {
    //     console.log("debounced")
    //     if (timeout) {
    //         clearTimeout(timeout)
    //     }
    //     timeout = setTimeout(() => {
    //         setSearch(value)
    //     }, 1000)
    // }, [])

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <h1>User List</h1>
            <input
                type="text"
                value={search}
                onChange={handleChange}
                placeholder="Search users..."
            />
            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
