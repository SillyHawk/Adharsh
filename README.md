# Adharsh - A Modern Social Media Platform

Adharsh is a **black and white themed** social media platform with a simple, modern design. It includes:
- **Stories, posts, reels**  
- **User search & trending hashtags**  
- **Profile editing (change username, profile picture, etc.)**  
- **Advertisement system (high, medium, low sponsorship)**  
- **Like, comment, share functionality**  
- **Permanent login & register system (no local storage)**  
- **Deployed on GitHub & Vercel (no CLI required)**  

## Deployment Guide

### 1. Upload to GitHub
1. Create a repository on [GitHub](https://github.com/)
2. Upload this project

### 2. Deploy on Vercel
1. Go to [Vercel](https://vercel.com/) and import the repository.
2. Add **Environment Variables**:
   - `MONGO_URI = your_mongodb_connection_string`
   - `JWT_SECRET = your_random_secret_key`
3. Click **Deploy**

### 3. Live App
Once deployed, your app will be live at `https://yourproject.vercel.app/`.

---
## Tech Stack
- **Next.js** (Frontend & API routes)
- **MongoDB** (Database)
- **Vercel** (Hosting & deployment)
- **JWT** (Authentication)
- **Bcrypt** (Password hashing)

---
## License
This project is open-source.
