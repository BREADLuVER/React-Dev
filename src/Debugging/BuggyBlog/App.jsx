import React, { useState, useEffect } from "react";

const posts = [
    { id: 1, title: "First Post", content: "This is the first post." },
    { id: 2, title: "Second Post", content: "This is the second post." },
    { id: 3, title: "Third Post", content: "This is the third post." },
];

export default function BlogViewer() {
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [viewCount, setViewCount] = useState(0);

    const handleSelectPost = (post) => {
        console.log("Selecting post:", post);
        setSelectedPostId(post.id);
    };

    const selectedPost = posts.find(post => post.id === selectedPostId);

    useEffect(() => {
        if (selectedPost) {
            console.log("Selected post changed to:", selectedPost.title);
            setViewCount(prev => prev + 1);
        }
    }, [selectedPost]);
    
    useEffect(() => {
        if (selectedPost) {
            console.log("Selected post changed to:", selectedPost.title);
        }
    }, [selectedPost]);

    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <button onClick={() => handleSelectPost(post)}>
                            {post.title}
                        </button>
                    </li>
                ))}
            </ul>

            <div style={{ marginTop: "2rem" }}>
                <h2>Selected Post</h2>
                <p>{selectedPost ? selectedPost.content : "none"}</p>
            </div>

            <div>
                <h2>View Count: {viewCount}</h2>
            </div>
        </div>
    );
}
