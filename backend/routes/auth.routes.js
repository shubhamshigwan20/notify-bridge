const router = require("express").Router();
const validate = require("../middleware/validate");
const { workspaceSignup } = require("../controllers/auth.controllers");
const { workspaceSchema } = require("../validations/auth.validations");

router.post("/workspaces", validate(workspaceSchema), workspaceSignup);

module.exports = router;
