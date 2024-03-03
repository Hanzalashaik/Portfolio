import express from "express";
import jwt from "jsonwebtoken"

const router = express.Router();

//sign up
router.post("/admin", async (req, res) => {
  try {
    let { email, password } = req.body;
    const AdminEmail = "shaikhhanzala27@gmail.com";
    const AdminPassword = "Hanzala@123";

    if (email !== AdminEmail || password !== AdminPassword) {
      return res
        .status(400)
        .json({ success: "Email or Password is incorrect" });
    }

    const token = jwt.sign({ email }, "secret", {
      expiresIn: "30d",
    });

    res.status(200).json({ message: "Admin login successfully", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//logout
router.post("/logout", (req, res) => {
  try {
    res.status(200).json({ success: "Logout Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error);
  }
});

export default router;
