const express = require("express");
const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();

// Accessible to any logged-in user
router.get("/user", protect, (req, res) => {
  res.json({
    message: "User access granted",
    user: req.user
  });
});

// Accessible only to admin
router.get("/admin", protect, authorizeRoles("admin"), (req, res) => {
  res.json({
    message: "Admin access granted"
  });
});

module.exports = router;
