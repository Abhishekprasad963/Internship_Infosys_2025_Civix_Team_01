import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// ======================
// GET /api/settings/me
// ======================
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user);
  } catch (err) {
    console.error("❌ Error fetching user:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// ======================
// PUT /api/settings/update
// ======================
router.put("/update", authMiddleware, async (req, res) => {
  try {
    const { fullName, profilePic } = req.body;
    const updates = {};

    if (fullName !== undefined) updates.fullName = fullName;
    if (profilePic !== undefined) updates.profilePic = profilePic; // allow null

    if (Object.keys(updates).length === 0)
      return res.status(400).json({ error: "No valid fields provided for update" });

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { $set: updates },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) return res.status(404).json({ error: "User not found" });

    res.json(updatedUser);
  } catch (err) {
    console.error("❌ Error updating user:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// ======================
// PUT /api/settings/update-password
// ======================
router.put("/update-password", authMiddleware, async (req, res) => {
  try {
    const { currentPassword, newPassword, confirmPassword } = req.body;

    if (!currentPassword || !newPassword || !confirmPassword)
      return res.status(400).json({ error: "All fields are required" });

    if (newPassword.length < 6)
      return res.status(400).json({ error: "New password must be at least 6 characters" });

    if (newPassword !== confirmPassword)
      return res.status(400).json({ error: "New password and confirm password do not match" });

    // Select password explicitly
    const user = await User.findById(req.user._id).select("+password");
    if (!user) return res.status(404).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) return res.status(400).json({ error: "Current password is incorrect" });

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (err) {
    console.error("❌ Error updating password:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
