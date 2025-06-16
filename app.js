import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 4000;

// Needed for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "videos" folder
app.use("/videos", express.static(path.join(__dirname, "videos")));

app.get("/", (req, res) => {
    res.send(`
        <h1>Video Streaming</h1>
        <video width="640" controls autoplay>
            <source src="/videos/video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
