import { useState } from "react";

export default function Profile() {
    const [username, setUsername] = useState("");
    const [profilePic, setProfilePic] = useState("");

    const updateProfile = async () => {
        await fetch("/api/user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, profilePic })
        });
        alert("Profile Updated");
    };

    return (
        <div style={{ backgroundColor: "#000", color: "#fff", fontFamily: "Arial, sans-serif" }}>
            <h1>Edit Profile</h1>
            <input type="text" placeholder="New Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder="Profile Picture URL" onChange={(e) => setProfilePic(e.target.value)} />
            <button onClick={updateProfile}>Save</button>
        </div>
    );
}