import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("adharsh");

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();

    const { username, password } = req.body;
    await client.connect();

    if (req.query.action === "register") {
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.collection("users").insertOne({ username, password: hashedPassword });
        return res.status(201).json({ message: "User registered successfully" });
    } else if (req.query.action === "login") {
        const user = await db.collection("users").findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        return res.status(200).json({ token });
    }
}