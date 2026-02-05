import express from 'express';
import upload from '../middleware/upload.js';
import uploadFile from '../controllers/uploadController.js';
import uploadImage from '../controller/fileUpload.controller..js';

const router = express.Router();

router.post(
  '/upload',
  upload.single('file'),
  uploadFile              
);

router.post(
    '/uploadImage',
    upload.single('image'),
    uploadImage
);

export default router;
