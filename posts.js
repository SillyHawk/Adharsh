import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("adharsh");

export default async function handler(req, res) {
    await client.connect();

    if (req.method === "GET") {
        const posts = await db.collection("posts").find().sort({ createdAt: -1 }).toArray();
        return res.status(200).json(posts);
    }

    if (req.method === "POST") {
        const { userId, caption, image, type, sponsored } = req.body; 
        await db.collection("posts").insertOne({
            userId, caption, image, type, sponsored, createdAt: new Date()
        });
        return res.status(201).json({ message: "Post created successfully" });
    }
}