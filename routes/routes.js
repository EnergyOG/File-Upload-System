import express from 'express';
import upload from '../middleware/upload.js';
import { uploadFile, uploadImage } from '../controllers/uploadController.js';

const router = express.Router();

router.post(
  '/uploadFile',
  upload.single('file'),
  uploadFile              
);

router.post(
    '/uploadImage',
    upload.single('image'),
    uploadImage
);

export default router;
