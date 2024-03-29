module.exports = (asyncCatch) => (req, res, next) => {
  Promise.resolve(asyncCatch(req, res, next)).catch(next);
};
