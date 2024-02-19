import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse JSON requests
app.use(express.json());

// Define a route for the homepage
app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "public" });
});

//define the route for single product page
app.get("/product_detail.html", (req, res) => {
    res.sendFile("product_detail.html", { root: "public" });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});