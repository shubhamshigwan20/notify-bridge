const registerEvent = (req, res, next) => {
  try {
    const { name, description } = req.body;
    const eventId = registerEventAndGetId(name, description);
    res.status(201).json({ status: true, eventId });
  } catch (err) {
    next(err);
  }
};

module.exports = { registerEvent };
