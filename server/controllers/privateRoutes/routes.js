import express from "express";

const router = express.Router();

router.post("/experince", (req, res) => {
  try {
    const exp = req.body;
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
