import winston from 'winston';
import express from 'express';

const errorHandler = (err, req, res, next) => {
  winston.error(err.message, err);
  res.status(500).json({ message: 'An unexpected error occurred', error: err.message });
};

export default errorHandler;