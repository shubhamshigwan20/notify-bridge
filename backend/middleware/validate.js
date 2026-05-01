const validate = (schema) => async (req, res, next) => {
  try {
    const parseResult = schema.safeParse(req.body);
    if (!parseResult.success) {
      const err = new Error(parseResult.error.message);
      err.status = 400;
      throw err;
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = validate;
