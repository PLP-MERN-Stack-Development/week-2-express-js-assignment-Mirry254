const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // move on to the next middleware/route
};

module.exports = logger;