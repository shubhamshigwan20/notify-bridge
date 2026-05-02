const router = require("express").Router();
const validate = require("../middleware/validate");
const authMiddleware = require("../middleware/auth.middleware");
const { registerEvent } = require("../controllers/event.controllers");
const { registerEventSchema } = require("../validations/event.validations");

router.post(
  "/events",
  authMiddleware,
  validate(registerEventSchema),
  registerEvent,
);

module.exports = router;
