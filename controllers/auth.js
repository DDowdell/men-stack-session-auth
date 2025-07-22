const express = require("express");
const router = express.Router();

//Routes====================================
router.get("/sign-up", async (req, res) => {
  res.render("auth/sign-up.ejs");
});

// ==========================================
module.exports = router;
