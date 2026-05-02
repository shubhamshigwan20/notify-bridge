const requestLogger = (req, res, next) => {
  console.log(
    `path ->${req.path}, headers ->${JSON.stringify(req.headers)}, methods ->${req.method}, body ->${JSON.stringify(req.body)}`,
  );
  next();
};

module.exports = requestLogger;
