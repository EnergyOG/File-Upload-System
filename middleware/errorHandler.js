import logger from '../utils/logger.js';

const errorHandler = (err, req, res, next) => {
  logger.error(err.message, {
    method: req.method,
    url: req.originalUrl,
    stack: err.stack,
  });

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'An unexpected error occurred',
  });
};

export default errorHandler;
