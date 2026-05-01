const router = require("express").Router();
const authRoutes = require("./auth.routes");
router.use("/v1", authRoutes);

module.exports = router;
