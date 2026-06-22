const express = require("express");
const jwt = require("jsonwebtoken");
const AdminSession = require("../models/AdminSession");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { id, password } = req.body;

    if (!id || !password) {
      return res.status(400).json({ message: "ID and password are required" });
    }

    const adminId = process.env.ADMIN_ID || "admin";
    const adminPassword = process.env.ADMIN_PASSWORD || "epaid@admin2025";

    if (id !== adminId || password !== adminPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const expiresIn = process.env.JWT_EXPIRES_IN || "7d";
    const token = jwt.sign({ id: adminId, role: "admin" }, process.env.JWT_SECRET, {
      expiresIn,
    });

    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await AdminSession.create({
      adminId,
      token,
      expiresAt,
      ip: req.ip,
      userAgent: req.get("user-agent"),
    });

    return res.json({
      message: "Login successful",
      token,
      admin: { id: adminId, role: "admin" },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error during login" });
  }
});

router.get("/me", requireAuth, (req, res) => {
  res.json({ admin: req.admin });
});

router.post("/logout", requireAuth, async (req, res) => {
  try {
    await AdminSession.updateOne({ token: req.token }, { revoked: true });
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Server error during logout" });
  }
});

module.exports = router;
