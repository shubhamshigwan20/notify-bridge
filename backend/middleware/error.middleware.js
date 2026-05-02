const errorHandler = async (err, req, res, next) => {
  if (err) {
    if (err.status === 400) {
      return res.status(400).json({
        status: false,
        message: err.message,
      });
    }
    res.status(500).json({
      status: false,
      message: "internal server error",
    });
  }
  next();
};

module.exports = errorHandler;
