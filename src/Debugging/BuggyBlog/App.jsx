import React, { useState } from "react";

const posts = [
    { id: 1, title: "First Post", content: "This is the first post." },
    { id: 2, title: "Second Post", content: "This is the second post." },
    { id: 3, title: "Third Post", content: "This is the third post." },
];

export default function BlogViewer() {
    const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

    const handleSelectPost = (id: number) => {
        console.log("Selecting post with id:", id);
        setSelectedPostId(id);
    };

    const selectedPost = posts.find(post => post.id === selectedPostId);

    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <button onClick={() => handleSelectPost(post.id)}>
                            {post.title}
                        </button>
                    </li>
                ))}
            </ul>

            <div style={{ marginTop: "2rem" }}>
                <h2>Selected Post</h2>
                <p>{selectedPost.content}</p>
            </div>
        </div>
    );
}
