import express from "express";
import config from "config";
import "./utils/dbConnect.js";
import AdminRoute from "./controllers/admin.js";
import privateRoutes from "./controllers/privateRoutes/routes.js"
import protectedRoute from "./middleware/protectedRoute.js"
import cors from "cors"

const PORT = config.get("PORT");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/auth", AdminRoute);
app.use("/api",protectedRoute, privateRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT 🚀 ${PORT}`);
});
