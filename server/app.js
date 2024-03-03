import express from "express";
import config from "config";
import "./utils/dbConnect.js";
import AdminRoute from "./controllers/admin.js";
import privateRoutes from "./controllers/privateRoutes/routes.js"

const PORT = config.get("PORT");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/auth", AdminRoute);
app.use("/api", privateRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT 🚀 ${PORT}`);
});
