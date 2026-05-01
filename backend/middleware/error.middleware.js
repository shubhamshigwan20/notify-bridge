const errorHandler = async (err, req, res, next) => {
  if (err) {
    res.status(500).json({
      status: false,
      message: "internal server error",
    });
  }
  next();
};

module.exports = errorHandler;
