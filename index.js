import { useEffect, useState } from "react";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/api/posts").then(res => res.json()).then(data => setPosts(data));
    }, []);

    return (
        <div style={{ backgroundColor: "#000", color: "#fff", fontFamily: "Arial, sans-serif" }}>
            <h1>Adharsh</h1>
            {posts.map(post => (
                <div key={post._id}>
                    <img src={post.image} alt="Post" width="300px" />
                    <p>{post.caption}</p>
                </div>
            ))}
        </div>
    );
}