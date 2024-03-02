import express from "express"
import config from "config"
import "./utils/dbConnect.js"

const PORT = config.get("PORT")
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, World!");
  });

app.listen(PORT, () => {
    console.log(`Server is running on PORT 🚀 ${PORT}`);
  });